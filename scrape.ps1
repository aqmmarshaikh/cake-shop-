$token = "apify_api_ZyKGL0duLKZBo2CE8g181C3LFxyJqU29j5eu"
$headers = @{
    "Authorization" = "Bearer $token"
    "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    "Referer" = "https://www.instagram.com/"
}

# Create directories
New-Item -ItemType Directory -Force -Path "golden-cake-shop\public\images" | Out-Null
New-Item -ItemType Directory -Force -Path "golden-cake-shop\public\videos" | Out-Null
New-Item -ItemType Directory -Force -Path "data\raw" | Out-Null

# Copy existing JSON
Copy-Item "profile_data.json" "data\raw\profile.json"
Copy-Item "posts_data.json" "data\raw\posts.json"

# Load posts data
$postsData = Get-Content "posts_data.json" | ConvertFrom-Json

Write-Host "Total posts: $($postsData.Count)"

$imgCount = 0
for ($i = 0; $i -lt $postsData.Count; $i++) {
    $post = $postsData[$i]
    if ($post.displayUrl -and $imgCount -lt 12) {
        $filename = "golden-cake-shop\public\images\gallery-$($imgCount + 1).jpg"
        if (-not (Test-Path $filename)) {
            try {
                $webClient = New-Object System.Net.WebClient
                $webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
                $webClient.Headers.Add("Referer", "https://www.instagram.com/")
                $webClient.DownloadFile($post.displayUrl, $filename)
                Write-Host "Downloaded: gallery-$($imgCount + 1).jpg (post $i, likes: $($post.likesCount))"
                $imgCount++
            } catch {
                Write-Host "Failed to download post $i : $_"
            }
        } else {
            Write-Host "Already exists: gallery-$($imgCount + 1).jpg"
            $imgCount++
        }
    }
}

# Download profile picture
$profileData = Get-Content "profile_data.json" | ConvertFrom-Json
if ($profileData.Count -gt 0 -and $profileData[0].profilePicUrlHD) {
    try {
        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
        $webClient.Headers.Add("Referer", "https://www.instagram.com/")
        $webClient.DownloadFile($profileData[0].profilePicUrlHD, "golden-cake-shop\public\images\profile.jpg")
        Write-Host "Downloaded profile picture"
    } catch {
        Write-Host "Failed to download profile pic: $_"
    }
}

Write-Host ""
Write-Host "=== POST CAPTIONS (for analysis) ==="
for ($i = 0; $i -lt [Math]::Min(10, $postsData.Count); $i++) {
    $post = $postsData[$i]
    Write-Host "Post $($i+1): Likes=$($post.likesCount) | Type=$($post.type) | Caption=$($post.caption)"
}

Write-Host ""
Write-Host "=== HASHTAGS USED ==="
$allHashtags = @()
foreach ($post in $postsData) {
    if ($post.hashtags) {
        $allHashtags += $post.hashtags
    }
}
$hashtagCounts = $allHashtags | Group-Object | Sort-Object Count -Descending | Select-Object -First 20
$hashtagCounts | ForEach-Object { Write-Host "#$($_.Name): $($_.Count)" }

Write-Host ""
Write-Host "Downloaded $imgCount images total"

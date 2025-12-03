# Custom Domain Setup Guide (GoDaddy + GitHub Pages)

## Prerequisites
- GitHub repository with your code pushed
- Custom domain purchased from GoDaddy (e.g., yourdomain.com)

## Step 1: Update Configuration Files

Replace `yourdomain.com` with your actual domain in these files:
1. `.github/workflows/deploy.yml` - line with `cname: yourdomain.com`
2. `package.json` - in the deploy script `--cname=yourdomain.com`

## Step 2: Configure DNS in GoDaddy

### Option A: Using Root Domain (yourdomain.com)

1. Log in to your [GoDaddy Account](https://www.godaddy.com)
2. Go to **My Products** → **DNS** for your domain
3. Add/Update these DNS records:

**A Records** (point to GitHub Pages):
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600 seconds

Type: A
Name: @
Value: 185.199.109.153
TTL: 600 seconds

Type: A
Name: @
Value: 185.199.110.153
TTL: 600 seconds

Type: A
Name: @
Value: 185.199.111.153
TTL: 600 seconds
```

**CNAME Record** (for www subdomain):
```
Type: CNAME
Name: www
Value: YOUR_GITHUB_USERNAME.github.io
TTL: 1 Hour
```

### Option B: Using Subdomain (www.yourdomain.com or events.yourdomain.com)

If you prefer to use a subdomain:

**CNAME Record**:
```
Type: CNAME
Name: www (or events, or any subdomain)
Value: YOUR_GITHUB_USERNAME.github.io
TTL: 1 Hour
```

## Step 3: Configure GitHub Repository

1. Push your code to GitHub:
```bash
git add .
git commit -m "Configure custom domain"
git push origin main
```

2. Wait for GitHub Actions to deploy (check Actions tab)

3. Go to your repository **Settings** → **Pages**

4. Under **Custom domain**, enter your domain:
   - `yourdomain.com` (if using root domain)
   - `www.yourdomain.com` (if using www subdomain)

5. Click **Save**

6. Wait a few minutes, then check **Enforce HTTPS** (recommended)

## Step 4: Verify Setup

### DNS Propagation
DNS changes can take 24-48 hours to fully propagate, but usually work within 1-2 hours.

Check DNS propagation:
- Visit: https://www.whatsmydns.net/
- Enter your domain and check A or CNAME records

### Test Your Site
1. Visit your custom domain in a browser
2. Check that HTTPS is working (green padlock)
3. Test navigation and routing

## Troubleshooting

### Site not loading
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct in GoDaddy
- Check GitHub Pages settings show your custom domain
- Ensure GitHub Actions deployment succeeded

### HTTPS not available
- Wait 24 hours after DNS propagation
- Uncheck and recheck "Enforce HTTPS" in GitHub Pages settings
- Ensure DNS records are correct

### 404 errors on page refresh
Add this to handle Angular routing:

1. Create `src/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'"></meta>
  </head>
</html>
```

2. Update `angular.json` assets:
```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  "src/404.html"
]
```

### Domain shows "Repository not found"
- Verify the CNAME file exists in gh-pages branch
- Check that custom domain is set in GitHub Pages settings
- Ensure repository is public (or you have GitHub Pro)

## Important Notes

- **DNS Propagation**: Changes take time, be patient
- **HTTPS**: GitHub provides free SSL certificates via Let's Encrypt
- **Email**: Custom domain for website doesn't include email hosting (set up separately in GoDaddy)
- **Subdomain vs Root**: Using www subdomain is often faster to set up than root domain

## Quick Reference

**Your Domain**: yourdomain.com (replace this!)
**GitHub Pages URL**: YOUR_GITHUB_USERNAME.github.io/dzevent
**Final URL**: https://yourdomain.com

## Need Help?

- [GitHub Pages Custom Domain Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GoDaddy DNS Management](https://www.godaddy.com/help/manage-dns-680)

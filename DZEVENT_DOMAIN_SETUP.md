# dzevent.com Domain Setup Guide

## Quick Setup Checklist

### ✅ Step 1: Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit with custom domain setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dzevent.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### ✅ Step 2: Configure DNS in GoDaddy

1. Log in to [GoDaddy](https://www.godaddy.com)
2. Go to **My Products** → Click **DNS** next to dzevent.com
3. Add these DNS records:

#### A Records (Delete existing A records first, then add these 4):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 seconds |
| A | @ | 185.199.109.153 | 600 seconds |
| A | @ | 185.199.110.153 | 600 seconds |
| A | @ | 185.199.111.153 | 600 seconds |

#### CNAME Record (for www):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | YOUR_USERNAME.github.io | 1 Hour |

Replace `YOUR_USERNAME` with your GitHub username.

### ✅ Step 3: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select `gh-pages` branch (wait for first deployment if not available)
4. Under **Custom domain**, enter: `dzevent.com`
5. Click **Save**
6. Wait a few minutes, then check **Enforce HTTPS**

### ✅ Step 4: Wait and Test

- DNS propagation: 1-48 hours (usually 1-2 hours)
- Check status: https://www.whatsmydns.net/ (enter dzevent.com)
- Your site will be live at: **https://dzevent.com**

## Verification Steps

### Check DNS Configuration
```bash
# Check A records
nslookup dzevent.com

# Check CNAME
nslookup www.dzevent.com
```

### Monitor Deployment
- Go to your GitHub repository
- Click **Actions** tab
- Watch the deployment workflow complete

## Expected Timeline

| Step | Time |
|------|------|
| Push to GitHub | Instant |
| GitHub Actions build | 2-5 minutes |
| DNS propagation | 1-2 hours (max 48h) |
| HTTPS certificate | 24 hours after DNS |

## Your URLs

- **Primary**: https://dzevent.com
- **WWW**: https://www.dzevent.com (redirects to primary)
- **GitHub Pages**: https://YOUR_USERNAME.github.io/dzevent (redirects to custom domain)

## Troubleshooting

### "Site can't be reached"
- Wait for DNS propagation (check whatsmydns.net)
- Verify A records in GoDaddy are correct
- Clear browser cache (Ctrl+Shift+Delete)

### "Repository not found" or 404
- Ensure custom domain is set in GitHub Pages settings
- Check that gh-pages branch exists
- Verify CNAME file exists in gh-pages branch

### HTTPS not working
- Wait 24 hours after DNS propagation
- In GitHub Pages settings, uncheck and recheck "Enforce HTTPS"
- Try accessing http://dzevent.com first

### Page refresh shows 404 (Angular routing issue)
Create `src/404.html`:
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

Update `angular.json` assets section:
```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  "src/404.html"
]
```

## Important Notes

✅ Configuration files already updated with dzevent.com
✅ Base href set to `/` for root domain
✅ CNAME configured in deployment workflow
✅ Production build optimized

## Need Help?

- GitHub Pages: https://docs.github.com/en/pages
- GoDaddy DNS: https://www.godaddy.com/help/manage-dns-680
- Check deployment status in GitHub Actions tab

---

**Ready to deploy!** Just follow the steps above and your site will be live at https://dzevent.com

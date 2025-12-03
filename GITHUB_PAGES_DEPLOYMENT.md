# GitHub Pages Deployment Guide

## Setup Steps

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository named `dzevent`
2. Don't initialize with README (we already have one)

### 2. Push Your Code to GitHub
Run these commands in your terminal:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dzevent.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

### 4. Automatic Deployment
- Every time you push to the `main` branch, GitHub Actions will automatically build and deploy your site
- The workflow is configured in `.github/workflows/deploy.yml`
- You can monitor the deployment progress in the **Actions** tab of your repository

### 5. Access Your Site
Your site will be available at:
```
https://YOUR_USERNAME.github.io/dzevent/
```

## Manual Deployment (Alternative)

If you prefer to deploy manually instead of using GitHub Actions:

```bash
npm run deploy
```

This will build your app and push it to the `gh-pages` branch.

## Important Notes

- The base href is set to `/dzevent/` - if you rename your repository, update this in:
  - `package.json` (deploy script)
  - `.github/workflows/deploy.yml` (build step)
  
- First deployment may take a few minutes to become available

- Make sure your repository is public, or you have GitHub Pro for private repo Pages

## Troubleshooting

### Site shows 404
- Ensure GitHub Pages is enabled and set to `gh-pages` branch
- Check that the deployment workflow completed successfully in Actions tab
- Wait a few minutes after first deployment

### Routing issues (page refresh shows 404)
For Angular routing to work properly on GitHub Pages, you may need to add a 404.html redirect. Create `src/404.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/dzevent'"></meta>
  </head>
</html>
```

And update `angular.json` to include it in assets.

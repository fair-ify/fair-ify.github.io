# GitHub Pages Deployment Guide

This guide explains how to deploy the Fairify website to GitHub Pages using GitHub Actions.

## Prerequisites

1. **GitHub Repository**: Your code must be in a GitHub repository
2. **GitHub Pages Enabled**: Enable GitHub Pages in your repository settings
3. **Actions Permissions**: Ensure GitHub Actions are enabled

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 2. Configure GitHub Pages

1. In the **Pages** section, ensure:
   - **Source**: GitHub Actions
   - **Branch**: Not applicable (GitHub Actions handles this)

### 3. Push Your Code

The GitHub Actions workflow will automatically trigger when you push to `main` or `master` branch:

```bash
git add .
git commit -m "Initial commit with GitHub Pages setup"
git push origin main
```

## How It Works

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file contains the deployment workflow:

1. **Build Job**: 
   - Installs dependencies
   - Builds the Next.js application
   - Creates static export in `./out` directory

2. **Deploy Job**:
   - Deploys to GitHub Pages
   - Only runs on `main` or `master` branch pushes

### Next.js Configuration

The `next.config.js` is configured for static export:

- `output: 'export'` - Creates static HTML files
- `trailingSlash: true` - Adds trailing slashes for GitHub Pages compatibility
- `images: { unoptimized: true }` - Disables image optimization for static export

## Deployment Process

1. **Push to Main Branch**: Triggers the workflow
2. **Automatic Build**: GitHub Actions builds your site
3. **Static Export**: Creates static files in `./out` directory
4. **Deploy to Pages**: Uploads and deploys to GitHub Pages
5. **Site Available**: Your site will be available at `https://username.github.io/repository-name`

## Troubleshooting

### Common Issues

1. **Build Failures**: Check the Actions tab for error logs
2. **Missing Dependencies**: Ensure all dependencies are in `package.json`
3. **Image Issues**: Images must be in the `public` folder for static export

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
# The static files will be in the ./out directory
```

## Custom Domain

To use a custom domain:

1. Add your domain to the **Pages** settings
2. Configure DNS records as instructed by GitHub
3. The workflow will automatically handle HTTPS certificates

## Monitoring

- **Actions Tab**: Monitor build and deployment status
- **Pages Tab**: View deployment history and settings
- **Repository Insights**: Track deployment frequency and success rates

## Support

For issues with:
- **GitHub Pages**: Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- **GitHub Actions**: Check [GitHub Actions documentation](https://docs.github.com/en/actions)
- **Next.js**: Check [Next.js documentation](https://nextjs.org/docs)

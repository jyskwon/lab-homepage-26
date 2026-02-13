# Deployment Guide

This guide explains how to deploy the DIAG Lab website to various hosting platforms.

## Building for Production

First, build the production version:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Method A: Using npx (No installation needed)**

1. **Deploy directly**:
   ```bash
   npx vercel
   ```
   
   Follow the prompts. Vercel will automatically detect it's a Vite project.

2. **For production deployment**:
   ```bash
   npx vercel --prod
   ```

**Method B: Using Vercel's web interface (Easiest)**
- Go to [vercel.com](https://vercel.com)
- Sign up/login with GitHub
- Click "New Project"
- Import your repository
- Vercel will auto-detect Vite and deploy

**Method C: Install globally (if you have permissions)**
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify

**Method A: Using npx (No installation needed)**

1. **Build and deploy**:
   ```bash
   npm run build
   npx netlify-cli deploy --prod --dir=dist
   ```

**Method B: Using Netlify's web interface**
- Go to [netlify.com](https://netlify.com)
- Sign up/login
- Drag and drop the `dist` folder after building
- Or connect your Git repository for continuous deployment

**Method C: Install globally (if you have permissions)**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

1. **Install gh-pages** (local install, no global needed):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. **Update vite.config.js** to set the base path:
   ```js
   export default {
     base: '/your-repo-name/',
     // ... rest of config
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### Option 4: Traditional Web Server (Apache/Nginx)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your web server's public directory (e.g., `public_html`, `www`, or `html`)

3. **Configure your server** to serve `index.html` for all routes (for React Router to work):
   
   **For Apache** (create `.htaccess` in `dist` folder):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
   
   **For Nginx**:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

### Option 5: AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Upload `dist` folder contents to an S3 bucket
3. Enable static website hosting on the S3 bucket
4. (Optional) Set up CloudFront for CDN

## Quick Deploy Commands (No Global Installation Needed)

**Vercel:**
```bash
npx vercel --prod
```

**Netlify:**
```bash
npm run build && npx netlify-cli deploy --prod --dir=dist
```

## Important Notes

- **Base Path**: If deploying to a subdirectory (like GitHub Pages), update `vite.config.js` with the `base` option
- **Environment Variables**: If you need environment variables, create `.env` files and reference them in your code
- **SPA Routing**: Make sure your server is configured to serve `index.html` for all routes (see Option 4)
- **No Global Install Needed**: Use `npx` to run tools without installing globally

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html

# DIAG Lab Website

Website for the Designing Intelligence Augmentation Group (DIAG) at Yonsei University.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or the port shown in the terminal).

### Building for Production

Build the project for production:
```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Deployment

### Static Hosting (Recommended)

This is a static React application that can be deployed to any static hosting service:

#### Vercel
1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

#### Netlify
1. Push your code to GitHub
2. Import the repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

#### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

#### Traditional Web Server
1. Build the project: `npm run build`
2. Upload the contents of the `dist` directory to your web server
3. Configure your server to serve `index.html` for all routes (for client-side routing)

### Server Configuration

If deploying to a traditional web server, ensure your server is configured to:
- Serve `index.html` for all routes (SPA routing)
- Serve static assets with proper caching headers

#### Nginx Example
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Apache Example (.htaccess)
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

## Project Structure

```
diag-lab-website/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Technologies

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Customization

- Update lab information in `src/App.jsx` (labInfo, newsData, researchAreas, etc.)
- Modify colors in Tailwind classes or extend the theme in `tailwind.config.js`
- Add/remove pages by updating the navigation and renderContent function in `App.jsx`

## License

© 2024 Designing Intelligence Augmentation Group. All rights reserved.




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

#### Netlify
1. Push your code to GitHub
2. Import the repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

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
│   ├── App.jsx          # Main application component (routing, pages, components)
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── content/             # JSON data files for website content
│   ├── news.json        # News items
│   ├── members.json     # Team members and alumni
│   ├── publications.json # Publications and posters/demos/workshops
│   ├── courses.json     # Course information
│   ├── keywords.json    # Centralized keywords list
│   └── lab-photos.json  # Lab photo gallery
├── public/              # Static assets
│   ├── members_image/   # Member profile pictures
│   └── publications_pdf/ # Publication PDF files
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

### Content Management
- **All content is managed through JSON files** in the `content/` directory
- See `content/README.md` for detailed documentation on editing content
- Update lab information in `src/App.jsx` (labInfo, researchAreas)
- News, members, publications, courses, and keywords are all managed via JSON files

### Styling
- Modify colors in Tailwind classes or extend the theme in `tailwind.config.js`
- Global styles are in `src/index.css`

### Pages and Navigation
- Add/remove pages by updating the navigation and renderContent function in `App.jsx`
- Pages include: Home, News, Members, Research, Publications, Courses, Lab Photos, Contact, Schedule

### Key Features
- **Single-page application** with hash-based routing (browser back/forward support)
- **Keyword filtering** on Publications page with checkbox interface
- **Selected Publications** section on homepage (publications with `"selected": true`)
- **Clickable keyword hashtags** that navigate to filtered Publications page
- **Responsive design** with mobile-friendly navigation
- **News sidebar** with year navigation
- **Posters, Demos, and Workshop Papers** separate section on Publications page

## SEO and Search Engine Optimization

The website is configured for optimal search engine visibility:

### SEO Features
- **Meta Tags**: Comprehensive meta tags including title, description, keywords, Open Graph, and Twitter Card tags
- **Structured Data**: JSON-LD schema markup for better search engine understanding
- **Sitemap**: XML sitemap at `/sitemap.xml` listing all major pages
- **Robots.txt**: Configured to allow search engine crawling
- **Canonical URLs**: Prevents duplicate content issues

### Submitting to Google Search Console

After deploying your website, follow these steps to ensure it appears in Google search:

1. **Verify Your Site**:
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your property (website URL)
   - Verify ownership using one of the provided methods (HTML file upload, meta tag, DNS, etc.)

2. **Submit Your Sitemap**:
   - In Google Search Console, go to "Sitemaps" in the left sidebar
   - Enter your sitemap URL: `https://your-domain.com/sitemap.xml`
   - Click "Submit"

3. **Request Indexing** (Optional):
   - Use the "URL Inspection" tool to check if specific pages are indexed
   - Click "Request Indexing" for important pages if they're not yet indexed

4. **Monitor Performance**:
   - Check the "Coverage" report to see which pages are indexed
   - Monitor "Performance" to see search queries and impressions
   - Fix any issues reported in the "Enhancements" section

### Other Search Engines

- **Bing Webmaster Tools**: Submit your sitemap at [Bing Webmaster Tools](https://www.bing.com/webmasters)
- **Yandex Webmaster**: Submit at [Yandex Webmaster](https://webmaster.yandex.com) if targeting Russian/Korean markets

### Important Notes
- It may take a few days to weeks for Google to crawl and index your site
- Keep your content updated regularly to maintain good search rankings
- The sitemap will be automatically accessible at `https://your-domain.com/sitemap.xml` after deployment
- Update the `lastmod` dates in `public/sitemap.xml` when you make significant content changes

## License

© 2024 Designing Intelligence Augmentation Group. All rights reserved.




# 🎯 RepoPages - Professional GitHub Pages Template

> **Create stunning landing pages for your GitHub repositories in minutes!**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-brightgreen)](https://pages.github.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.0-blue)](https://tailwindcss.com/)
[![Responsive](https://img.shields.io/badge/Responsive-Design-purple)](https://developers.google.com/web/fundamentals/design-and-ux/responsive)
[![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Supported-yellow)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

RepoPages is a modern, responsive GitHub Pages template built with **Tailwind CSS**. Perfect for creating professional landing pages for your repositories, open source projects, and developer tools.

## 🚀 Quick Start - Use This Template

### Option 1: Automated Setup (Recommended)

1. **Click the "Use this template" button** on GitHub
2. **Create your new repository** with your desired name
3. **Clone your repository** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```
4. **Run the interactive setup script**:
   ```bash
   node setup.js
   ```
5. **Follow the prompts** to configure your project
6. **Commit and push** your changes:
   ```bash
   git add .
   git commit -m "Configure RepoPages template"
   git push origin main
   ```
7. **Enable GitHub Pages** in your repository settings

### Option 2: Manual Setup

1. Use this template or fork the repository
2. Edit `index.html` and replace placeholder content
3. Update meta tags, project name, and descriptions
4. Customize colors, features, and technology badges
5. Enable GitHub Pages in repository settings

## 🚀 Features

- ✅ Fully responsive design with Tailwind CSS
- ✅ Automatic dark/light mode with system detection
- ✅ SEO optimized with complete meta tags
- ✅ GitHub Pages compatible with Jekyll
- ✅ No build dependencies (Tailwind CDN)
- ✅ Modular JavaScript architecture
- ✅ Professional card-based design system

## 📁 Project Structure

```
/
├── index.html                      # Main HTML file
├── assets/
│   ├── js/
│   │   └── theme-toggle.js         # Theme switching functionality
│   ├── images/                     # Project images
│   └── README.md                   # Assets documentation
├── _config.yml                     # Jekyll configuration
├── .github/
│   └── workflows/
│       └── pages.yml               # GitHub Actions deployment
├── CNAME                           # Custom domain (optional)
├── README.md                       # This file
├── CUSTOMIZATION.md                # Customization guide
├── TEMPLATE-ADAPTATION-GUIDE.md    # Universal adaptation guide
└── JAVASCRIPT-STRUCTURE.md         # JavaScript documentation
```

## 🛠️ Quick Setup

### Deploy to GitHub Pages:

1. **Fork or clone this repository**
2. **Go to Settings > Pages in your repository**
3. **Select "Deploy from a branch"**
4. **Choose "main" branch and "/ (root)"**
5. **Your site will be available at: `https://your-username.github.io/your-repo`**

### Custom Domain Setup:

1. **Create a `CNAME` file with your domain**
2. **Configure your domain's DNS to point to GitHub Pages**

## 🎨 Customization

### Change Brand Colors:
- Find `#0d80f2` in `index.html` and replace with your brand color
- Update gradient colors in hero section if needed
- Modify `theme-color` meta tag

### Update Content:
- Edit content in `index.html`
- Update meta tags for SEO
- Change GitHub repository links
- Replace example text with your project details
- Update project name and description

### Add Analytics:
- Add your Google Analytics code before `</head>`
- Include any other tracking scripts as needed

## 📱 Responsive Design

Template is optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+) 
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🌙 Dark Mode

- Automatic system theme detection
- Manual toggle available
- User preference saved in localStorage
- Smooth transitions between themes

## 📊 SEO Features

- Complete meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Cards for Twitter sharing
- JSON-LD structured data
- Automatic sitemap generation (GitHub Pages)
- Optimized for Core Web Vitals

## 🚀 Deployment

GitHub Pages automatically updates when you push to the main branch.

### GitHub Actions Workflow:

The template includes a workflow file that:
- Builds your site with Jekyll
- Deploys to GitHub Pages
- Handles dependencies automatically

## 🔧 Advanced Configuration

### Jekyll Plugins:
- `jekyll-sitemap` - Automatic sitemap generation
- `jekyll-seo-tag` - Enhanced SEO meta tags

### Performance:
- Modular JavaScript for better caching
- Optimized asset loading
- Minimal external dependencies

## � Documentation

- `CUSTOMIZATION.md` - Detailed customization guide
- `TEMPLATE-ADAPTATION-GUIDE.md` - How to adapt for any project
- `JAVASCRIPT-STRUCTURE.md` - JavaScript architecture documentation

## 🎯 Perfect For

- 📚 Open source repositories
- 🛠️ Developer tools and libraries
- ⚡ API documentation sites
- 🔧 CLI tools and utilities
- 📦 NPM packages and libraries
- � Project showcases and demos
- 👨‍💻 Repository landing pages

## 📄 License

MIT License - Feel free to use this template for your projects.

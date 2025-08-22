# Assets Directory

This directory contains all the static assets for your GitHub Pages template.

## 📁 Structure

```
assets/
├── js/
│   └── theme-toggle.js     # Theme switching functionality
├── images/                 # Project images and graphics
│   ├── og-image.png       # Open Graph image (1200x630px)
│   ├── twitter-image.png  # Twitter Card image (1200x600px)
│   └── logo.png           # Project logo
└── README.md              # This file
```

## 🖼️ Image Requirements

### **Open Graph Image (`og-image.png`)**
- **Dimensions:** 1200x630 pixels
- **Format:** PNG or JPG
- **Purpose:** Social media sharing (Facebook, LinkedIn, etc.)
- **Best practices:** Include your project name/logo, keep text readable

### **Twitter Card Image (`twitter-image.png`)**
- **Dimensions:** 1200x600 pixels
- **Format:** PNG or JPG
- **Purpose:** Twitter sharing
- **Best practices:** Similar to OG image but optimized for Twitter's aspect ratio

### **Logo (`logo.png`)**
- **Dimensions:** Flexible (recommended: 512x512px for versatility)
- **Format:** PNG with transparency
- **Purpose:** Branding, favicon, header logo
- **Best practices:** Simple, scalable design that works at small sizes

## 🔧 JavaScript Files

### **theme-toggle.js**
Handles the dark/light mode functionality:
- Theme detection and switching
- localStorage persistence
- System preference detection
- Icon updates

## 📝 Usage

### Adding Images:
1. Place your images in the appropriate subdirectory
2. Update the HTML file with correct paths
3. Ensure images are optimized for web (compressed but good quality)

### JavaScript:
- The theme-toggle.js is automatically loaded
- Additional JS files can be added and referenced in index.html

## 🎯 Best Practices

- **Optimize images:** Use tools like TinyPNG or ImageOptim
- **Use descriptive filenames:** Makes maintenance easier
- **Keep file sizes reasonable:** For better loading performance
- **Maintain consistent naming:** Use kebab-case for filenames

# Customization Guide - Professional GitHub Pages Template

## 🎯 Essential Steps

### 1. **URLs and Links**
Search and replace in `index.html`:

```
your-username.github.io/your-repository → your-domain.com
@your-twitter-username → @your-twitter
https://github.com/your-username → https://github.com/your-username
```

### 2. **Personal Information**
In `index.html`, update:
- Meta author: `<meta name="author" content="Your Name" />`
- JSON-LD author section
- Footer with your social links

### 3. **_config.yml**
```yaml
title: "Your Project - Description"
description: "Your project description"
url: "https://your-username.github.io"
baseurl: "/your-repository"
author: "Your Name"
```

### 4. **CNAME (Custom Domain)**
If you have a custom domain:
```
your-domain.com
```

### 5. **Brand Colors**
Find and replace `#0d80f2` with your primary color in:
- CSS variables
- Buttons and links
- Meta theme-color

### 6. **Images**
Create `/assets/` folder and add:
- `og-image.png` (1200x630px) - For Open Graph
- `twitter-image.png` (1200x600px) - For Twitter Cards  
- `logo.png` - Project logo

### 7. **Content**
Customize in `index.html`:
- Main title (H1)
- Project description
- Feature sections
- Code examples
- Call-to-action buttons
- Características y beneficios
- Ejemplos de código
- Enlaces a documentación

### 8. **Analytics (Opcional)**
Antes de `</head>` agregar:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Deploy en GitHub Pages

1. **Crear repositorio en GitHub**
2. **Subir archivos**
3. **Settings > Pages**
4. **Source: Deploy from branch**
5. **Branch: main, folder: / (root)**

## 🔧 Personalización Avanzada

### Cambiar tipografía:
```html
<link href="https://fonts.googleapis.com/css2?family=Tu+Fuente:wght@400;500;700;900&display=swap" rel="stylesheet">
```

### Modificar gradientes:
En la sección hero, cambia:
```html
class="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700"
```

### Añadir más secciones:
Sigue el patrón de las secciones existentes con Tailwind CSS.

## 📱 Testing Responsive

Verifica en:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px  
- Desktop: 1280px, 1440px+

## 🎨 Personalización de Colores

### Palette principal:
- Primary: `#0d80f2` 
- Secondary: usar variantes con Tailwind
- Success: `#10b981`
- Warning: `#f59e0b`
- Error: `#ef4444`

### Dark mode:
Los colores se ajustan automáticamente con las clases `dark:` de Tailwind.

## 📊 SEO Checklist

- ✅ Meta title único y descriptivo
- ✅ Meta description (150-160 caracteres)
- ✅ Open Graph tags completos
- ✅ Twitter Cards configurados
- ✅ JSON-LD structured data
- ✅ Sitemap automático (GitHub Pages)
- ✅ URLs limpias y descriptivas

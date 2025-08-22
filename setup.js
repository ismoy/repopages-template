#!/usr/bin/env node

/**
 * RepoPages Setup Script
 * Automatically configures the template for your repository
 * Run: node setup.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Template configuration
const config = {
  repositoryName: '',
  repositoryDescription: '',
  githubUsername: '',
  projectName: '',
  projectDescription: '',
  demoUrl: '',
  technologies: [],
  features: [],
  socialLinks: {
    github: '',
    twitter: '',
    linkedin: '',
    website: ''
  }
};

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function collectUserInput() {
  log('\n🎯 Welcome to RepoPages Setup!', 'cyan');
  log('Let\'s configure your repository landing page...\n', 'bright');

  // Repository information
  log('📦 Repository Information:', 'blue');
  config.githubUsername = await question('GitHub Username: ');
  config.repositoryName = await question('Repository Name: ');
  config.projectName = await question('Project Display Name: ');
  config.projectDescription = await question('Project Description: ');
  config.demoUrl = await question('Demo/Live URL (optional): ');

  // Technologies
  log('\n💻 Technologies (comma-separated):', 'blue');
  const techInput = await question('Technologies (e.g., React, TypeScript, Node.js): ');
  config.technologies = techInput.split(',').map(tech => tech.trim()).filter(tech => tech);

  // Features
  log('\n✨ Key Features (comma-separated):', 'blue');
  const featuresInput = await question('Key Features (e.g., Responsive Design, Dark Mode): ');
  config.features = featuresInput.split(',').map(feature => feature.trim()).filter(feature => feature);

  // Social links
  log('\n🔗 Social Links (optional):', 'blue');
  config.socialLinks.twitter = await question('Twitter username (without @): ');
  config.socialLinks.linkedin = await question('LinkedIn profile URL: ');
  config.socialLinks.website = await question('Personal website URL: ');
  
  config.socialLinks.github = `https://github.com/${config.githubUsername}`;
}

function updateIndexHtml() {
  const indexPath = path.join(__dirname, 'index.html');
  let content = fs.readFileSync(indexPath, 'utf8');

  // Update meta tags
  content = content.replace(
    /content="RepoPages - Professional GitHub Pages Template for Repositories"/g,
    `content="${config.projectName} - ${config.projectDescription}"`
  );

  content = content.replace(
    /content="RepoPages is a modern, responsive GitHub Pages template[^"]*"/g,
    `content="${config.projectDescription}"`
  );

  // Update GitHub Pages URLs
  const githubPagesUrl = `https://${config.githubUsername}.github.io/${config.repositoryName}`;
  content = content.replace(
    /https:\/\/your-username\.github\.io\/your-repository/g,
    githubPagesUrl
  );

  // Update repository URLs
  const repoUrl = `https://github.com/${config.githubUsername}/${config.repositoryName}`;
  content = content.replace(
    /https:\/\/github\.com\/ismoy\/ImagePickerKMP/g,
    repoUrl
  );

  // Update project name in hero section
  content = content.replace(
    /RepoPages: Professional GitHub Pages Template/,
    `${config.projectName}`
  );

  // Update project description in hero
  content = content.replace(
    /Create stunning landing pages for your GitHub repositories[^<]*/,
    config.projectDescription
  );

  // Update technology badges if provided
  if (config.technologies.length > 0) {
    const techBadges = config.technologies.map(tech => `
      <div class="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg px-3 py-1.5 border border-blue-200 dark:border-blue-700">
        <span class="text-blue-700 dark:text-blue-300 text-xs font-medium">${tech}</span>
      </div>`).join('');
    
    // Replace existing tech badges section
    content = content.replace(
      /<div class="flex flex-wrap gap-3 mt-4 items-center">[\s\S]*?<\/div>/,
      `<div class="flex flex-wrap gap-3 mt-4 items-center">${techBadges}</div>`
    );
  }

  // Update social links
  if (config.socialLinks.twitter) {
    content = content.replace(
      /https:\/\/x\.com\/belizairesmoy72/,
      `https://x.com/${config.socialLinks.twitter}`
    );
  }

  if (config.socialLinks.linkedin) {
    content = content.replace(
      /https:\/\/www\.linkedin\.com\/in\/ismoy-belizaire-a0ba99106\//,
      config.socialLinks.linkedin
    );
  }

  // Update GitHub profile link
  content = content.replace(
    /https:\/\/github\.com\/ismoy/g,
    `https://github.com/${config.githubUsername}`
  );

  fs.writeFileSync(indexPath, content);
  log('✅ index.html updated successfully!', 'green');
}

function updateReadme() {
  const readmePath = path.join(__dirname, 'README.md');
  let content = `# ${config.projectName}

${config.projectDescription}

## 🚀 Features

${config.features.map(feature => `- ${feature}`).join('\n')}

## 🛠️ Technologies

${config.technologies.map(tech => `- ${tech}`).join('\n')}

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/${config.githubUsername}/${config.repositoryName}.git
cd ${config.repositoryName}
\`\`\`

2. Open \`index.html\` in your browser or deploy to GitHub Pages.

## 🌐 Live Demo

${config.demoUrl ? `[View Live Demo](${config.demoUrl})` : 'Demo URL coming soon...'}

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**${config.githubUsername}**
${config.socialLinks.github ? `- GitHub: [${config.githubUsername}](${config.socialLinks.github})` : ''}
${config.socialLinks.twitter ? `- Twitter: [@${config.socialLinks.twitter}](https://x.com/${config.socialLinks.twitter})` : ''}
${config.socialLinks.linkedin ? `- LinkedIn: [Profile](${config.socialLinks.linkedin})` : ''}
${config.socialLinks.website ? `- Website: [${config.socialLinks.website}](${config.socialLinks.website})` : ''}

---

*This page was created using [RepoPages](https://github.com/ismoy/repopages-template) template by [Ismoy Belizaire](https://github.com/ismoy)*
`;

  fs.writeFileSync(readmePath, content);
  log('✅ README.md updated successfully!', 'green');
}

function updatePackageJson() {
  const packagePath = path.join(__dirname, 'package.json');
  const packageContent = {
    "name": config.repositoryName.toLowerCase(),
    "version": "1.0.0",
    "description": config.projectDescription,
    "main": "index.html",
    "scripts": {
      "setup": "node setup.js",
      "dev": "python -m http.server 8000",
      "build": "echo 'No build step required for static site'",
      "deploy": "gh-pages -d ."
    },
    "repository": {
      "type": "git",
      "url": `git+https://github.com/${config.githubUsername}/${config.repositoryName}.git`
    },
    "keywords": config.technologies,
    "author": config.githubUsername,
    "license": "MIT",
    "bugs": {
      "url": `https://github.com/${config.githubUsername}/${config.repositoryName}/issues`
    },
    "homepage": `https://${config.githubUsername}.github.io/${config.repositoryName}`,
    "devDependencies": {
      "gh-pages": "^6.0.0"
    }
  };

  fs.writeFileSync(packagePath, JSON.stringify(packageContent, null, 2));
  log('✅ package.json created successfully!', 'green');
}

function createGitHubWorkflow() {
  const workflowDir = path.join(__dirname, '.github', 'workflows');
  if (!fs.existsSync(workflowDir)) {
    fs.mkdirSync(workflowDir, { recursive: true });
  }

  const workflowContent = `name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;

  fs.writeFileSync(path.join(workflowDir, 'deploy.yml'), workflowContent);
  log('✅ GitHub Actions workflow created!', 'green');
}

function createGitIgnore() {
  const gitignoreContent = `# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
logs
*.log

# Setup script (remove after initial setup)
setup.js
`;

  fs.writeFileSync(path.join(__dirname, '.gitignore'), gitignoreContent);
  log('✅ .gitignore created successfully!', 'green');
}

function showCompletionInstructions() {
  log('\n🎉 Setup Complete!', 'green');
  log('═══════════════════════════════════════════════', 'cyan');
  
  log('\n📋 Next Steps:', 'yellow');
  log('1. Review the generated files and make any additional customizations', 'bright');
  log('2. Commit and push your changes to GitHub:', 'bright');
  log('   git add .', 'cyan');
  log('   git commit -m "Configure RepoPages template"', 'cyan');
  log('   git push origin main', 'cyan');
  
  log('\n3. Enable GitHub Pages in your repository settings:', 'bright');
  log(`   https://github.com/${config.githubUsername}/${config.repositoryName}/settings/pages`, 'cyan');
  
  log('\n4. Your site will be available at:', 'bright');
  log(`   https://${config.githubUsername}.github.io/${config.repositoryName}`, 'green');
  
  log('\n📚 Additional Commands:', 'yellow');
  log('• npm run dev     - Start local development server', 'bright');
  log('• npm run deploy  - Deploy manually to GitHub Pages', 'bright');
  
  log('\n💡 Pro Tip:', 'yellow');
  log('You can run this setup script again anytime with: node setup.js', 'bright');
  
  log('\n🙏 Template Credits:', 'cyan');
  log('This template was created by Ismoy Belizaire', 'bright');
  log('Repository: https://github.com/ismoy/repopages-template', 'bright');
  
  log('\n═══════════════════════════════════════════════', 'cyan');
}

async function main() {
  try {
    await collectUserInput();
    
    log('\n🔧 Configuring your RepoPages template...', 'yellow');
    
    updateIndexHtml();
    updateReadme();
    updatePackageJson();
    createGitHubWorkflow();
    createGitIgnore();
    
    showCompletionInstructions();
    
  } catch (error) {
    log(`\n❌ Error during setup: ${error.message}`, 'red');
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run the setup
main();

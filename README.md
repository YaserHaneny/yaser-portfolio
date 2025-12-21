# Yaser Portfolio

Modern, professional portfolio website built with Next.js 16 and Tailwind CSS 4.

## Features

- 🚀 **Modern Design**: Clean, professional UI with smooth animations
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🌙 **Dark Mode**: Automatic dark mode support
- 🔗 **GitHub Integration**: Automatically fetches projects from your GitHub profile
- ⚡ **Fast Performance**: Optimized with Next.js App Router
- 🎨 **Beautiful Animations**: Smooth transitions and hover effects

## Getting Started

### Installation

```bash
npm install
```

### Configuration

1. **Update GitHub Username**: 
   - Open `app/components/Projects.tsx`
   - Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username (line 25)

2. **Update Personal Information**:
   - Edit `app/components/Hero.tsx` for hero section
   - Edit `app/components/About.tsx` for about section
   - Edit `app/components/Contact.tsx` for contact information

3. **Update Skills**:
   - Edit `app/components/Skills.tsx` to add your skills

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── github-projects/    # GitHub API integration
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Skills.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── data/
│   └── projects.json           # Fallback projects data
└── lib/
    └── github.ts                # GitHub API helper
```

## GitHub Integration

The portfolio automatically fetches your public repositories from GitHub. It:
- Filters out forks
- Shows only repositories with descriptions
- Displays stars, language, and tech stack
- Falls back to `data/projects.json` if GitHub API fails

## Customization

### Colors
Edit Tailwind classes in components to change the color scheme.

### Projects
- Projects are automatically fetched from GitHub
- You can also manually add projects in `data/projects.json`
- Add project screenshots to `public/` folder

## Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npm run build
```

Or use the Vercel CLI:

```bash
vercel
```

## License

MIT License - feel free to use this template for your own portfolio!

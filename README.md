# Premium Portfolio Website

A bespoke, modern, professional portfolio website built with React, TypeScript, and Framer Motion. This is a white-label solution that can be easily customized through the `owner-data.json` file.

## Features

- 🎨 **Modern Design**: Elegant, refined, and professional design
- ⚡ **Performance**: Optimized for speed and smooth 60fps animations
- 📱 **Responsive**: Fully responsive across all devices
- 🎭 **Animations**: Smooth, meaningful animations with Framer Motion
- 🌙 **Theme Support**: Dark/light mode (ready for implementation)
- ♿ **Accessible**: Built with accessibility in mind
- 🔍 **SEO Optimized**: Ready for SEO optimization
- 📊 **Data-Driven**: All content managed through `owner-data.json`

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **React Router v6** for routing
- **Framer Motion** for animations
- **CSS Modules** for styling

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio-Website
```

2. Install dependencies:
```bash
npm install
```

3. Customize your data:
   - **IMPORTANT**: Edit the **root `owner-data.json`** file with your personal information
   - After editing, sync the data: `./sync-data.sh` or `cp owner-data.json src/data/owner-data.json`
   - Add your images to `public/images/`
   - After editing root `owner-data.json`, run `./sync-data.sh` (or `cp owner-data.json src/data/owner-data.json`)

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Preview production build:
```bash
npm run preview
```

## Project Structure

```
Portfolio-Website/
├── public/
│   └── images/          # Your images go here
├── src/
│   ├── components/      # Reusable components
│   ├── contexts/        # React contexts
│   ├── data/            # owner-data.json (synced from root)
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript types
│   ├── utils/           # Data loading
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── owner-data.json      # Edit this file — then run ./sync-data.sh
└── DEPLOY_GITHUB.md     # Free deploy on GitHub Pages
```

## Customization

All content is managed through `owner-data.json`. Simply edit this file to customize:

- Personal information
- Projects
- Experience
- Education
- Skills
- Contact information
- Social links
- Theme colors
- And more!

## Pages

- **Home** - Hero section with introduction
- **About** - Personal story, timeline, skills, interests
- **Projects** - Portfolio showcase with filtering and search
- **Experience** - Work history and career progression
- **Education** - Academic background and certifications
- **Skills** - Technical skills and expertise
- **Contact** - Contact form and information

## Development Phases

This project was built following a 10-phase development approach:

1. Project Setup & Foundation
2. Base Components & Layout
3. Landing Page
4. About Page
5. Projects Page
6. Project Modal & Details
7. Remaining Pages
8. Advanced Animations
9. Theme System & Polish
10. Optimization & Deployment

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms

The project builds to static files in the `dist` folder, so it can be deployed to any static hosting service.

## Performance

- Code splitting for routes
- Lazy loading images
- Optimized bundle size
- Smooth 60fps animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Support

For issues, questions, or contributions, please open an issue on GitHub.

---

Built with ❤️ using React, TypeScript, and Framer Motion


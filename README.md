# Western Fair District - OnBoard Hub

> **A centralized digital hub for Western Fair District event services workers to access onboarding documents, PDFs, and essential instructions online.**

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

## 🎯 Project Overview

The Western Fair District OnBoard Hub is a modern, responsive web application designed to streamline the onboarding process for new event services workers. By providing centralized access to all necessary documents, PDFs, and instructions online, this hub eliminates the need for physical paperwork and makes the training process more efficient and accessible.

### Key Features

- 📄 **Document Management** - Easy access to all onboarding materials
- 🔍 **Smart Search** - Find documents quickly with intelligent search
- 📱 **Mobile First** - Responsive design for all devices
- 🔒 **Secure Access** - Firebase Authentication with email/password login
- ☁️ **Cloud Storage** - Reliable document storage and delivery
- 🚀 **Fast Loading** - Optimized performance for quick access45

## 🛠️ Tech Stack

### Frontend

- **React 19.1.0** - Modern UI framework with hooks
- **Vite 7.0.0** - Fast build tool and development server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **React Router** - Client-side routing ✅
- **Firebase Auth** - Authentication service ✅

### Backend

- **Firebase** - Google's Backend-as-a-Service ✅
  - Authentication service ✅
  - Real-time database _(planned)_
  - File storage _(planned)_
  - Cloud functions _(planned)_

### Deployment _(planned)_

- **Vercel/Netlify** - Frontend hosting
- **Custom Domain** - Professional web presence
- **SSL/HTTPS** - Secure connections

## 📋 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/western-on-board-hub.git
   cd western-on-board-hub
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
western-on-board-hub/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # React components
│   ├── contexts/          # React Context (Auth) ✅
│   ├── Pages/             # Page components ✅
│   ├── assets/            # Images, fonts, etc.
│   ├── firebase.js        # Firebase configuration ✅
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── README.md              # This file
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue (#3B82F6) - Trust and professionalism
- **Secondary**: Green (#10B981) - Success and progress
- **Accent**: Yellow (#F59E0B) - Attention and highlights
- **Neutral**: Gray (#6B7280) - Text and backgrounds

### Typography

## 📱 Features Roadmap

### Phase 1: MVP (Minimum Viable Product)

- [x] Basic document listing ✅
- [x] PDF download functionality ✅
- [x] Firebase authentication with email/password ✅
- [x] Mobile responsive design ✅
- [x] Protected routes and conditional navigation ✅
- [x] Document card components with modern styling ✅
- [x] Realistic document data with categories ✅
- [ ] Admin upload interface

### Phase 2: Enhanced Features

- [ ] Document search and filtering
- [ ] Category organization
- [ ] PDF preview in browser
- [ ] User progress tracking
- [ ] Document versioning

### Phase 3: Advanced Features

- [ ] Real-time notifications
- [ ] Document analytics
- [ ] Multi-language support
- [ ] Offline accessibility
- [ ] Advanced admin dashboard

## 🔧 Development Guidelines

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use Tailwind for styling
- Keep components small and focused
- Write descriptive commit messages

### File Naming

- Components: `PascalCase.jsx`
- Pages: `PascalCase.jsx`
- Utilities: `camelCase.js`
- Hooks: `use[Name].js`

### Git Workflow

1. Create feature branch from `main`
2. Make commits with clear messages
3. Test thoroughly before merging
4. Use pull requests for code review

## 🚀 Deployment

### Environment Variables

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Build Process

```bash
# Build for production
npm run build

# Test production build locally
npm run preview
```

### Hosting Options

- **Vercel** (Recommended) - Easy deployment with GitHub integration
- **Netlify** - Alternative with form handling
- **Cloudflare Pages** - Global CDN with edge functions

## 🔒 Security Considerations

- Environment variables for sensitive data
- Input validation and sanitization
- HTTPS enforcement
- CORS configuration
- Rate limiting (API level)
- File upload restrictions

## 📊 Performance Metrics

### Target Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: > 90

### Optimization Strategies

- Code splitting and lazy loading
- Image optimization
- Bundle size analysis
- CDN for static assets
- Service worker caching

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Western Fair District for the opportunity
- React and Vite communities
- Tailwind CSS team
- Supabase for backend services

## 📞 Support

For questions or support, please contact:

- **Email**: support@westernfairdistrict.com
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/western-on-board-hub/issues)

---

**Built with ❤️ for the Western Fair District team**

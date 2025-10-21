# Blai - Custom Software Development & Consulting

This is a [Next.js](https://nextjs.org/) project for **Blai**, a worldwide custom software development and consulting company based in Accra, Ghana.

## Our Services

- 🌐 Web & Mobile App Development
- 🧠 AI-Powered Solutions
- 🧱 Blockchain Development
- ⚡ Custom Software Solutions
- 💼 IT Consulting

## About Blai

Blai is a worldwide custom software development and consulting company, currently based in **Accra, Ghana**. We are committed to meeting the highest ethical standards by implementing world-class software solutions without compromising their quality or functionality.

**Website:** [theblai.tech](https://theblai.tech)  
**Location:** Accra, Ghana  
**Serving:** Businesses Worldwide

---

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Build for Production

```bash
npm run build
npm start
```

---

## 📝 Admin Blog Dashboard

A modern admin dashboard for creating and managing blog posts has been integrated into this project.

### Quick Access

**Dashboard URL:** `/admin/blogs`  
**Local Dev:** `http://localhost:3000/admin/blogs`

### Features

✅ Create, edit, and delete blog posts  
✅ Upload images (featured & author)  
✅ Organize with categories and tags  
✅ Modern, professional UI  
✅ Mobile responsive  
✅ LocalStorage persistence (upgradable to API)

### Documentation

📖 **Full Admin Docs:** [`docs/ADMIN_DASHBOARD.md`](./docs/ADMIN_DASHBOARD.md)

---

## 📁 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── admin/      # Admin dashboard components
│   │   ├── blog/       # Blog components
│   │   └── ...         # Other components
│   ├── pages/          # Next.js pages
│   │   ├── admin/      # Admin routes
│   │   └── ...         # Public pages
│   ├── hooks/          # Custom React hooks
│   ├── data/           # Static data
│   ├── layout/         # Layout components
│   └── styles/         # Global styles
├── docs/               # Documentation
└── README.md           # This file
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### API Integration

The admin dashboard currently uses localStorage. To connect to a backend API, update the handlers in `src/components/admin/blog-manager.jsx`.

See [`docs/ADMIN_DASHBOARD.md`](./docs/ADMIN_DASHBOARD.md) for detailed API integration instructions.

---

## 🎨 Design Philosophy

- **Professional** - Business-appropriate, modern design
- **Clean** - Minimal color usage, prioritizing white
- **Organized** - Clear structure and hierarchy
- **Responsive** - Optimized for all devices

---

## 📚 Documentation

- **Admin Dashboard:** [`docs/ADMIN_DASHBOARD.md`](./docs/ADMIN_DASHBOARD.md)
- **Email Integration:** [`EMAIL_INTEGRATION.md`](./EMAIL_INTEGRATION.md)
- **Components:** Check individual component README files
- **API Integration:** See admin dashboard docs

---

## 🤝 Contributing

This is a proprietary project for Blai. For internal development guidelines, please contact the team.

---

## 📞 Contact

**Website:** [theblai.tech](https://theblai.tech)  
**Email:** info@theblai.tech  
**Location:** Accra, Ghana

---

**© 2024 Blai. All rights reserved.**

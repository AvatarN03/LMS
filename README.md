# Edgine – Learning Management System

A modern, video-first Learning Management System built with **Next.js**, designed for seamless online education and training.

---

## ✨ Key Features
- **Video-First Courses** – Stream demos & lectures directly in the player  
- **Unified Course Catalog** – Browse, filter & access resources fast  
- **Secure Auth** – Clerk / NextAuth for login & roles   
- **Responsive UI** – Optimized for desktop, tablet & mobile  


---

## 🛠 Tech Stack
- **Next.js 14+** • **Tailwind CSS** • **Geist Font**
- **Authentication** – Clerk / NextAuth
- **Content API** – Hygraph (Headless CMS)
- **Deployment** – Vercel

---

## 🚀 Quick Start
```bash
# 1. Clone
git clone https://github.com/AvatarN03/Edgine.git
cd Edgine

# 2. Install deps
npm install   # or yarn/pnpm/bun

# 3. Configure env
cp .env.example .env.local
# edit DATABASE_URL, NEXTAUTH_SECRET, etc.

# 4. Dev server
npm run dev
```

Visit **https://edgine-lms-naidu.vercel.app/**

---

## 📁 Structure

```
app/        # App Router pages & layouts
components/ # Reusable UI
lib/        # data & configs
public/     # Static assets

```

---

## 📦 Deploy
Push to GitHub → Vercel → connect repo → set env vars → Deploy.

---

## 🤝 Contributing
Fork → create feature branch → commit → open PR. MIT Licensed. Star ⭐ if useful!

Made by **AvatarN03**
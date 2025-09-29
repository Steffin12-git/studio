# 🌐 Steffin Thomas – Next.js & Genkit AI Portfolio

Welcome to my **personal portfolio website**! 🚀

This site is built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Google’s Genkit AI**.
It serves as a central hub where I showcase my **projects, skills, certifications, and career journey** in a clean, professional, and interactive way.

👉 **Live Website:** [steffinthomas.com](https://steffinthomas.com)
👉 **Source Code:** [GitHub – studio](https://github.com/Steffin12-git/studio)

---

## ✨ Features at a Glance

* 🎨 **Modern, Responsive UI** – Optimized for all devices using Tailwind CSS & ShadCN UI
* 🎥 **Smooth Animations** – Powered by Framer Motion for an engaging user experience
* 🤖 **AI Chatbot** – Genkit + Gemini model answers questions about my projects and skills
* 📂 **Easy Content Management** – Centralized data in `data.ts` for quick updates
* 💼 **Project Showcase** – Interactive cards with details, tech stacks, and links
* 📬 **Contact Form** – Integrated with EmailJS + validation using React Hook Form & Zod
* 🖌️ **Customizable Theme** – Simple to adjust colors and styles with CSS variables
* 🌌 **Animated Background** – Subtle gradient animation for a modern feel

---

## 🚀 Tech Stack

**Frontend:**

* [Next.js 14](https://nextjs.org/) (App Router)
* [Tailwind CSS](https://tailwindcss.com/)
* [ShadCN UI](https://ui.shadcn.com/)

**AI Integration:**

* [Genkit](https://firebase.google.com/docs/genkit) (Google)
* Gemini 2.5 Flash Model

**UI & Interactivity:**

* [Framer Motion](https://www.framer.com/motion/)
* [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

**Forms:**

* [React Hook Form](https://react-hook-form.com/)
* [Zod](https://zod.dev/)
* [EmailJS](https://www.emailjs.com/)

**Deployment:**

* [Vercel](https://vercel.com/) (production hosting)
* Firebase Hosting (optional backup)

---

## 📂 Project Structure

```bash
/
├── public/                  # Static files (images, icons, fonts)
├── src/
│   ├── ai/                  # Genkit AI chatbot logic
│   │   ├── flows/portfolio-chatbot.ts
│   │   ├── genkit.ts
│   │   └── portfolio-context.ts
│   │
│   ├── app/                 # Next.js App Router setup
│   │   ├── globals.css      # Global styles & theme
│   │   ├── gradient.css     # Animated background
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main landing page
│   │
│   ├── components/          # UI Components
│   │   ├── common/          # Shared (Navbar, Footer, etc.)
│   │   ├── landing/         # Landing page sections
│   │   └── ui/              # ShadCN primitives
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   └── lib/                 # Utilities & Data
│       ├── data.ts          # Centralized content (projects, skills, etc.)
│       ├── placeholder-images.ts
│       ├── placeholder-images.json
│       └── utils.ts
│
├── .env.local.example       # Example environment variables
├── next.config.ts           # Next.js config
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript config
```

---

## 🛠️ Getting Started

Follow these steps to run the project locally:

### 1. Prerequisites

* Node.js v18+
* npm or yarn installed

### 2. Clone the Repository

```bash
git clone https://github.com/Steffin12-git/studio.git
cd studio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
GENKIT_API_KEY=your_gemini_api_key
```

*(EmailJS keys can be generated on their platform. For AI chatbot, generate a Gemini API key.)*

### 5. Start Development Server

```bash
npm run dev
```

### 6. Visit Localhost

Open [http://localhost:9002](http://localhost:9002) in your browser.

---

## ☁️ Deployment

* Hosted on **Vercel** with GitHub integration
* Every push to `main` triggers an automatic deployment
* Custom domain connected: [steffinthomas.com](https://steffinthomas.com)
* SSL certificates managed automatically by Vercel

---

## 📬 Contact

Want to collaborate or connect? Reach me here:

* 📧 Email: [steffin.thomas545@gmail.com](mailto:steffin.thomas545@gmail.com)
* 💼 LinkedIn: [linkedin.com/in/steffinthomas12](https://www.linkedin.com/in/steffinthomas12)

---

## 📜 License

This project is licensed for **educational and reference purposes only**.  
You are free to view and study the code to learn from it.  
However, reuse, redistribution, or modification for personal or commercial use is **not permitted**.  

All rights reserved © 2025 Steffin Thomas.


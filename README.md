# Ahmed Hossam — Portfolio

A world-class premium portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Other Commands

```bash
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run typecheck # TypeScript type checking
```

## Customization

All portfolio content lives in one file:

```
src/config/portfolioConfig.ts
```

Edit that file to update your name, bio, projects, skills, experience, social links, and everything else. No other files need to change.

## EmailJS Setup

To enable the contact form:

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create a service and email template
3. Open `src/config/portfolioConfig.ts`
4. Update the `emailjs` section:

```ts
emailjs: {
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key",
}
```

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- Framer Motion
- React Icons
- shadcn/ui components
- EmailJS
- Sonner (toast notifications)
- Wouter (routing)
- TanStack Query

import Github from "@/public/icons8-github.svg";
import Telegram from "@/public/icons8-telegram.svg";
import Linkedin from "@/public/icons8-linkedin.svg";
import Instagram from "@/public/icons8-instagram.svg";
import Bun from "@/public/Bun.svg";
import Css from "@/public/CSS3.svg";
import EsLint from "@/public/ESLint.svg";
import Figma from "@/public/Figma.svg";
import HTML from "@/public/HTML5.svg";
import MaterialUi from "@/public/Material UI.svg";
import NextJs from "@/public/Next.js.svg";
import NPM from "@/public/NPM.svg";
import React from "@/public/React.svg";
import ReactHookForm from "@/public/React Hook Form.svg";
import ReduxToolkit from "@/public/Redux.svg";
import ShadcnUi from "@/public/shadcn-ui-seeklogo.svg";
import TailwindCss from "@/public/Tailwind CSS.svg";
import TypeScript from "@/public/TypeScript.svg";
import JavaScript from "@/public/JavaScript.svg";
import Vite from "@/public/Vite.js.svg";
import Webpack from "@/public/Webpack.svg";
import Yarn from "@/public/Yarn.svg";
import Zustand from "@/public/zustand.svg";
import Zod from "@/public/zod.svg";
import Linux from "@/public/Linux.svg";
import Email from "@/public/email-svgrepo-com.svg";
import Whatsapp from "@/public/icons8-whatsapp.svg";

export const navbarMenuItems = [
  { label: "Sobre", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export const heroIcons = [
  {
    label: "Github",
    icon: Github,
    href: "https://github.com/EliasMartinzs",
  },
  {
    label: "Linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/elias-martins-242a95258/",
  },
  {
    label: "Email",
    icon: Email,
    href: "mailto:rhyanlucaseliasmartins@gmail.com",
  },
  {
    label: "WhatsApp",
    icon: Whatsapp,
    href: "https://wa.me/+5543991117621",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "",
  },
];

export const frontEndTechnologies = [
  { label: "Bun", icon: Bun, href: "https://bun.sh" },
  { label: "CSS", icon: Css, href: "https://www.w3.org/Style/CSS/" },
  { label: "ESLint", icon: EsLint, href: "https://eslint.org" },
  { label: "Figma", icon: Figma, href: "https://www.figma.com" },
  {
    label: "HTML",
    icon: HTML,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "JavaScript",
    icon: JavaScript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { label: "Material-UI", icon: MaterialUi, href: "https://mui.com" },
  { label: "Next.js", icon: NextJs, href: "https://nextjs.org" },
  { label: "npm", icon: NPM, href: "https://www.npmjs.com" },
  { label: "React", icon: React, href: "https://reactjs.org" },
  {
    label: "React Hook Form",
    icon: ReactHookForm,
    href: "https://react-hook-form.com",
  },
  {
    label: "Redux",
    icon: ReduxToolkit,
    href: "https://redux-toolkit.js.org",
  },
  { label: "Shadcn-Ui", icon: ShadcnUi, href: "https://ui.shadcn.com" },
  { label: "Tailwind CSS", icon: TailwindCss, href: "https://tailwindcss.com" },
  {
    label: "TypeScript",
    icon: TypeScript,
    href: "https://www.typescriptlang.org",
  },
  { label: "Vite", icon: Vite, href: "https://vitejs.dev" },
  { label: "Webpack", icon: Webpack, href: "https://webpack.js.org" },
  { label: "Yarn", icon: Yarn, href: "https://yarnpkg.com" },
  { label: "Zod", icon: Zod, href: "https://zod.dev" },
  {
    label: "Zustand",
    icon: Zustand,
    href: "https://github.com/pmndrs/zustand",
  },
  { label: "Linux", icon: Linux, href: "https://www.kernel.org" },
];

export const frontEnd = [
  "React",
  "Next.js",
  "React Query",
  "TypeScript",
  "JavaScript",
  "Vitest",
  "Jest",
  "HTML",
  "CSS",
  "Webpack",
  "Vite",
  "ESLint",
  "Framer Motion",
  "Chart.js",
  "Redux",
  "Zustand",
] as const;

export const styles = [
  "CSS",
  "Tailwind CSS",
  "PostCSS",
  "Material Ui",
  "MUI",
  "Figma",
] as const;

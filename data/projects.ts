import Amb1 from "@/public/amb1.png";
import Amb2 from "@/public/amb2.png";
import Amb3 from "@/public/amb3.png";
import Church1 from "@/public/church-1.png";
import Church2 from "@/public/church-2.png";
import Church3 from "@/public/church-3.png";
import Fit2 from "@/public/fi-2.png";
import Fit1 from "@/public/fit-1.png";
import Fit3 from "@/public/fit-3.png";
import Gym1 from "@/public/gym1.png";
import Gym2 from "@/public/gym2.png";
import Gym3 from "@/public/gym3.png";
import Lms1 from "@/public/lms-1.png";
import Lms2 from "@/public/lms-2.png";
import Lms3 from "@/public/lms-3.png";
import Neura1 from "@/public/neura-1.png";
import Neura2 from "@/public/neura-2.png";
import Neura3 from "@/public/neura-3.png";
import NeuraShowcase from "@/public/neura-showcase.png";
import Readder1 from "@/public/readder-1.png";
import Readder2 from "@/public/readder-2.png";
import Readder3 from "@/public/readder-3.png";

import { StaticImageData } from "next/image";

interface Project {
  projectName: string;
  projectDate: string;
  technologies: string[];
  description: string;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  deploy: string;
  github: string;
}

export const projects: Project[] = [
  {
    projectName: "Cramb",
    projectDate: "30/10/24",
    technologies: [
      "Next Js",
      "Prisma",
      "Clerk Dev",
      "Tailwind CSS",
      "Shadcn Ui",
      "EmailJs",
    ],
    description: `Desenvolvi este projeto inspirado em uma ideia de um amigo, para uma
igreja onde o pastor ou padre pode criar e gerenciar células de
encontro para a comunidade. Cada célula tem um secretário
responsável por sua organização, e ele pode criar reuniões,
cadastrar novos membros e gerenciar pedidos de oração, seja
individual ou em grupo. Os membros podem acessar os perfis de outros
participantes, visualizar suas próximas reuniões, marcar presença
nas atividades e fazer pedidos de oração para si mesmos ou para
conhecidos. O acesso à plataforma é feito por login, criado e
enviado por e-mail pelo pastor ou secretário para cada usuário
(pastor, secretário ou membro).`,
    image1: Church1,
    image2: Church2,
    image3: Church3,
    deploy: "https://church-livid.vercel.app/",
    github: "https://github.com/EliasMartinzs/church",
  },
  {
    projectName: "Ambicious",
    projectDate: "19/09/23",
    technologies: ["Next Js", "MongoDb", "Clerk Dev", "Tailwind CSS", "Swiper"],
    description: `Existem melhorias a serem feitas, especialmente em termos de ajustes visuais que pretendo corrigir com o tempo. O código em si está um pouco complexo. Como eu fiz a construção do backend e da sua integração com o frontend, estou me aventurando em uma área completamente nova para mim. Este desafio envolve não apenas o desenvolvimento do backend, uma tarefa com a qual não tenho experiência prévia, mas também a coordenação precisa com o frontend para garantir uma funcionalidade harmoniosa entre as duas partes do projeto. Para enfrentar esse desafio, experimentei uma variedade de estilos na criação, exclusão e atualização de dados, assim como diferentes abordagens na construção de formulários, utilizando inputs, controllers, Hook Form, Zod e até mesmo o uso do 'useState' para criação de formulários.`,
    image1: Amb1,
    image2: Amb2,
    image3: Amb3,
    deploy: "",
    github: "https://github.com/EliasMartinzs/ambicious-nextjs",
  },
  {
    projectName: "FitTrack Pro",
    projectDate: "30/07/24",
    technologies: [
      "Next Js",
      "Drizzle Orm",
      "Clerk Dev",
      "Tailwind CSS",
      "Shadcn Ui",
      "Zustand",
    ],
    description: `Projeto para ajudar a organizar sua dieta e criar planos de treino personalizados. Com uma dashboard intuitiva, você poderá acompanhar o progresso dos seus treinos, monitorar seu consumo de água e ajustar seus exercícios conforme necessário. A plataforma permite criar treinos distintos para diferentes horários, tornando mais fácil adaptar a rotina às suas necessidades diárias.`,
    image1: Fit1,
    image2: Fit2,
    image3: Fit3,
    deploy: "https://fittrackpro.vercel.app/?vercelToolbarCode=OUyS7tV-qKV0ETN",
    github: "https://github.com/EliasMartinzs/fittrackpro",
  },
  {
    projectName: "Readder",
    projectDate: "22/01/24",
    technologies: [
      "Next Js",
      "Prisma",
      "Next Auth",
      "Tailwind CSS",
      "Shadcn Ui",
      "Swiper",
    ],
    description: `Este projeto é um site para fãs de animes e mangás, desenvolvido com o objetivo de aprender sobre TansStack Query e Fetch API. A plataforma oferece uma experiência interativa e informativa para os usuários explorarem uma ampla gama de animes e mangás.`,
    image1: Readder1,
    image2: Readder2,
    image3: Readder3,
    deploy: "https://readder.vercel.app/",
    github: "https://github.com/EliasMartinzs/readder",
  },
  {
    projectName: "Gym Os",
    projectDate: "29/06/25",
    technologies: [
      "Next Js",
      "Prisma",
      "Clerk Dev",
      "Tailwind CSS",
      "Shadcn Ui",
      "Hono",
      "Zustand",
      "Zod",
    ],
    description: `Um aplicativo web eficiente permite que personal trainers gerenciem alunos, treinos e horários de maneira prática. O sistema disponibiliza um painel com informações fundamentais (quantidade de alunos, exercícios mais recomendados, distribuição por objetivos), registro e monitoramento de alunos (status, tempo de relacionamento, aniversários), elaboração de templates de treino reutilizáveis ou personalizados, além de uma agenda para gerenciamento de aulas. Com temas claros e escuros, gráficos interativos e formulários simplificados, o aplicativo contribui para a automação de tarefas e aprimoramento do acompanhamento dos estudantes. Desenvolvido utilizando Next.js, TypeScript e Tailwind CSS.`,
    image1: Gym1,
    image2: Gym2,
    image3: Gym3,
    deploy: "https://gym-os-six.vercel.app/",
    github: "https://github.com/EliasMartinzs/gym-os",
  },
  {
    projectName: "Neura",
    projectDate: "2026",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn UI",
      "React Query",
      "OpenAI",
      "Framer Motion",
    ],
    description: `Neura é uma plataforma inteligente de estudos focada em aprendizado ativo e retenção de conhecimento. 
O projeto permite que usuários criem flashcards manualmente ou utilizem inteligência artificial para gerar cartões automaticamente a partir de temas, tópicos e níveis de dificuldade personalizados. 
A aplicação implementa o método de revisão espaçada (SM-2), ajustando automaticamente os intervalos de revisão com base nos acertos e erros do usuário, otimizando o processo de memorização. 
Além disso, conta com quizzes gerados por IA e a funcionalidade 'Explique e Aprenda', onde o usuário explica um tema com suas próprias palavras, a IA gera perguntas relacionadas e avalia a resposta fornecendo feedback detalhado sobre acertos, erros e pontos de melhoria. 
O objetivo do Neura é transformar o estudo passivo em um processo interativo, personalizado e eficiente.`,
    image1: Neura1,
    image2: Neura2,
    image3: Neura3,
    deploy: "https://neura-kappa.vercel.app/",
    github: "https://github.com/EliasMartinzs/neura",
  },
  {
    projectName: "Neura App",
    projectDate: "2026",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Axios",
      "Nativewind",
      "React Query",
    ],
    description: `App do Neura, desenvolvido em React Native com Expo, utilizando a mesma API do Neura Web.
O backend foi construído com Hono.js em conjunto com Next.js.
A API é consumida no app por meio de Axios e React Query.

Para testar o aplicativo, basta baixar o repositório na sua máquina e executar o build de sua preferência.
A API é pública e já está configurada dentro do repositório.`,
    image1: NeuraShowcase,
    image2: NeuraShowcase,
    image3: NeuraShowcase,
    deploy: "https://neura-kappa.vercel.app/",
    github: "https://github.com/EliasMartinzs/neura-mobile",
  },
  {
    projectName: "LMS",
    projectDate: "08/04/26",
    technologies: [
      "Next.js 16.1",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn Ui",
      "React 19",
      "Better Auth",
      "Zod",
      "React Hook Form",
      "Stripe 21",
      "AWS S3 (Tigris)",
      "ArcJet 1.3",
      "TipTap 3",
      "React Context + Server Actions",
    ],
    description: `O LMS é uma plataforma completa de cursos online que permite a qualquer pessoa criar, publicar e vender cursos digitais. O projeto foi desenvolvido do zero com foco em performance, e uma experiência de usuário moderna. Na plataforma, administradores podem criar cursos organizados em capítulos e aulas, com suporte a editor de texto rico, upload de vídeos e thumbnails. Já os alunos têm acesso a um catálogo público, podem comprar cursos via Stripe, assistir às aulas e acompanhar seu progresso individual.`,
    image1: Lms1,
    image2: Lms2,
    image3: Lms3,
    deploy: "https://lms-bice-nu.vercel.app/",
    github: "https://github.com/EliasMartinzs/lms",
  },
];

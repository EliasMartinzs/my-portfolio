import React from "react";

import Church1 from "@/public/church-1.png";
import Church2 from "@/public/church-2.png";
import Church3 from "@/public/church-3.png";
import Fit1 from "@/public/fit-1.png";
import Fit2 from "@/public/fi-2.png";
import Fit3 from "@/public/fit-3.png";
import Github from "@/public/icons8-github.svg";
import Vercel from "@/public/vercel.svg";
import Readder1 from "@/public/readder-1.png";
import Readder2 from "@/public/readder-2.png";
import Readder3 from "@/public/readder-3.png";
import Gym1 from "@/public/gym1.png";
import Gym2 from "@/public/gym2.png";
import Gym3 from "@/public/gym3.png";
import Amb1 from "@/public/amb1.png";
import Amb2 from "@/public/amb2.png";
import Amb3 from "@/public/amb3.png";
import Neura1 from "@/public/neura-1.png";
import Neura2 from "@/public/neura-2.png";
import Neura3 from "@/public/neura-3.png";


import Image, { StaticImageData } from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { ProjectGallery } from "./project-gallery";
import { MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Projects = () => {
  return (
    <section id="projects" className="space-y-8 lg:space-y-16 px-8">
      <h6 className="text-4xl max-lg:text-end font-JetBrainsBold">
        {"<"}Projetos{"/>"}
      </h6>

      {/* Mobile */}
      <div className="flex gap-5 flex-col lg:hidden">
        <div className="grid grid-cols-1 gap-16">
          <ProjectMobile
            projectName="Cramb"
            projectDate="30/10/24"
            technologies={[
              "Next Js",
              "Prisma",
              "Clerk Dev",
              "Tailwind CSS",
              "Shadcn Ui",
              "EmailJs",
            ]}
            description="Desenvolvi este projeto inspirado em uma ideia de um amigo, para uma
            igreja onde o pastor ou padre pode criar e gerenciar células de
            encontro para a comunidade. Cada célula tem um secretário
            responsável por sua organização, e ele pode criar reuniões,
            cadastrar novos membros e gerenciar pedidos de oração, seja
            individual ou em grupo. Os membros podem acessar os perfis de outros
            participantes, visualizar suas próximas reuniões, marcar presença
            nas atividades e fazer pedidos de oração para si mesmos ou para
            conhecidos. O acesso à plataforma é feito por login, criado e
            enviado por e-mail pelo pastor ou secretário para cada usuário
            (pastor, secretário ou membro)."
            image1={Church1}
            image2={Church2}
            image3={Church3}
            deploy="https://church-livid.vercel.app/"
            github="https://github.com/EliasMartinzs/church"
          />

          <Separator className="bg-muted-foreground" />

          <ProjectMobile
            projectName="Ambicious"
            projectDate="19/09/23"
            technologies={[
              "Next Js",
              "MongoDb",
              "Clerk Dev",
              "Tailwind CSS",
              "Swiper",
            ]}
            description="Existem melhorias a serem feitas, especialmente em termos de ajustes visuais que pretendo corrigir com o tempo. O código em si está um pouco complexo. Como eu fiz a construção do backend e da sua integração com o frontend, estou me aventurando em uma área completamente nova para mim. Este desafio envolve não apenas o desenvolvimento do backend, uma tarefa com a qual não tenho experiência prévia, mas também a coordenação precisa com o frontend para garantir uma funcionalidade harmoniosa entre as duas partes do projeto. Para enfrentar esse desafio, experimentei uma variedade de estilos na criação, exclusão e atualização de dados, assim como diferentes abordagens na construção de formulários, utilizando inputs, controllers, Hook Form, Zod e até mesmo o uso do 'useState' para criação de formulários."
            image1={Amb1}
            image2={Amb2}
            image3={Amb3}
            deploy=""
            github="https://github.com/EliasMartinzs/ambicious-nextjs"
          />

          <Separator className="bg-muted-foreground" />

          <ProjectMobile
            projectName="FitTrack Pro"
            projectDate="30/07/24"
            technologies={[
              "Next Js",
              "Drizzle Orm",
              "Clerk Dev",
              "Tailwind CSS",
              "Shadcn Ui",
              "Zustand",
            ]}
            description="Projeto para ajudar a organizar sua dieta e criar planos de treino personalizados. Com uma dashboard intuitiva, você poderá acompanhar o progresso dos seus treinos, monitorar seu consumo de água e ajustar seus exercícios conforme necessário. A plataforma permite criar treinos distintos para diferentes horários, tornando mais fácil adaptar a rotina às suas necessidades diárias."
            image1={Fit1}
            image2={Fit2}
            image3={Fit3}
            deploy="https://fittrackpro.vercel.app/?vercelToolbarCode=OUyS7tV-qKV0ETN"
            github="https://github.com/EliasMartinzs/fittrackpro"
          />

          <Separator className="bg-muted-foreground" />

          <ProjectMobile
            projectName="Readder"
            projectDate="22/01/24"
            technologies={[
              "Next Js",
              "Prisma",
              "Next Auth",
              "Tailwind CSS",
              "Shadcn Ui",
              "Swiper",
            ]}
            description="Este projeto é um site para fãs de animes e mangás, desenvolvido com o objetivo de aprender sobre TansStack Query e Fetch API. A plataforma oferece uma experiência interativa e informativa para os usuários explorarem uma ampla gama de animes e mangás."
            image1={Readder1}
            image2={Readder2}
            image3={Readder3}
            deploy="https://readder.vercel.app/"
            github="https://github.com/EliasMartinzs/readder"
          />

          <Separator className="bg-muted-foreground" />

          <ProjectMobile
            projectName="Gym Os"
            projectDate="29/06/25"
            technologies={[
              "Next Js",
              "Prisma",
              "Clerk Dev",
              "Tailwind CSS",
              "Shadcn Ui",
              "Hono",
              "Zustand",
              "Zod",
            ]}
            description="Um aplicativo web eficiente permite que personal trainers gerenciem alunos, treinos e horários de maneira prática. O sistema disponibiliza um painel com informações fundamentais (quantidade de alunos, exercícios mais recomendados, distribuição por objetivos), registro e monitoramento de alunos (status, tempo de relacionamento, aniversários), elaboração de templates de treino reutilizáveis ou personalizados, além de uma agenda para gerenciamento de aulas. Com temas claros e escuros, gráficos interativos e formulários simplificados, o aplicativo contribui para a automação de tarefas e aprimoramento do acompanhamento dos estudantes. Desenvolvido utilizando Next.js, TypeScript e Tailwind CSS."
            image1={Gym1}
            image2={Gym2}
            image3={Gym3}
            deploy="https://gym-os-six.vercel.app/"
            github="https://github.com/EliasMartinzs/gym-os"
          />
 <Separator className="bg-muted-foreground" />
          <ProjectMobile
  projectName="Neura"
  projectDate="2026"
  technologies={[
    "Next.js",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "Shadcn UI",
    "React Query",
    "OpenAI",
    "Framer Motion",
  ]}
  description="Neura é uma plataforma inteligente de estudos focada em aprendizado ativo e retenção de conhecimento. 
  O projeto permite que usuários criem flashcards manualmente ou utilizem inteligência artificial para gerar cartões automaticamente a partir de temas, tópicos e níveis de dificuldade personalizados. 
  A aplicação implementa o método de revisão espaçada (SM-2), ajustando automaticamente os intervalos de revisão com base nos acertos e erros do usuário, otimizando o processo de memorização. 
  Além disso, conta com quizzes gerados por IA e a funcionalidade 'Explique e Aprenda', onde o usuário explica um tema com suas próprias palavras, a IA gera perguntas relacionadas e avalia a resposta fornecendo feedback detalhado sobre acertos, erros e pontos de melhoria. 
  O objetivo do Neura é transformar o estudo passivo em um processo interativo, personalizado e eficiente."
  image1={Neura1}
  image2={Neura2}
  image3={Neura3}
  deploy=""
  github="https://github.com/EliasMartinzs/neura"
/>

        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex flex-col gap-y-40">
        <ProjectDesktop
          title="Ambicious"
          date="19/09/23"
          deploy=""
          github="https://github.com/EliasMartinzs/ambicious-nextjs"
          data={[Amb1, Amb2, Amb3]}
          side="right"
          technologies={[
            "Next Js",
            "MongoDb",
            "Clerk Dev",
            "Tailwind CSS",
            "Swiper",
          ]}
          key="ambci"
          description="Existem melhorias a serem feitas, especialmente em termos de ajustes visuais que pretendo corrigir com o tempo. O código em si está um pouco complexo. Como eu fiz a construção do backend e da sua integração com o frontend, estou me aventurando em uma área completamente nova para mim. Este desafio envolve não apenas o desenvolvimento do backend, uma tarefa com a qual não tenho experiência prévia, mas também a coordenação precisa com o frontend para garantir uma funcionalidade harmoniosa entre as duas partes do projeto. Para enfrentar esse desafio, experimentei uma variedade de estilos na criação, exclusão e atualização de dados, assim como diferentes abordagens na construção de formulários, utilizando inputs, controllers, Hook Form, Zod e até mesmo o uso do 'useState' para criação de formulários."
        />

        <ProjectDesktop
          title="Cramb"
          date="30/10/24"
          deploy="https://church-livid.vercel.app/"
          github="https://github.com/EliasMartinzs/church"
          data={[Church1, Church2, Church3]}
          side="left"
          technologies={[
            "Next Js",
            "Prisma",
            "Clerk Dev",
            "Tailwind CSS",
            "Shadcn Ui",
            "EmailJs",
          ]}
          key="cramb"
          description="
        Desenvolvi este projeto inspirado em uma ideia de um amigo, para uma igreja onde o pastor ou padre pode criar e gerenciar células de encontro para a comunidade. Cada célula tem um secretário responsável por sua organização, e ele pode criar reuniões, cadastrar novos membros e gerenciar pedidos de oração, seja individual ou em grupo. Os membros podem acessar os perfis de outros participantes, visualizar suas próximas reuniões, marcar presença nas atividades e fazer pedidos de oração para si mesmos ou para conhecidos. O acesso à plataforma é feito por login, criado e enviado por e-mail pelo pastor ou secretário para cada usuário (pastor, secretário ou membro)."
        />

        <ProjectDesktop
          title="FitTrack Pro"
          date="30/07/24"
          deploy="https://fittrackpro.vercel.app/?vercelToolbarCode=OUyS7tV-qKV0ETN"
          github="https://github.com/EliasMartinzs/fittrackpro"
          data={[Fit1, Fit2, Fit3]}
          side="right"
          technologies={[
            "Next Js",
            "Drizzle Orm",
            "Clerk Dev",
            "Tailwind CSS",
            "Shadcn Ui",
            "Zustand",
          ]}
          key="fittrack"
          description="
        Desenvolvi este projeto inspirado em uma ideia de um amigo, para uma igreja onde o pastor ou padre pode criar e gerenciar células de encontro para a comunidade. Cada célula tem um secretário responsável por sua organização, e ele pode criar reuniões, cadastrar novos membros e gerenciar pedidos de oração, seja individual ou em grupo. Os membros podem acessar os perfis de outros participantes, visualizar suas próximas reuniões, marcar presença nas atividades e fazer pedidos de oração para si mesmos ou para conhecidos. O acesso à plataforma é feito por login, criado e enviado por e-mail pelo pastor ou secretário para cada usuário (pastor, secretário ou membro)."
        />

        <ProjectDesktop
          title="Readder"
          date="22/01/24"
          deploy="https://readder.vercel.app"
          github="https://github.com/EliasMartinzs/readder"
          data={[Readder1, Readder2, Readder3]}
          side="left"
          technologies={[
            "Next Js",
            "Prisma",
            "Next Auth",
            "Tailwind CSS",
            "Shadcn Ui",
            "Swiper",
          ]}
          key="readder"
          description="
        Desenvolvi este projeto inspirado em uma ideia de um amigo, para uma igreja onde o pastor ou padre pode criar e gerenciar células de encontro para a comunidade. Cada célula tem um secretário responsável por sua organização, e ele pode criar reuniões, cadastrar novos membros e gerenciar pedidos de oração, seja individual ou em grupo. Os membros podem acessar os perfis de outros participantes, visualizar suas próximas reuniões, marcar presença nas atividades e fazer pedidos de oração para si mesmos ou para conhecidos. O acesso à plataforma é feito por login, criado e enviado por e-mail pelo pastor ou secretário para cada usuário (pastor, secretário ou membro)."
        />

        <ProjectDesktop
          title="Gym Os"
          date="29/06/25"
          deploy="https://gym-os-six.vercel.app/"
          github="https://github.com/EliasMartinzs/gym-os"
          data={[Gym1, Gym2, Gym3]}
          side="right"
          technologies={[
            "Next Js",
            "Prisma",
            "Clerk Dev",
            "Tailwind CSS",
            "Shadcn Ui",
            "Hono",
            "Zustand",
            "Zod",
          ]}
          key="gym-os"
          description="Um aplicativo web eficiente permite que personal trainers gerenciem alunos, treinos e horários de maneira prática. O sistema disponibiliza um painel com informações fundamentais (quantidade de alunos, exercícios mais recomendados, distribuição por objetivos), registro e monitoramento de alunos (status, tempo de relacionamento, aniversários), elaboração de templates de treino reutilizáveis ou personalizados, além de uma agenda para gerenciamento de aulas. Com temas claros e escuros, gráficos interativos e formulários simplificados, o aplicativo contribui para a automação de tarefas e aprimoramento do acompanhamento dos estudantes. Desenvolvido utilizando Next.js, TypeScript e Tailwind CSS."
        />

        <ProjectDesktop
  title="Neura"
  date="2026"
  deploy=""
  github="https://github.com/EliasMartinzs/neura"
  data={[Neura1, Neura2, Neura3]}
  side="right"
  technologies={[
    "Next.js",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "Shadcn UI",
    "React Query",
    "OpenAI API",
    "Framer Motion",
  ]}
  key="neura"
  description="Neura é um projeto completo de plataforma educacional desenvolvido para aplicar conceitos modernos de aprendizado, como estudo ativo, feedback imediato e revisão espaçada. 
  O sistema permite a criação de flashcards de forma manual ou automática por meio de inteligência artificial, que gera conteúdos com base em temas, tópicos e níveis de dificuldade definidos pelo usuário. 
  A lógica de revisão utiliza o algoritmo SM-2, adaptando os intervalos de estudo conforme o desempenho individual, aumentando a eficiência da memorização ao longo do tempo. 
  O projeto também inclui quizzes dinâmicos gerados por IA e a funcionalidade 'Explique e Aprenda', onde o usuário responde perguntas com texto livre e recebe uma avaliação inteligente da IA, destacando acertos, erros conceituais e sugestões de melhoria. 
  Do ponto de vista técnico, o projeto explora integração avançada com IA, gerenciamento de estado assíncrono, arquitetura escalável e uma interface moderna focada em experiência do usuário."
/>

      </div>
    </section>
  );
};

const ProjectMobile = ({
  description,
  image1,
  image2,
  image3,
  projectDate,
  projectName,
  technologies,
  deploy,
  github,
}: {
  projectName: string;
  projectDate: string;
  technologies: string[];
  description: string;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  deploy: string;
  github: string;
}) => {
  return (
    <div className="grid grid-cols-1 gap-3 relative">
      <div className="w-3/4 h-full border border-muted rounded-full absolute top-0 right-0 translate-x-1/2 -z-50 opacity-25" />
      <div className=" flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <div className="w-full flex items-center justify-between italic">
            <h6 className="text-2xl font-JetBrainsBold">{projectName}</h6>

            <p>{projectDate}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image src="/vercel.svg" alt="vercel" width={64} height={64} /> -
              <Link target="_blank" href={deploy}>
                Deploy
              </Link>
            </div>

            <div className="flex items-center gap-x-2">
              <Link target="_blank" href={github}>
                <Image
                  src="/icons8-github.svg"
                  alt="vercel"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            {technologies.map((tech) => (
              <TechnologieName name={tech} key={tech} />
            ))}
          </div>

          <small className="leading-6 line-clamp-6 hover:line-clamp-none cursor-pointer">
            {description}
          </small>
        </div>
        <Image
          src={image1}
          alt="church1"
          className="object-cover object-center rounded-3xl mt-4"
        />

        <div className="grid grid-cols-2 gap-3">
          <Image
            src={image2}
            alt="church1"
            className="object-cover object-center rounded-3xl w-full h-full"
          />

          <Image
            src={image3}
            alt="church1"
            className="object-cover object-center rounded-3xl w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

const ProjectDesktop = ({
  data,
  deploy,
  description,
  github,
  technologies,
  title,
  side,
  date,
}: {
  title: string;
  technologies: string[];
  description: string;
  github: string;
  deploy: string;
  data: StaticImageData[];
  side: "left" | "right";
  date: string;
}) => {
  return (
    <div className="grid-cols-3 hidden lg:grid gap-10 relative">
      <div className="h-96 w-96 rounded-full border border-primary absolute bottom-0 left-0 -z-50 -translate-x-1/2 opacity-25" />

      <div
        className={cn(
          "col-span-1 space-y-8",
          side === "left" ? "order-1" : "order-2"
        )}
      >
        <div className="flex items-center justify-between w-full">
          <h6 className="text-3xl font-JetBrainsBold italic">{title}</h6>
          <p>{date}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {technologies.map((tech) => (
            <TechnologieName name={tech} key={tech} />
          ))}
        </div>

        <p className="text-xs leading-6">{description}</p>

        <div className="flex items-center gap-x-5">
          <div className="flex items-center">
            <Link
              target="_blank"
              href={github}
              className="border rounded-full p-2"
            >
              <Image src={Github} width={36} height={36} alt="github" />
            </Link>
            <Link
              target="_blank"
              href={github}
              className="bg-foreground rounded-full p-2 size-14 grid place-items-center -ml-4 hover:bg-transparent hover:border hover:border-primary group transition-colors"
            >
              <MoveUpRight className="text-background size-8 group-hover:text-foreground" />
            </Link>
          </div>

          <div className="flex items-center">
            <Link
              target="_blank"
              href={deploy}
              className="border rounded-full p-2"
            >
              <Image src={Vercel} width={36} height={36} alt="github" />
            </Link>
            <Link
              target="_blank"
              href={deploy}
              className="bg-foreground rounded-full p-2 size-14 grid place-items-center -ml-4 hover:bg-transparent hover:border hover:border-primary group transition-colors"
            >
              <MoveUpRight className="text-background size-8 group-hover:text-foreground" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={cn("col-span-2", side === "left" ? "order-2" : "order-1")}
      >
        <ProjectGallery data={data} />
      </div>
    </div>
  );
};

const TechnologieName = ({ name }: { name: string }) => {
  return (
    <div className="py-2 px-4 whitespace-nowrap text-center border rounded-full border-muted-foreground hover:border-primary">
      {name}
    </div>
  );
};

import React from "react";
import { TextAnimation } from "./text-animation-mobile";
import Link from "next/link";
import { heroIcons } from "@/constants";
import Image from "next/image";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="space-y-8 lg:space-y-16 px-8 pb-10 relative"
    >
      <div className="w-full h-96 rounded-full border border-muted-foreground opacity-25 absolute -z-50 top-0 left-0 -translate-x-1/2" />
      <h6 className="text-4xl text-start font-JetBrainsBold">
        {"<"}Contato{"/>"}
      </h6>

      <div className="flex flex-col lg:grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-y-1">
          <TextAnimation
            text="Elias"
            className="text-5xl font-JetBrainsExtraBold lg:text-9xl"
          />
          <div className="flex items-center justify-between lg:justify-normal gap-2 lg:gap-x-20">
            <div className="lg:text-xl">
              <p>Front-End</p> <p>Desenvolvedor</p>
            </div>
            <TextAnimation
              text="Martins"
              className="text-5xl font-JetBrainsExtraBold lg:text-9xl"
            />
          </div>
        </div>

        <div className="space-y-5 lg:flex lg:justify-start lg:items-end lg:flex-col">
          <ul className="flex items-center gap-x-5">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#skills">Sobre</Link>
            </li>
            <li>
              <Link href="#typography">Tipografia</Link>
            </li>
            <li>
              <Link href="#projects">Projetos</Link>
            </li>
          </ul>

          <div className="lg:w-3/4 rounded-3xl border border-muted-foreground p-4 space-y-5 text-muted-foreground">
            <p className="text-xl font-JetBrainsMedium">Site</p>

            <p>Feito por mim /</p>
            <p>Designed by Taisia /</p>
            <p>Tecnologias NextJs, Tailwind CSS, Swiper</p>
          </div>
        </div>
      </div>

      <ul className="flex max-lg:flex-wrap gap-5 lg:flex-row items-center lg:justify-center lg:gap-x-10">
        {heroIcons.map(({ label, icon, href }) => (
          <li key={label}>
            <Link
              target="_blank"
              href={href}
              className="flex items-center gap-x-2 border border-muted-foreground py-3 px-5 lg:py-4 lg:px-16 rounded-full"
            >
              <Image src={icon} alt={label} width={24} height={24} /> {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

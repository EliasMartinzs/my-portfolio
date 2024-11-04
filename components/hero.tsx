import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { heroIcons } from "@/constants";
import Image from "next/image";
import { TextAnimation } from "./text-animation-mobile";

export const Hero = () => {
  return (
    <section className="space-y-8 lg:space-y-16 lg:pt-32 px-8">
      {/* Mobile */}
      <div className="flex flex-col gap-y-8 lg:hidden">
        <div className="space-y-2 font-JetBrainsBold">
          <TextAnimation
            className="text-4xl font-JetBrainsBold"
            text="Front-End"
          />

          <TextAnimation
            className="text-4xl font-JetBrainsBold text-end"
            text="Desenvolvedor"
          />
        </div>

        <p className="leading-7 text-muted-foreground">
          No desenvolvimento front-end, um código bem{" "}
          <span className="text-foreground">documentado</span> e{" "}
          <span className="text-foreground">modular</span> é{" "}
          <span className="text-foreground">fundamental</span>. Isso garante que
          qualquer desenvolvedor, atual ou futuro, possa entender e{" "}
          <span className="text-foreground">aprimorar</span> o
          <span className="text-foreground"> projeto</span> com{" "}
          <span className="text-foreground">facilidade</span>.
        </p>

        <div className="flex items-center gap-x-2 max-w-sm">
          <Link
            href="#projects"
            className={cn(
              buttonVariants(),
              "rounded-full h-16 italic text-lg flex-1"
            )}
          >
            Projetos
          </Link>
          <Link
            href="#projects"
            className={cn(
              "rounded-full size-16 inline-flex items-center justify-center place-items-center bg-primary text-primary-foreground shadow hover:bg-primary/70"
            )}
          >
            <MoveRight className="size-8" />
          </Link>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden gap-y-8 lg:flex flex-col">
        <div className="space-y-2 font-JetBrainsBold">
          <div className="w-full flex items-center justify-between">
            <TextAnimation
              className="text-9xl tracking-widest"
              text="Front-End"
            />
            <div className="flex items-center gap-x-2">
              <Link
                href="#projects"
                className={cn(
                  buttonVariants(),
                  "rounded-full h-16 italic text-lg w-96"
                )}
              >
                Projetos
              </Link>
              <Link
                href="#projects"
                className={cn(
                  "rounded-full size-16 inline-flex items-center justify-center place-items-center bg-primary text-primary-foreground shadow hover:bg-primary/70"
                )}
              >
                <MoveRight className="size-8" />
              </Link>
            </div>
          </div>

          <div className="w-full flex items-center">
            <p className="leading-7 text-muted-foreground w-[30%] text-start">
              No desenvolvimento front-end, um código bem{" "}
              <span className="text-foreground">documentado</span> e{" "}
              <span className="text-foreground">modular</span> é{" "}
              <span className="text-foreground">fundamental</span>. Isso garante
              que qualquer desenvolvedor, atual ou futuro, possa entender e{" "}
              <span className="text-foreground">aprimorar</span> o
              <span className="text-foreground"> projeto</span> com{" "}
              <span className="text-foreground">facilidade</span>.
            </p>
            <div className="flex-1">
              <TextAnimation
                text="Desenvolvedor"
                className="text-9xl tracking-widest text-end"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-7xl lg:mx-auto grid gap-5 grid-cols-2 lg:flex items-center justify-center max-lg:justify-between">
        {heroIcons.map(({ label, icon, href }) => (
          <Link
            href={href}
            target="_blank"
            key={label}
            className={cn(
              buttonVariants({
                variant: "outline",
                className: "rounded-full p-6",
              })
            )}
          >
            <Image src={icon} width={32} height={32} alt={label} />
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
};

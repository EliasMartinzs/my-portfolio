import { ProjectProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import Github from "@/public/icons8-github.svg";
import Vercel from "@/public/vercel.svg";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectGallery } from "./project-gallery";
import { TechnologieName } from "./ui/technologie-name";

interface Props extends ProjectProps {
  side: "left" | "right";
}

export const ProjectDesktop = ({
  projectName,
  projectDate,
  technologies,
  description,
  image1,
  image2,
  image3,
  deploy,
  github,
  side,
}: Props) => {
  // const side = "left";

  const data = [image1, image2, image3];

  return (
    <div className="grid-cols-3 hidden lg:grid gap-10 relative">
      <div className="h-96 w-96 rounded-full border border-primary absolute bottom-0 left-0 -z-50 -translate-x-1/2 opacity-25" />

      <div
        className={cn(
          "col-span-1 space-y-8",
          side === "left" ? "order-1" : "order-2",
        )}
      >
        <div className="flex items-center justify-between w-full">
          <h6 className="text-3xl font-JetBrainsBold italic">{projectName}</h6>
          <p>{projectDate}</p>
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
              className="bg-foreground rounded-full p-2 size-14 grid place-items-center -ml-4"
            >
              <MoveUpRight className="text-background size-8" />
            </Link>
          </div>

          <div className="flex items-center">
            <Link
              target="_blank"
              href={deploy}
              className="border rounded-full p-2"
            >
              <Image src={Vercel} width={36} height={36} alt="vercel" />
            </Link>
            <Link
              target="_blank"
              href={deploy}
              className="bg-foreground rounded-full p-2 size-14 grid place-items-center -ml-4"
            >
              <MoveUpRight className="text-background size-8" />
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

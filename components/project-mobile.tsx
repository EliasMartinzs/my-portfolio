import { ProjectProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { TechnologieName } from "./ui/technologie-name";

export const ProjectMobile = ({
  description,
  image1,
  image2,
  image3,
  projectDate,
  projectName,
  technologies,
  deploy,
  github,
}: ProjectProps) => {
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

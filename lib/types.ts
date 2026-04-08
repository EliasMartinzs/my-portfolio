import { StaticImageData } from "next/image";

export interface ProjectProps {
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

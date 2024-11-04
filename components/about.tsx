"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { frontEnd, frontEndTechnologies, styles } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { TextAnimation } from "./text-animation-mobile";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const About = () => {
  // Criar refs e estados para cada seção
  const frontEndRef = useRef(null);
  const stylesRef = useRef(null);
  const isFrontEndInView = useInView(frontEndRef);
  const isStylesInView = useInView(stylesRef);

  return (
    <section id="skills" className="space-y-16 lg:space-y-16">
      <h6 className="px-8 text-end text-4xl font-JetBrainsBold">
        {"<"}Sobre{"/>"}
      </h6>

      <div className="lg:hidden">
        <Swiper
          autoplay={{
            disableOnInteraction: false,
            delay: 0,
          }}
          loop={true}
          speed={20000}
          slidesPerView={4}
          spaceBetween={25}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 10,
              spaceBetween: 35,
            },
            1280: {
              slidesPerView: 10,
              spaceBetween: 35,
            },
          }}
        >
          {frontEndTechnologies.map(({ label, icon, href }) => (
            <SwiperSlide key={label}>
              <Link
                href={href}
                target="_blank"
                className="w-full h-full flex flex-col flex-1 items-center justify-center text-center gap-4"
              >
                <Image
                  src={icon}
                  width={80}
                  height={80}
                  alt={label}
                  className="object-center object-contain w-20 h-20 saturate-0 hover:saturate-200 cursor-pointer"
                />
                <small className="text-muted-foreground">{label}</small>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:flex flex-col gap-y-20 relative">
        <TextAnimation
          typeSpeed={50}
          text="Olá! Meu nome é Elias Martins, e sou um desenvolvedor dedicado a explorar as possibilidades da tecnologia."
          className="text-center max-w-2xl mx-auto leading-7 text-muted-foreground"
        />

        <div className="w-[1000px] h-[1000px] translate-x-1/2 border border-muted-foreground absolute -z-50 top-0 right-0 rounded-full" />

        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <div className="max-w-3xl mx-auto h-full flex flex-col gap-3">
              {["Front-End", "Styles"].map((title, index) => (
                <motion.div
                  ref={title === "Front-End" ? frontEndRef : stylesRef}
                  key={title}
                  initial={{
                    opacity: 0,
                    x: index === 0 ? 999 : -999,
                  }}
                  animate={{
                    opacity: (
                      title === "Front-End" ? isFrontEndInView : isStylesInView
                    )
                      ? 1
                      : 0,
                    x: (
                      title === "Front-End" ? isFrontEndInView : isStylesInView
                    )
                      ? 0
                      : index === 0
                      ? 999
                      : -999,
                  }}
                  transition={{ duration: 0.5, ease: "linear" }}
                  className={cn(
                    "w-full rounded-3xl p-8 space-y-4",
                    title === "Front-End"
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent text-foreground border border-primary"
                  )}
                >
                  <h6 className="text-xl font-JetBrainsMedium">{title}</h6>

                  <div className="flex flex-wrap whitespace-nowrap gap-3">
                    {(title === "Front-End" ? frontEnd : styles).map(
                      (label, idx) => (
                        <p key={label}>
                          {label}
                          {idx <
                            (title === "Front-End"
                              ? frontEnd.length
                              : styles.length) -
                              1 && " / "}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="col-span-1 relative">
            <Image
              src="/profile-2.jpeg"
              alt="elias"
              width={400}
              height={400}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col text-center gap-y-8 lg:hidden">
        <p>
          Olá! Meu nome é Elias Martins, e sou um desenvolvedor dedicado a
          explorar as possibilidades da tecnologia.
        </p>

        <Image
          src="/profile-2.jpeg"
          alt="elias"
          width={350}
          height={350}
          className="object-cover rounded-3xl"
          loading="lazy"
        />
      </div>
    </section>
  );
};

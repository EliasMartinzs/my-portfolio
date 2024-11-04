"use client";

import { frontEnd, styles } from "@/constants";
import Image from "next/image";
import { TextAnimation } from "./text-animation-mobile";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const About = () => {
  const frontEndRef = useRef(null);
  const stylesRef = useRef(null);
  const isFrontEndInView = useInView(frontEndRef);
  const isStylesInView = useInView(stylesRef);

  return (
    <section id="skills" className="space-y-16 lg:space-y-16">
      <h6 className="px-8 text-end text-4xl font-JetBrainsBold">
        {"<"}Sobre{"/>"}
      </h6>

      <div className="flex flex-col gap-y-8 lg:gap-y-20 relative">
        <TextAnimation
          typeSpeed={50}
          text="Olá! Meu nome é Elias Martins, e sou um desenvolvedor dedicado a explorar as possibilidades da tecnologia."
          className="text-center max-w-2xl mx-auto leading-7 text-muted-foreground"
        />

        <div className="w-[1000px] h-[1000px] translate-x-1/2 border border-muted-foreground absolute -z-50 top-0 right-0 rounded-full" />

        <div className="hidden lg:grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <div className="lg:max-w-3xl lg:mx-auto h-full flex flex-col gap-3">
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

          <div className="hidden lg:block col-span-1 relative">
            <Image
              src="/profile-2.jpeg"
              alt="elias"
              width={400}
              height={400}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 px-8 lg:hidden">
          {["Front-End", "Styles"].map((title) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

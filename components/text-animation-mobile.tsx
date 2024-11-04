"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

type Props = {
  text: string;
  className?: string;
  typeSpeed?: number;
};

export const TextAnimation = ({ text, className, typeSpeed = 250 }: Props) => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [text],
      typeSpeed: typeSpeed,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
      cursorChar: "",
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, [text, typeSpeed]);

  return <p className={className} ref={el}></p>;
};

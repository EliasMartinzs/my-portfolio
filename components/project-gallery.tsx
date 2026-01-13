"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Image, { StaticImageData } from "next/image";

type Props = {
  data: StaticImageData[];
};

export const ProjectGallery = ({ data }: Props) => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination
        loop
        modules={[Autoplay, Pagination]}
      >
        {data.map((img, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={img}
              alt="aa"
              className="w-full h-full object-center rounded-3xl shadow-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

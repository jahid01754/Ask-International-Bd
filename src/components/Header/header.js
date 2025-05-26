"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  { name: "/Garments.jpg", alt: "Garments" },
  { name: "/Machineries.jpg", alt: "Mechineries" },
  { name: "/ComputerHardware.jpg", alt: "ComputerHardware" },
  { name: "/SecurityEquipment.jpg", alt: "SecurityEquipment" },
  { name: "/DefenseEquipment.jpg", alt: "DefenseEquipment" },
  { name: "/SpareParts.jpg", alt: "SpareParts" },
];

export default function Header() {
  return (
    <>
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row items-center justify-between py-6 gap-10 md:gap-0">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start items-center md:px-30">
            <Image
              src={"/Logo_Header.png"}
              alt="Company Logo"
              height={200}
              width={200}
              className="min-w-[30%] min-h-[30%]"
            />
          </div>
          <div className="w-full lg:w-2/3 h-64 ">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className=""
            >
              {images.map((image, imageIndex) => (
                <SwiperSlide key={imageIndex} className="h-full w-full">
                  <div className="relative h-full w-full">
                    <Image
                      src={image.name}
                      alt={image.alt}
                      height={10000}
                      width={10000}
                      className="w-full h-64"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

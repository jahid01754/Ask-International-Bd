"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaArrowRightLong } from "react-icons/fa6";

export default function Card() {
  const blog = [
    {
      name: "Garments",
      title: "Premium high quality garment products.",
      cardPic: "/Garments.jpg",
    },
    {
      name: "Machineries",
      title: "Industrial and agricultural machinery",
      cardPic: "/Machineries.jpg",
    },
    {
      name: "Computer Hardware",
      title: "Quality hardware for computer needs.",
      cardPic: "/ComputerHardware.jpg",
    },
    {
      name: "Security Equipment",
      title: "Advanced security equipment solutions.",
      cardPic: "/SecurityEquipment.jpg",
    },
    {
      name: "Defense Equipment",
      title: "Top notch defense equipment solutions.",
      cardPic: "/DefenseEquipment.jpg",
    },
    {
      name: "Spare Parts",
      title: "Reliable spare parts for various needs.",
      cardPic: "/SpareParts.jpg",
    },
  ];
  return (
    <>
      <div className=" w-full h-auto mt-20">
        <div className="custom-container mx-auto">
          {/* heading */}
          <div className="flex  justify-center items-center ">
            <p className="font-bold text-5xl mt-6 text-center font-ovo">
              Our Services
            </p>
          </div>

          {/* body */}
          <div className="flex  justify-evenly items-center mt-10 gap-4  ">
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
                delay: 5000,
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
                // 1024: {
                //   slidesPerView: 4,
                // },
              }}
              className=""
            >
              {blog.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-md border border-[#edeff4] bg-card  h-auto hover:shadow-lg transition-shadow duration-300 overflow-hidden ">
                    <div className="relative h-full overflow-hidden group flex-shrink-0">
                      <Image
                        src={item.cardPic}
                        alt={item.title}
                        width={1000}
                        height={1000}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="px-6 py-4 flex flex-col flex-grow">
                      <p className="mt-10 text-slate-500 font-ovo font-semibold">
                        {item.name}
                      </p>
                      <p className="mt-8 font-semibold text-2xl font-ovo line-clamp-3">
                        {item.title}
                      </p>
                      <div>
                        <p className="mt-14 mb-6 flex flex-row justify-start items-center gap-4  font-semibold group font-ovo">
                          View Details{" "}
                          <span className="group-hover:translate-x-2 transition-transform duration-500">
                            {" "}
                            <FaArrowRightLong />
                          </span>
                        </p>
                      </div>
                    </div>
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

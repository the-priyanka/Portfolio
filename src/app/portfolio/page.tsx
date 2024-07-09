"use client";
import Image from "next/image";
import React from "react";
import Img from "@/assets/me.jpg";
import { useRouter } from "next/navigation";

const Portfolio = () => {
  const router = useRouter();
  const data = [
    {
      id: "0",
      link: "https://the-priyanka.github.io/My-portfolio/",
      projectName: "Portfolio",
    },
    {
      id: "2",
      link: "https://glassmorphism-portfolio-website.vercel.app/",
      projectName: "Glassmorphism",
    },
    {
      id: "3",
      link: "https://the-priyanka.github.io/music-player/",
      projectName: "Music-player",
    },
  ];
  return (
    <div className="bg-black min-w-[100vw] min-h-[100vh] px-[100px] py-[100px]">
      <h1 className="text-white text-[40px] text-center py-12">
        Recent Works
      </h1>
      <div className="grid grid-cols-12 gap-8 ">
        {data.map((data) => {
          return (
            <div
              key={data.id}
              className="relative col-span-4 group overflow-hidden cursor-pointer"
              onClick={() => router.push(data.link)}
            >
              <div>
                <Image
                  src={Img}
                  alt=""
                  fill
                  objectFit="cover"
                  className="min-h-[600px] group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute w-full h-full bg-black opacity-35 group-hover:opacity-50 transition-all duration-700"></div>
              </div>
              <div className="relative w-full text-center min-h-[600px] flex flex-col justify-center items-center">
                <h1 className="text-white text-[30px]">
                  {data.projectName}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;

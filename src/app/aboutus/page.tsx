import Image from "next/image";
import React from "react";
import Img from "@/assets/me.jpg";

const AboutUs = () => {
  return (
    <div className="bg-black min-w-[100vw] min-h-[100vh] p-[200px]">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <div className="w-[60%]">
            <h1 className="text-white text-[50px] py-[30px]">
              Biography
            </h1>
            <p className="text-white text-[16px] opacity-70">
              I have been learning Web Development since May 2020 when
              Corona started. I have completed around 60+ small
              projects using HTML, CSS, Javascript, React & Github. I
              have a good understanding of React, JavaScript, Git,
              CSS/SCSS, and HTML. Also, Wrote some small Node.js
              scripts.
            </p>
          </div>
        </div>
        <div className="col-span-6 text-end flex justify-end">
          <div className="w-[40%] h-[400px]">
            <Image
              src={Img}
              alt=""
              width={100}
              height={100} 
              className="w-[-webkit-fill-available] h-[-webkit-fill-available] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

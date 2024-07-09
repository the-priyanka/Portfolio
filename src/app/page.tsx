import Image from "next/image";
import Img from "@/assets/me.jpg";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] relative">
      <div>
        <Image
          src={Img}
          alt=""
          objectFit="cover"
          fill
          className="object-top"
        />
        <div className="absolute w-full h-full bg-black opacity-50"></div>
      </div>

      <div className="z-10 relative">
        <div className="p-[200px]">
          <h1 className="text-white text-[60px]">The Priyanka</h1>
          <p className="text-white text-[20px] tracking-[0.8rem]">
            Frontend developer
          </p>
        </div>
      </div>
    </div>
  );
}

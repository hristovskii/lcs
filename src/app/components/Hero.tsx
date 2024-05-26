"use client";
import Participants from '../resources/background1.jpg'
import Link from "next/link";
import { FaCopy, FaDownload } from "react-icons/fa";
import IconComponent from "./Icon";
import { useState } from 'react';

export default function Hero() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
      navigator.clipboard.writeText("numbers-formats.gl.joinmc.link");
      setIsCopied(true);
    };

    return (
      <main className="w-full px-5 py-24" style={{
      height: "90vh",
      backgroundImage: `linear-gradient(180deg, #262626 0%, rgba(38, 38, 38, 0.5) 100%), url(${Participants.src})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      }}>
      <div className="container text-center  mx-auto md:px-10 px-2 py-16">
        <h1 className="md:text-5xl lg:flex justify-center text-4xl font-semibold my-3 text-balance text-white">
          Dive in the <span className="text-eestec font-bold px-3 shadow"> LCS </span> Experience
        </h1>
        <p className="md:text-base lg:flex justify-center text-sm text-slate-50 my-3 text-balance leading-none">
        The official website for the  LCS <span className="font-medium px-1.5 reversedShadow">Minecraft Server!</span>
        </p>

        <div className="lg:flex justify-center">
        <div className="rounded-full border px-6 my-6 flex justify-center items-center gap-3 text-white " style={{backgroundColor:"rgba(0, 0, 0, 0.4)"}}>
          <span >numbers-formats.gl.joinmc.link</span>
          <button className="rounded-full border bg-eestec px-7 py-2 my-3 flex justify-center items-center gap-3 animation"
          onClick={handleCopyClick}
          >
          <span className="text-white font-bold">{isCopied ? "Copied" : "Copy"}</span>
            <IconComponent icon={FaCopy} color="white" size="20px"></IconComponent>
          </button>
        </div>
        </div>
        <div className="flex justify-center">

        <Link href={"https://drive.google.com/file/d/1Tq2B-V-eS7aKNTVlHwBjPJQkr5M0W7-4/view"} target="_blank">
        <button className="rounded-full border bg-eestec px-7 py-2 my-3 flex justify-center items-center gap-3 animation">
            <span className="text-white font-bold">Download Mods!</span>
            <IconComponent icon={FaDownload} color="white" size="20px"></IconComponent>
        </button>
        </Link>
        </div>
        </div>
            
      </main>  
    );
}
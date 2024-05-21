"use client";

import Button from "./Button";
import { MdArrowOutward } from "react-icons/md";
import Participants from '../resources/background1.jpg'
import Link from "next/link";
import { TbPick } from "react-icons/tb";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
    return (
      <main className="w-full px-5 py-24" style={{
        backgroundImage: `linear-gradient(180deg, #262626 0%, rgba(38, 38, 38, 0.5) 100%), url(${Participants.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className="container mx-auto md:px-10 px-5 py-16">
          <h1 className="md:text-5xl text-4xl font-semibold my-3 text-balance text-white">
              Dive in the <span className="text-eestec font-bold">LCS</span> Experience
          </h1>
          <p className="md:text-base text-sm text-slate-50 my-3 text-balance leading-none">
          The official website for the  LCS <span className="font-medium">Minecraft Server!</span>
          </p>
          <div className="lg:flex flex-row gap-14">
            <div>
            <Button text="Join Now!" icon={TbPick}></Button>
            </div>
            <div>
            <Button text="Download Mods!" icon={FaDownload}></Button>
            </div>

          </div>
            
        </div>
      </main>  
    );
}
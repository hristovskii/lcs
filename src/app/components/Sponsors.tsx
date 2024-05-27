"use client";

import Image from "next/image";
import logo from "@/app/resources/logo.png";
import Heading from "./Heading";

import { RevealList } from  'next-reveal';
export default function Sponsors() {
    return(
        <section className="md:mx-6 mx-auto lg:px-36 md:px-16 px-8 mt-12 mb-20">
            
            
        <RevealList interval={100} delay={800}>
        <iframe width="auto" height="auto" 
            className="w-full aspect-video self-stretch md:min-h-96"
            src="https://www.youtube.com/embed/ybWgQzPXLwI?si=IEI_6VLlrDKFb1Oq" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
                {/* <Heading heading={"Logo"}></Heading> */}
                <Image src={logo} alt="Logo" height={300} className="mt-8 mb-8"></Image>
            </div>
        </RevealList>
        </section>
    );
}
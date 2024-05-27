"use client";

import Image from "next/image";
import logo from "@/app/resources/logo.png";
import Heading from "./Heading";

import { RevealList } from  'next-reveal';
export default function Sponsors() {
    return(
        <section className="md:mx-6 mx-auto lg:px-36 md:px-16 px-8 mt-12 mb-20">

        <RevealList interval={100} delay={800}>
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
                {/* <Heading heading={"Logo"}></Heading> */}
                <Image src={logo} alt="Logo" height={300} className="mt-8 mb-8"></Image>
            </div>
        </RevealList>
        </section>
    );
}
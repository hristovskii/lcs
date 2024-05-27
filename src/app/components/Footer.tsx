"use client";

import Image from "next/image";
import background from "@/app/resources/bedrock.webp"
import Link from "next/link";

import logo from "@/app/resources/logo.png";

export default function Footer() {
    return(
        <header className="bg-white px-12 w-full content-center"  style={{
            backgroundImage: `url(${background.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "160px"
          }}>
            <nav className="flex md:justify-between items-center justify-center">
                <Link href={"/"}>
                    <Image src={logo} alt="logo Logo" width={100} height={100} className="py-3"/>
                </Link>
                <h3 className="max-md:hidden font-eestec text-eestec text-3xl font-semibold pt-2 ">Power Your <span className="text-red-600">Redstone</span></h3>
            </nav>
            <div className="content-end">
            <h1 className="lg:flex justify-center text-white text-center" 
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                Copyright © 2024 by Teo Krstevski | All Rights Reserved.
                </h1>
            </div>
        </header>
    );
}
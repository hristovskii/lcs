"use client";

import Link from "next/link";
import CALU from "@/app/resources/logo.png";
import background from '../resources/texture.jpg'
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white px-12 w-full"  style={{
            backgroundImage: `url(${background.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <nav className="flex md:justify-between items-center justify-center">
                <Link href={"/"}>
                    <Image src={CALU} alt="Calu Logo" width={100} height={100} className="py-3"/>
                </Link>
                <h3 className="max-md:hidden font-eestec text-eestec text-3xl font-semibold pt-2 ">Power Your <span className="text-red-600 ">Redstone</span></h3>
            </nav>
        </header>
    );
}
"use client";

import { GiSharpSmile } from "react-icons/gi";
import Feature from "./Feature";
import { MdOutlineTrendingUp } from "react-icons/md";
import { TbBrandMinecraft } from "react-icons/tb";


import { RevealList } from  'next-reveal';

export default function KeyFeatures() {
    return(
        <section className="my-10 md:mx-6 mx-12">

        <RevealList interval={100} delay={500}>
            <div className="md:flex justify-center items-center gap-20">
                <Feature icon={TbBrandMinecraft} text={"Minecraft"}></Feature>
                <Feature icon={GiSharpSmile} text={"Scary Mods"}></Feature>
                <Feature icon={MdOutlineTrendingUp} text={"Career Opportunities"}></Feature>
            </div>
        </RevealList>
        </section>
    );
}
"use client";

import Image from "next/image";
import LOGO from "@/app/resources/LC_Skopje_white.png";
import Photo1 from "@/app/resources/minecraft.jpg";
import Photo2 from "@/app/resources/creeper.jpg";
import { RiRobot2Line } from "react-icons/ri";
import { SiMinecraft } from "react-icons/si";

export default function EESTEC() {

    return(
        <section className="mx-auto my-12 lg:px-16 px-8">
            <div className="lg:flex lg:flex-row lg:gap-3 grid">
                <div className="basis-4/5 lg:order-1 order-2">
                        <div className="flex flex-row">
                            <div style={{backgroundImage: `url(${Photo1.src})`,
                            height: "300px",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                    }} className="grow shrink rounded">
                            </div>
                            <div className="rounded border-2 border-eestec md:p-16 p-9 ml-3 flex justify-content items-center">
                                <SiMinecraft size={167} color="#0f800f"></SiMinecraft>
                            </div>
                        </div>
                        <div className="rounded bg-eestec mt-3 grow px-6 py-5 flex items-end lg:block hidden" style={{ height: "222px" }}
                        >
                            <h3 className="text-4xl text-white font-eestec font-light">Power Your Redstone, Rail Your Friends.</h3>
                            <h3 className="text-4xl text-white font-eestec font-light">Are you a skeleton? You gave me quite a bone there.</h3>
                            <h3 className="text-4xl text-white font-eestec font-light">Are you a slime? Cuz u make my piston sticky.</h3>
                            <h3 className="text-4xl text-white font-eestec font-light">What if we put our Minecraft beds next to each other?</h3>
                            <h3 className="text-4xl text-white font-eestec font-light">I am not a professional miner, but I can make your bed-rock.</h3>
                        </div>
                </div>
                <div className="basis-1/5 lg:order-2 order-1">
                    <div className="rounded bg-eestec mb-3 py-5 flex justify-center items-center">
                        <Image src={LOGO} alt="LCS Logo" height={125} className="md:p-3 p-1"></Image>
                    </div>
                    <div style={{backgroundImage: `url(${Photo2.src})`, height: "350px",
                                 backgroundPosition: "center",
                                 backgroundRepeat: "no-repeat",
                                 backgroundSize: "cover",}} className="lg:block hidden rounded">
                    </div>
                </div>
            </div>
        </section>
    );
}

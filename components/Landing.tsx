import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import landingPic from "@/public/landingPic.png";
function Landing() {
    return (
        <div className=" flex flex-col items-center  md:flex-row justify-between gap-4 my-20 max-w-360 mx-auto " id="home">
            <div className="flex-1 p-6">
                <div>
                    <p className="font-extrabold text-5xl leading-relaxed">
                        I&apos;m
                        <span className="text-primary font-extrabold">
                            {" "}
                            Abdelrhman
                        </span>
                        ,
                        <br />
                        Frontend Developer
                    </p>
                    <p className="text-gray-500 text-[1.1rem] ">
                        I build accessible, pixel-perfect, performant and <br />
                        delightful web experiences.
                    </p>
                    <div className="grid grid-cols-2 max-w-2xs gap-2 mt-4">
                        <Button asChild size={"lg"} className="p-4">
                            <a href="#projects">
                                View Work <ArrowRight />{" "}
                            </a>
                        </Button>
                        <Button asChild variant={"outline"} size={"lg"}>
                            <a
                                href="https://github.com/Abdelrhmanx3"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="md:mr-20 relative">
                <Image
                    loading="eager"
                    src={landingPic}
                    alt="personal Picture"
                    width={300}
                    height={300}
                    style={{ width: "auto" }}
                    className="rounded-2xl animate-float relative z-10"
                />
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary/20 animate-float-delay" />
                <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-2xl bg-primary/10 animate-float-delay-2" />
            </div>
        </div>
    );
}
export default Landing;

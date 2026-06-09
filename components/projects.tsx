"use client";
import { projects } from "@/app/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./projectCard";
function Projects() {
    return (
        <motion.div
            id="projects"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className=" my-30 max-w-360 mx-auto p-6"
        >
            <p className="text-4xl font-extrabold mb-8">Selected Work</p>
            <div>
                {projects.map((project, i) => {
                    return (
                        <div
                            key={project.id}
                            className="grid md:grid-cols-2 gap-8 items-center mb-20"
                        >
                            <div className="relative w-full h-55 md:h-110 group">
                                {/* Desktop image */}
                                <div className="absolute left-0 top-0 w-full md:w-[78%] shadow-2xl rounded-lg overflow-hidden">
                                    <Image
                                        loading="eager"
                                        src={project.image[0]}
                                        alt={project.title}
                                        width={1200}
                                        height={700}
                                        quality={100}
                                        className="w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                    />
                                </div>

                                {/* Second image - desktop only */}
                                <div className="hidden md:block absolute right-0 bottom-0 w-[55%] shadow-2xl rounded-xl overflow-hidden border-4 border-background z-10">
                                    <Image
                                        loading="eager"
                                        src={project.image[1]}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        quality={100}
                                        className="w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                    />
                                </div>
                            </div>
                            {/* Text */}
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-muted-foreground">
                                    Project 0{i + 1}
                                </p>
                                <p className="text-2xl font-bold">
                                    {project.title}
                                </p>
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    i={i}
                                />
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Button
                                            key={tag}
                                            variant="outline"
                                            size="sm"
                                        >
                                            {tag}
                                        </Button>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-2">
                                    <Button asChild size="lg">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                        >
                                            View Work <ArrowRight />
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="lg">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                        >
                                            GitHub
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
export default Projects;

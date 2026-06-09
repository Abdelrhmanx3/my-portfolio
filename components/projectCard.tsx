"use client";
import { useRef } from "react";
import { projects } from "@/app/data";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type ProjectType = (typeof projects)[0];

function AnimatedWord({
    word,
    index,
    scrollYProgress,
}: {
    word: string;
    index: number;
    scrollYProgress: MotionValue<number>;
}) {
    const color = useTransform(
        scrollYProgress,
       [index * 0.025, index * 0.025 + 0.025],
        ["#888888", "#ffffff"],
    );
    return (
        <motion.span style={{ color }} className="inline-block mr-1">
            {word}
        </motion.span>
    );
}

function ProjectCard({ project }: { project: ProjectType; i: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    return (
        <div ref={ref}>
                <p>
                    {project.description.split(" ").map((word, index) => (
                        <AnimatedWord
                            key={index}
                            word={word}
                            index={index}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </p>
        </div>
    );
}
export default ProjectCard;

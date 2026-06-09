"use client";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { projects } from "@/app/data";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type ProjectType = (typeof projects)[0];

function AnimatedWord({
    word,
    index,
    scrollYProgress,
    isDark,
}: {
    word: string;
    index: number;
    scrollYProgress: MotionValue<number>;
    isDark: boolean;
}) {
    const color = useTransform(
        scrollYProgress,
        [index * 0.025, index * 0.025 + 0.025],
        isDark ? ["#888888", "#ffffff"] : ["#888888", "#000000"],
    );

    return (
        <motion.span style={{ color }} className="inline-block mr-1">
            {word}
        </motion.span>
    );
}

function ProjectCard({ project }: { project: ProjectType; i: number }) {
    const ref = useRef(null);
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

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
                        isDark={isDark}
                    />
                ))}
            </p>
        </div>
    );
}

export default ProjectCard;
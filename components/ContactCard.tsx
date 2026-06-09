"use client";
import { cn } from "@/lib/utils";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";

const icons = {
    email: FaEnvelope,
    whatsapp: FaWhatsapp,
    linkedin: FaLinkedin,
};

const iconColors: Record<keyof typeof icons, string> = {
    email: "text-blue-500",
    whatsapp: "text-green-500",
    linkedin: "text-sky-600",
};

// Parent container — drives the stagger
export const contactListVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

// Each card slides up
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};

// Icon springs in after card
const iconVariants: Variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 260,
            damping: 18,
            delay: 0.1,
        },
    },
};

// Text fades in last
const textVariants: Variants = {
    hidden: { opacity: 0, x: -6 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            delay: 0.15,
        },
    },
};

function ContactCard({
    href,
    type,
    title,
    desc,
    className,
}: {
    href: string;
    type: keyof typeof icons;
    title?: string;
    desc?: string;
    className?: string;
}) {
    const Icon = icons[type];

    const handleClick = () => {
        if (href.startsWith("mailto:")) {
            window.location.href = href;
        } else {
            window.open(href, "_blank");
        }
    };

    return (
        <motion.div
            onClick={handleClick}
            variants={cardVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
            className={cn(
                "flex items-center gap-3 p-3 rounded-lg cursor-pointer",
                className,
            )}
        >
            <motion.div
                variants={iconVariants}
                whileHover={{
                    rotate: [0, -12, 12, 0],
                    transition: { duration: 0.4 },
                }}
                className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full bg-muted",
                    iconColors[type],
                )}
            >
                <Icon size={20} />
            </motion.div>

            <motion.div variants={textVariants}>
                <p className="text-sm font-medium">{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
            </motion.div>
        </motion.div>
    );
}

export default ContactCard;
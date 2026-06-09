"use client";
import { CodeXml } from "lucide-react";
import { motion } from "framer-motion";
import ContactCard, { contactListVariants } from "./ContactCard";

function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 sm:px-12 py-8 sm:py-10 flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-0 mt-20">
            <div className="flex flex-col gap-1 items-center sm:items-start">
        <a href="#home">
                            <div
                    className="flex gap-4 mr-5 items-center cursor-pointer sm:m-0"
                >
                    <CodeXml className="text-primary w-8 h-8 sm:w-12 sm:h-12" />
                    <span className="text-2xl sm:text-4xl font-extrabold bg-linear-to-r from-primary via-gray-300 to-primary bg-size-[200%_100%] bg-clip-text text-transparent animate-shine">
                        DARWISH
                    </span>
                </div>
        </a>
                <p className="text-xs ml-5 text-white/40  sm:text-left sm:m-0">
                    Designed & Built by Abdelrhman Yasser (Darwish)
                </p>
            </div>

            <motion.div
                className="flex items-center gap-2 sm:gap-4"
                variants={contactListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <ContactCard
                    href="https://mail.google.com/mail/?view=cm&to=ayx14102002@gmail.com"
                    type="email"
                    className="hover:text-primary hover:scale-110 transition-all duration-300"
                />
                <ContactCard
                    href="https://www.linkedin.com/in/abdelrhman-yasser-348444393/"
                    type="linkedin"
                    className="hover:text-primary hover:scale-110 transition-all duration-300"
                />
                <ContactCard
                    href="https://wa.me/201286249228"
                    type="whatsapp"
                    className="hover:text-primary hover:scale-110 transition-all duration-300"
                />
            </motion.div>
        </footer>
    );
}

export default Footer;
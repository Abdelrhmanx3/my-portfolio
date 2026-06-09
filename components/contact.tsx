"use client";
import { motion } from "framer-motion";
import ContactCard, { contactListVariants } from "./ContactCard";
import { Card, CardContent } from "./ui/card";

function Contact() {
    return (
        <motion.div
            id="contact"
            className="flex flex-col justify-center px-4 sm:px-0"
            variants={contactListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div>
                <p className="text-2xl sm:text-4xl font-extrabold text-center">
                    Let&apos;s Work Together
                </p>
                <p className="text-xl sm:text-3xl font-bold text-center">
                    Reach out through any of these channels.
                </p>
            </div>
            <Card className="bg-transparent grid grid-cols-1 sm:grid-cols-3 mx-auto mt-8 w-full sm:w-auto">
                <motion.div className="contents" variants={contactListVariants}>
                    <CardContent>
                        <ContactCard
                            href="https://mail.google.com/mail/?view=cm&to=ayx14102002@gmail.com"
                            type="email"
                            title="Email"
                            desc="ayx14102002@gmail.com"
                            className="hover:bg-muted transition-all duration-300"
                        />
                    </CardContent>
                    <CardContent>
                        <ContactCard
                            href="https://www.linkedin.com/in/abdelrhman-yasser-348444393/"
                            type="linkedin"
                            title="LinkedIn"
                            desc="linkedin.com/in/Abdelrhman"
                            className="hover:bg-muted transition-all duration-300"
                        />
                    </CardContent>
                    <CardContent>
                        <ContactCard
                            href="https://wa.me/201286249228"
                            type="whatsapp"
                            title="WhatsApp"
                            desc="Chat with me on WhatsApp"
                            className="hover:bg-muted transition-all duration-300"
                        />
                    </CardContent>
                </motion.div>
            </Card>
        </motion.div>
    );
}

export default Contact;
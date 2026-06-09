import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./Providers";

const sourceSans3 = Source_Sans_3({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Abdelrhman Yasser | Frontend Developer",
    description:
        "Frontend developer portfolio. You see projects built with React, Next.js, Tailwind CSS, and modern UI patterns. Focus on performance, accessibility, and clean code.",
    icons: {
        icon: "/favicon.svg",
    },
    verification: {
        google: "dpvArWCXmLPn0WW6iQiGVnyoVWNKxufPO4z0kdo3cyo",
    },
    keywords: ["Abdelrhman Yasser", "Abdelrhman", "Frontend", "developer"],
    authors: [{ name: "Abdelrhman Yasser" }],
    openGraph: {
        title: "Abdelrhman Yasser | Frontend Developer",
        description:
            "Frontend developer portfolio. You see projects built with React, Next.js, Tailwind CSS, and modern UI patterns.",
        url: "https://abdelrhman-yasser.vercel.app",
        siteName: "Abdelrhman Yasser Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Abdelrhman Yasser Portfolio Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Abdelrhman Yasser | Frontend Developer",
        description:
            "Frontend developer portfolio. You see projects built with React, Next.js, Tailwind CSS, and modern UI patterns.",
        images: ["/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(
                "h-full antialiased",
                "font-sans",
                sourceSans3.variable,
            )}
        >
            <body suppressHydrationWarning className="min-h-full flex flex-col">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

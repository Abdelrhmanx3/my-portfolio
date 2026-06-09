import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Landing />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

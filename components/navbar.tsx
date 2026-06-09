import ThemeToggle from "./themes";
import { CodeXml } from "lucide-react";
import DropMenuNav from "./dropMenuNav";
import NavLinks from "./navLinks";
function Navbar() {
    return (
        <div className="backdrop-blur-md bg-background/60 border-b border-border rounded-2xl shadow-sm">
            <nav className="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 justify-between py-8 items-center">
                <a href="#home">
                    <div className="flex gap-4 items-center cursor-pointer">
                        <CodeXml className="text-primary w-12 h-12" />
                        <span className="text-4xl font-extrabold bg-linear-to-r from-primary via-gray-300 to-primary bg-size-[200%_100%] bg-clip-text text-transparent animate-shine">
                            DARWISH
                        </span>
                    </div>
                </a>
                <div className="flex gap-4">
                    <NavLinks />
                    <DropMenuNav />
                    <ThemeToggle />
                </div>
            </nav>
        </div>
    );
}
export default Navbar;

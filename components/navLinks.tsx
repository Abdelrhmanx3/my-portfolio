import { links } from "@/app/uitils/links";
import { Button } from "./ui/button";

function NavLinks() {
    return (
        <ul className="hidden sm:flex gap-8 items-center ">
            {links.map((link) => {
                const { name, href } = link;
                return (
                    <li key={name} className="capitalize">
                        <a href={href}>{name}</a>
                    </li>
                );
            })}
            <Button asChild>
                <a href="https://wa.me/201286249228" target="_blank">
                    Contact Me
                </a>
            </Button>
        </ul>
    );
}
export default NavLinks;

"use client";

import { TextAlignStart } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { links } from "@/app/uitils/links";
function DropMenuNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="flex sm:hidden gap-8 items-center " >
                <Button variant="default" size="lg">
                    <TextAlignStart />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {links.map(({ name, href }, index) => (
                    <div key={name} >
                        <DropdownMenuItem  asChild>
                            <a href={href} className="capitalize w-full">
                                {name}
                            </a>
                            
                        </DropdownMenuItem>
                        {index < links.length - 1 && <DropdownMenuSeparator />}
                    </div>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
export default DropMenuNav;

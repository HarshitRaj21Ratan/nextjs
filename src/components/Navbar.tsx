"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div 
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">

            </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Our Cources">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory </HoveredLink>
            <HoveredLink href="/courses">Advanced Composition </HoveredLink>
            <HoveredLink href="/courses">Beginer Friendly</HoveredLink>
            <HoveredLink href="/courses">Song Writting</HoveredLink>
            <HoveredLink href="/courses">Rappers United</HoveredLink>
            </div>
            </MenuItem>
            <Link href={"/"}>
                <MenuItem  setActive={setActive} active={active} item="Contact Us">
                    <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/contact">Email </HoveredLink>
                    <HoveredLink href="/contact">Phone Number</HoveredLink>
                    <HoveredLink href="/contact">social Media </HoveredLink>
                    </div>

                </MenuItem>
            </Link>

        </Menu>
      
    </div>
  )
}

export default Navbar

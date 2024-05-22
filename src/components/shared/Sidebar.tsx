import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { SidebarLinks } from "@/constants";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from 'react-icons/io';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="lg:hidden flex items-start justify-start p-4 bg-gray-700 text-white">
                <IoIosMenu size={24} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
            </div>

            <section className={`lg:w-[250px] bg-gray-700 lg:h-screen flex flex-col fixed lg:relative top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="flex items-center justify-center gap-4 p-6">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Label className="text-xl font-medium text-gray-400">Dashboard Kit</Label>
                </div>
                <div className="flex-grow">
                    {SidebarLinks.map((link, index) => (
                        <NavLink
                            to={link.route}
                            key={index}
                            className={({ isActive }) =>
                                `flex items-center gap-4 text-gray-400 p-5 hover:bg-gray-800 cursor-pointer ${isActive ? 'text-white bg-gray-800' : 'hover:text-white'}`}
                            onClick={() => setIsOpen(false)} // Menutup sidebar ketika link diklik
                        >
                            {link.Icon}
                            <Label className="cursor-pointer">{link.label}</Label>
                        </NavLink>
                    ))}
                </div>
            </section>

            {isOpen && <div className="fixed inset-0 bg-black opacity-50 lg:hidden" onClick={() => setIsOpen(false)}></div>}
        </>
    );
}

export default Sidebar;

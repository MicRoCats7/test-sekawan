import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { Notification } from "./Notification";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface NavbarDashboardProps {
    title: string;
}

const NavbarDashboard: React.FC<NavbarDashboardProps> = ({ title }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between mb-10">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4 md:mb-0">{title}</h1>
            <div className="flex justify-between items-center gap-4 md:gap-10">
                <IoIosSearch size={20} className="text-gray-500" />
                <Notification />
                <Separator orientation="vertical" className="hidden md:block" />
                <div className="flex items-center gap-3">
                    <span>Jones Ferdinand</span>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    );
};

export default NavbarDashboard;

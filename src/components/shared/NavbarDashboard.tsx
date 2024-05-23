import { IoIosSearch } from "react-icons/io";
import { Notification } from "./Notification";
import { Separator } from "../ui/separator";
import React, { useState } from "react";
import { PopupProfile } from "./PopupProfile";
import { Input } from "../ui/input";

interface NavbarDashboardProps {
    title: string;
    username: string;
    profileImage: string;
    role: string;
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const NavbarDashboard: React.FC<NavbarDashboardProps> = ({ title, username, profileImage, role, darkMode, toggleDarkMode }) => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between mb-10">
            <h1 className={`text-2xl font-semibold ${darkMode ? 'dark-text' : 'text-gray-700'} mb-4 md:mb-0`}>{title}</h1>
            <div className="flex justify-between items-center gap-4 md:gap-10">
                <div className="flex items-center gap-3">
                    {searchVisible && (
                        <Input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search Task"
                        />
                    )}
                    <IoIosSearch size={20} className="text-gray-500 cursor-pointer" onClick={handleSearchClick} />
                </div>
                <Notification darkMode={darkMode} />
                <Separator orientation="vertical" className="hidden md:block" />
                <div className="flex items-center gap-3">
                    <span>{username}</span>
                    <PopupProfile
                        profileImage={profileImage}
                        username={username}
                        role={role}
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                    />
                </div>
            </div>
        </div>
    );
};

export default NavbarDashboard;

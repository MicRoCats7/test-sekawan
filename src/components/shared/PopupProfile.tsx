import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

interface PopupProfileProps {
    profileImage: string;
    username: string;
    role: string;
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export function PopupProfile({ profileImage, username, role, darkMode, toggleDarkMode }: PopupProfileProps) {
    return (
        <Popover>
            <PopoverTrigger>
                <Avatar>
                    <AvatarImage src={profileImage} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent className={`flex flex-col gap-3 mr-10 mt-2 ${darkMode ? 'dark' : 'light'}`}>
                <div className="p-1">
                    <h1 className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{username}</h1>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Role : <span className="font-bold">{role}</span></p>
                </div>
                <div className="flex items-center space-x-2">
                    <Switch id="light/dark" checked={darkMode} onChange={toggleDarkMode} />
                    <Label htmlFor="light/dark">Light/Dark</Label>
                </div>
            </PopoverContent>
        </Popover>
    )
}

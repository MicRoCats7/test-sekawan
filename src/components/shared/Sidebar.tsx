import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "../ui/label";
import { SidebarLinks } from "@/constants";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <section className="w-[250px] bg-gray-700 h-screen">
            <div className="flex items-center justify-center gap-4 p-6">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Label className="text-xl font-medium text-gray-400">Dashboard Kit</Label>
            </div>
            <div>
                {SidebarLinks.map((link, index) => (
                    <div key={index} className="p-5 hover:bg-gray-800 cursor-pointer">
                        <Link to={link.route} className="flex items-center gap-4 text-gray-400 hover:text-white h-full">
                            {link.Icon}
                            <Label className="cursor-pointer">{link.label}</Label>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Sidebar
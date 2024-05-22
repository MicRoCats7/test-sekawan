import { FaBell } from "react-icons/fa"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Card } from "../ui/card"

export function Notification() {
    return (
        <Popover>
            <PopoverTrigger>
                <FaBell size={18} className="text-gray-500" />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-3">
                <Card>
                    <div className="p-4">
                        <h1 className="text-sm font-semibold text-gray-700">Notification</h1>
                        <p className="text-xs text-gray-500">You have 3 unread notification</p>
                    </div>
                </Card>
                <Card>
                    <div className="p-4">
                        <h1 className="text-sm font-semibold text-gray-700">Notification</h1>
                        <p className="text-xs text-gray-500">You have 3 unread notification</p>
                    </div>
                </Card>
                <Card>
                    <div className="p-4">
                        <h1 className="text-sm font-semibold text-gray-700">Notification</h1>
                        <p className="text-xs text-gray-500">You have 3 unread notification</p>
                    </div>
                </Card>
            </PopoverContent>
        </Popover>
    )
}

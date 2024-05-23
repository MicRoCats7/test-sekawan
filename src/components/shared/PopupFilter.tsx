import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { FaFilter } from "react-icons/fa"
import { SelectFilter } from "./SelectFilter"
import { useTranslation } from "react-i18next";

function PopupFilter({ onPriorityChange }: { onPriorityChange: (priority: string) => void }) {
    const { t } = useTranslation();
    return (
        <Popover>
            <PopoverTrigger>
                <div className="flex items-center gap-3 cursor-pointer">
                    <FaFilter />
                    <span>{t('ticket.filter')}</span>
                </div>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-3 mr-10 mt-2">
                <SelectFilter onPriorityChange={onPriorityChange} />
            </PopoverContent>
        </Popover>
    )
}

export default PopupFilter;

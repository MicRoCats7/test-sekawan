/* eslint-disable @typescript-eslint/no-explicit-any */

import { format } from "date-fns"
import { CiCalendarDate } from "react-icons/ci";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker({ selected, onChange }: any) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !selected && "text-muted-foreground"
                    )}
                >
                    <CiCalendarDate className="mr-2 h-4 w-4" />
                    {selected ? format(selected, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={selected}
                    onSelect={date => onChange(date)}
                    initialFocus
                    required
                />
            </PopoverContent>
        </Popover>
    )
}

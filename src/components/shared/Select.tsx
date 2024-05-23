/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function SelectDemo({ initialPriority, setPriority }: any) {
    const [selectedPriority, setSelectedPriority] = useState(initialPriority);

    useEffect(() => {
        setSelectedPriority(initialPriority);
    }, [initialPriority]);

    const onChange = (value: string) => {
        setSelectedPriority(value);
        setPriority(value);
    };

    return (
        <Select onValueChange={onChange} value={selectedPriority}>
            <SelectTrigger className="w-full border-2">
                <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Select Priority</SelectLabel>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

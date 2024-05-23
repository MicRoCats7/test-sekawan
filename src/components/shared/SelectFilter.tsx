import { useState, useEffect } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface SelectFilterProps {
    onPriorityChange: (priority: string) => void;
}

export function SelectFilter({ onPriorityChange }: SelectFilterProps) {
    const [selectedPriority, setSelectedPriority] = useState<string | null>(null);

    useEffect(() => {
        if (selectedPriority === null) {
            onPriorityChange('');
        }
    }, [selectedPriority, onPriorityChange]);

    const onChange = (value: string) => {
        setSelectedPriority(prevValue => prevValue === value ? null : value);
        onPriorityChange(value);
    };

    return (
        <Select onValueChange={onChange} value={selectedPriority || undefined}>
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

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "./Calender"
import { SelectDemo } from "./Select"
import { db } from "@/lib/firebase-config";
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useState } from "react";
import { toast } from "react-toastify"
import { useTranslation } from "react-i18next"

export function PopupCreateTicket({ userData, isDialogOpen, setIsDialogOpen, darkMode }: any) {
    const { t } = useTranslation();
    const [ticketDetails, setTicketDetails] = useState("");
    const [date, setDate] = useState<Date | null>(null);
    const [priority, setPriority] = useState<any>("");

    const handleCreateTicket = async () => {
        try {
            const ticketData = {
                ticketDetails: ticketDetails,
                date: date,
                priority: priority,
                createdAt: Timestamp.now(),
                username: userData[0].username,
                profilePic: userData[0].profileImg,
                approve: false,
                reject: false
            };

            await addDoc(collection(db, 'tickets'), ticketData);
            setTicketDetails("");
            setDate(null);
            setPriority("");
            setIsDialogOpen(false);
            toast.success("Ticket created successfully!");
        } catch (error) {
            console.error('Error creating ticket:', error);
        }
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild className="md:w-1/6 w-full">
                <Button variant="default" className={`bg-blue-500  ${darkMode ? 'dark-text' : ''}`} onClick={() => setIsDialogOpen(true)}>{t('ticket.create_ticket')}</Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-[425px] max-w-[350px]">
                <DialogHeader>
                    <DialogTitle>{t('ticket.create_ticket')}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="name" className="text-right">
                            {t('ticket.ticket_details')}
                        </Label>
                        <Input id="name" value={ticketDetails} onChange={(e) => setTicketDetails(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="username" className="text-right">
                            {t('ticket.date')}
                        </Label>
                        <DatePicker selected={date} onChange={(date: Date | null) => setDate(date)} />
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="username" className="text-right">
                            {t('ticket.priority')}
                        </Label>
                        <SelectDemo setPriority={setPriority} />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleCreateTicket} className="bg-blue-500">{t('ticket.create_ticket')}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

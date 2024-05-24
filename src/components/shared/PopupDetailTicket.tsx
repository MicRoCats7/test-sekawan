/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react";
import { toast } from "react-toastify"
import { doc, updateDoc } from 'firebase/firestore';
import { db } from "@/lib/firebase-config";
import { DatePickerDetail } from "./DatePickerDetail"
import { SelectDetail } from "./SelectDetail"
import { useTranslation } from "react-i18next";

export function Popupdetailticket({ userData, isDialogOpen, setIsDialogDetailOpen, darkMode, userRole }: any) {
    const { t } = useTranslation();
    const [ticketDetails, setTicketDetails] = useState(userData?.ticketDetails || "");
    const [date, setDate] = useState<Date | null>(userData?.date?.toDate() || null);
    const [priority, setPriority] = useState<any>(userData?.priority || "");
    const [approve, setApprove] = useState<any>(userData?.approve);
    const [reject, setReject] = useState<any>(userData?.approve);
    const role = userRole[0].role;
    const [approveLoading, setApproveLoading] = useState(false);
    const [rejectLoading, setRejectLoading] = useState(false);

    const updateTicketStatus = async (ticketId: string, statusUpdate: any) => {
        try {
            const ticketDoc = doc(db, 'tickets', ticketId);
            await updateDoc(ticketDoc, statusUpdate);
        } catch (error) {
            console.error('Error updating ticket:', error);
            toast.error('Error updating ticket');
        }
    };

    const handleApprove = async () => {
        setApproveLoading(true);
        await updateTicketStatus(userData.id, { approve: true, reject: false });
        setApproveLoading(false);
        setIsDialogDetailOpen(false);
        toast.success('Ticket Approved Successfully!!');
    };

    const handleReject = async () => {
        setRejectLoading(true);
        await updateTicketStatus(userData.id, { approve: false, reject: true });
        setRejectLoading(false);
        setIsDialogDetailOpen(false);
        toast.error('Ticket Rejected !!');
    };

    useEffect(() => {
        setTicketDetails(userData?.ticketDetails || "");
        setDate(userData?.date?.toDate() || null);
        setPriority(userData?.priority || "");
        setApprove(userData?.approve);
        setReject(userData?.reject);
    }, [userData]);

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogDetailOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{t('ticket.detail_ticket')}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="ticketDetails" className="text-right">
                            {t('ticket.ticket_details')}
                        </Label>
                        <Input id="ticketDetails" value={ticketDetails} className="col-span-3 border-2" disabled />
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="date" className="text-right">
                            {t('ticket.date')}
                        </Label>
                        <DatePickerDetail selected={date} onChange={(date: Date | null) => setDate(date)} />
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="priority" className="text-right">
                            {t('ticket.priority')}
                        </Label>
                        <SelectDetail initialPriority={priority} setPriority={setPriority} />
                    </div>
                </div>
                <DialogFooter>
                    {role === 'admin' && (
                        <>
                            {approve === false && reject === false && (
                                <>
                                    <Button onClick={handleApprove} className={`bg-blue-500 ${darkMode ? 'dark-text' : ''}`}>{approveLoading ? "Loading..." : t('ticket.approve')}</Button>
                                    <Button onClick={handleReject} className={`bg-red-500 ${darkMode ? 'dark-text' : ''}`}>{rejectLoading ? "Loading..." : t('ticket.reject')}</Button>
                                </>
                            )}
                        </>
                    )}
                    {approve === true && (
                        <Button className="border-blue-500 border bg-transparent text-blue-500 w-full cursor-default">Approved</Button>
                    )}
                    {reject === true && (
                        <Button className="border-red-500 border bg-transparent text-red-500 w-full cursor-default">Rejected</Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

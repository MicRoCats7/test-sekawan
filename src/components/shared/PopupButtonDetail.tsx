/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "../ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase-config';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export function PopupButtonDetail({ onDetailClick, ticketId, darkMode, userRole }: any) {
    const { t } = useTranslation();
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    async function deleteTicket(ticketId: string) {
        try {
            await deleteDoc(doc(db, 'tickets', ticketId));
            toast.success('Ticket Successfully Deleted');
            setIsPopoverOpen(false);
        } catch (error) {
            console.error('Error deleting ticket:', error);
        }
    }

    const handleDeleteClick = () => {
        setIsDeleteConfirmOpen(true);
    };

    const handleConfirmDelete = () => {
        deleteTicket(ticketId);
        setIsDeleteConfirmOpen(false);
    };

    const handleCancelDelete = () => {
        setIsDeleteConfirmOpen(false);
    };

    return (
        <>
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger>
                    <BsThreeDotsVertical />
                </PopoverTrigger>
                <PopoverContent className="flex flex-col gap-3 mr-20 mt-2 w-3/4">
                    <Button className={`bg-green-500 flex items-center gap-1 ${darkMode ? 'dark-text' : ''}`} onClick={onDetailClick}>
                        <BiDetail size={15} />
                        {t('ticket.detail')}
                    </Button>
                    <Dialog open={isDeleteConfirmOpen} onOpenChange={setIsDeleteConfirmOpen}>
                        <DialogTrigger asChild>
                            {userRole === 'quest' && (
                                <Button className={`bg-red-500 flex items-center gap-1 ${darkMode ? 'dark-text' : ''}`} onClick={handleDeleteClick}>
                                    <FaRegTrashAlt />
                                    {t('ticket.delete')}
                                </Button>
                            )}
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[300px]">
                            <div className="flex flex-col items-center p-4">
                                <p className="text-center">{t('ticket.descriptionDelete')}</p>
                                <div className="flex gap-2 mt-4 w-full">
                                    <Button className={`bg-red-500 w-full ${darkMode ? 'text-white' : ''}`} onClick={handleConfirmDelete}>{t('ticket.yes')}</Button>
                                    <Button onClick={handleCancelDelete} className={`bg-transparent border ${darkMode ? 'border-white text-white' : 'border-black text-black'} w-full `}>{t('ticket.no')}</Button>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </PopoverContent>
            </Popover>
        </>
    );
}

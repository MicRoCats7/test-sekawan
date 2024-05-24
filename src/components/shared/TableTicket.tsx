/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import PaginationTicket from "./Pagination";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import moment from "moment";
import { PopupButtonDetail } from "./PopupButtonDetail";
import { useTranslation } from "react-i18next";

interface Ticket {
    id: string;
    profilePic: string;
    ticketDetails: string;
    username: string;
    createdAt: any;
    date: any;
    priority: 'high' | 'normal' | 'low';
}

export function TableTicket({ ticketData, onDetailClick, isDialogOpen, setIsDialogOpen, darkMode, userData }: any) {
    const { t } = useTranslation();
    const userRole = userData[0].role;

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-gray-400" colSpan={3}>{t('ticket.ticket_details')}</TableHead>
                        <TableHead className="text-gray-400">{t('ticket.customer_name')}</TableHead>
                        <TableHead className="text-gray-400">{t('ticket.date')}</TableHead>
                        <TableHead className="text-right text-gray-400">{t('ticket.priority')}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ticketData.map((ticket: Ticket, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium" colSpan={3}>
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={ticket.profilePic} alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col items-start gap-1">
                                        <span>{ticket.ticketDetails}</span>
                                        <p className="text-gray-300 font-normal text-xs">{moment(ticket.createdAt?.toDate()).fromNow()}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col items-start gap-1">
                                    <span>{ticket.username}</span>
                                    <p className="text-gray-300 font-normal text-xs">on {moment(ticket.date?.toDate()).format('MMMM D, YYYY')}</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col items-start gap-1">
                                    <span>{moment(ticket.date?.toDate()).format('MMMM D, YYYY')}</span>
                                    <p className="text-gray-300 font-normal text-xs">{moment.utc(ticket.date?.toDate()).format('HH:mm')}</p>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <Badge
                                    className={ticket.priority === "high" ? "bg-red-500 text-white uppercase" : ticket.priority === "normal" ? "bg-green-500 text-white uppercase" : "bg-yellow-500 text-white uppercase"}
                                >{ticket.priority}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <PopupButtonDetail onDetailClick={() =>
                                    onDetailClick(ticket)}
                                    ticketId={ticket.id}
                                    isDialogOpen={isDialogOpen}
                                    setIsDialogOpen={setIsDialogOpen}
                                    darkMode={darkMode}
                                    userRole={userRole}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={7} className="text-right">
                            <PaginationTicket />
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}

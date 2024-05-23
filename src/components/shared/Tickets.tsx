/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaSortAmountUp } from "react-icons/fa"
import NavbarDashboard from "./NavbarDashboard"
import { TableTicket } from "./TableTicket"
import { PopupCreateTicket } from "./PopupCreateTicket";
import { useEffect, useState } from "react";
import { collection, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from "@/lib/firebase-config";
import { Popupdetailticket } from "./PopupDetailTicket";
import PopupFilter from "./PopupFilter";
import { useTranslation } from "react-i18next";

interface OverviewProps {
    username: string;
    profileImage: string;
    role: string;
    userData: any;
    darkMode: boolean;
    toggleDarkMode: () => void;
}

interface Ticket {
    id: string;
    profilePic: string;
    ticketDetails: string;
    username: string;
    createdAt: Timestamp;
    date: Timestamp;
    priority: 'high' | 'normal' | 'low';
}

function Tickets({ username, profileImage, role, userData, darkMode, toggleDarkMode }: OverviewProps) {
    const { t } = useTranslation();
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDialogDetailOpen, setIsDialogDetailOpen] = useState(false);
    const [sortOption, setSortOption] = useState<string | null>("date");
    const [priorityFilter, setPriorityFilter] = useState<string | null>(null);

    useEffect(() => {
        const fetchTickets = async () => {
            const ticketsCollection = collection(db, 'tickets');
            const unsubscribe = onSnapshot(ticketsCollection, (snapshot) => {
                const ticketsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Ticket[];
                setTickets(ticketsList);
            });

            return () => unsubscribe();
        };

        fetchTickets();
    }, []);

    const handleDetailClick = (ticket: Ticket) => {
        setSelectedTicket(ticket);
        setIsDialogDetailOpen(true);
    };

    const handleSortChange = (option: string) => {
        setSortOption(prevOption => prevOption === option ? null : option);
    };

    const handlePriorityChange = (priority: string) => {
        setPriorityFilter(prevPriority => prevPriority === priority ? null : priority);
    };

    const sortAndFilterTickets = (tickets: Ticket[]) => {
        let filteredTickets = tickets;
        if (priorityFilter) {
            filteredTickets = tickets.filter(ticket => ticket.priority === priorityFilter);
        }

        switch (sortOption) {
            case "date":
                return filteredTickets.sort((a, b) => b.date.toDate().getTime() - a.date.toDate().getTime());
            case "priority": {
                const priorityOrder: { [key in Ticket['priority']]: number } = { high: 1, normal: 2, low: 3 };
                return filteredTickets.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
            }
            default:
                return filteredTickets;
        }
    };

    const sortedAndFilteredTickets = sortAndFilterTickets(tickets);

    return (
        <section className="flex flex-col p-4 md:p-8">
            <NavbarDashboard
                title="Tickets"
                username={username}
                profileImage={profileImage}
                role={role}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <PopupCreateTicket
                userData={userData}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                darkMode={darkMode}
            />
            {selectedTicket && (
                <Popupdetailticket
                    userData={selectedTicket}
                    isDialogOpen={isDialogDetailOpen}
                    setIsDialogDetailOpen={setIsDialogDetailOpen}
                    darkMode={darkMode}
                    userRole={userData}
                />
            )}
            <div className={`mt-6 border-2 rounded-lg ${darkMode ? 'dark border-2 border-gray-700' : 'bg-white'}`}>
                <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-16">
                        <h1 className="text-xl font-semibold mb-3 md:mb-0">{t('ticket.all_ticket')}</h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleSortChange("date")}>
                                <FaSortAmountUp />
                                <span>{t('ticket.sortby')}</span>
                            </div>
                            <PopupFilter onPriorityChange={handlePriorityChange} />
                        </div>
                    </div>
                    <TableTicket
                        ticketData={sortedAndFilteredTickets}
                        onDetailClick={handleDetailClick}
                        isDialogOpen={isDialogDetailOpen}
                        setIsDialogDetailOpen={setIsDialogDetailOpen}
                        darkMode={darkMode}
                        userData={userData}
                    />
                </div>
            </div>
        </section>
    )
}

export default Tickets;

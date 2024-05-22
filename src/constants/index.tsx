import { FaChartPie, FaTicketAlt } from "react-icons/fa";
import { PiLampPendantBold } from "react-icons/pi";
import { MdArticle, MdGroups } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";

export const SidebarLinks = [
    {
        label: 'Overview',
        route: '/dashboard/overview',
        Icon: <FaChartPie />,
    },
    {
        label: 'Tickets',
        route: '/dashboard/tickets',
        Icon: <FaTicketAlt />
    },
    {
        label: 'Ideas',
        route: '/dashboard/ideas',
        Icon: <PiLampPendantBold />
    },
    {
        label: 'Contacts',
        route: '/dashboard/contact',
        Icon: <MdGroups />
    },
    {
        label: 'Agents',
        route: '/dashboard/agents',
        Icon: <IoPerson />
    },
    {
        label: 'Articles',
        route: '/dashboard/articles',
        Icon: <MdArticle />
    },
    {
        label: 'Settings',
        route: '/dashboard/setting',
        Icon: <IoIosSettings />
    },
    {
        label: 'Subscriptions',
        route: '/dashboard/subscription',
        Icon: <GiAchievement />
    },
];

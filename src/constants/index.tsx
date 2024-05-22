import { FaChartPie, FaTicketAlt } from "react-icons/fa";
import { PiLampPendantBold } from "react-icons/pi";
import { MdArticle, MdGroups } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";

export const SidebarLinks = [
    {
        label: 'Overview',
        route: '/overview',
        Icon: <FaChartPie />,
    },
    {
        label: 'Tickets',
        route: '/tickets',
        Icon: <FaTicketAlt />
    },
    {
        label: 'Ideas',
        route: '/ideas',
        Icon: <PiLampPendantBold />
    },
    {
        label: 'Contacts',
        route: '/contacts',
        Icon: <MdGroups />
    },
    {
        label: 'Agents',
        route: '/agents',
        Icon: <IoPerson />
    },
    {
        label: 'Articles',
        route: '/articles',
        Icon: <MdArticle />
    },
    {
        label: 'Settings',
        route: '/settings',
        Icon: <IoIosSettings />
    },
    {
        label: 'Subscriptions',
        route: '/subscriptions',
        Icon: <GiAchievement />
    },
]
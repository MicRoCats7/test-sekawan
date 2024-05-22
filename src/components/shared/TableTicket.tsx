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
import { BsThreeDotsVertical } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
        priority: "HIGH",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
        priority: "LOW",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
        priority: "HIGH",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
        priority: "NORMAL",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
        priority: "HIGH",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
        priority: "NORMAL",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
        priority: "LOW",
    },
];

export function TableTicket() {
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-gray-400" colSpan={3}>Ticket details</TableHead>
                        <TableHead className="text-gray-400">Customer Name</TableHead>
                        <TableHead className="text-gray-400">Date</TableHead>
                        <TableHead className="text-right text-gray-400">Priority</TableHead>
                        <TableHead className="text-right text-gray-400">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium" colSpan={3}>
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col items-start gap-1">
                                        <span>Jones Ferdinand</span>
                                        <p className="text-gray-300 font-normal text-xs">Updated 1 day ago</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col items-start gap-1">
                                    <span>Jones Ferdinand</span>
                                    <p className="text-gray-300 font-normal text-xs">on 24.05.2019</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col items-start gap-1">
                                    <span>May 26, 2019</span>
                                    <p className="text-gray-300 font-normal text-xs">6.30 PM</p>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <Badge
                                    className={invoice.priority === "HIGH" ? "bg-red-500 text-white" : invoice.priority === "NORMAL" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}
                                >{invoice.totalAmount}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <BsThreeDotsVertical />
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


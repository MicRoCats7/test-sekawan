import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Label } from "../ui/label"
import { Badge } from "../ui/badge"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "Urgent",
        paymentMethod: "Waiting on Feature Request",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "New",
        paymentMethod: "Awaiting Customer Response",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "Default",
        paymentMethod: "Awaiting Developer Fix",
    }
]

export function TableTask() {
    const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);

    return (
        <Table>
            <TableBody>
                {invoices.map((invoice, index) => (
                    <TableRow key={invoice.invoice} className='cursor-pointer'>
                        <TableCell colSpan={3} className="font-medium">
                            <RadioGroup
                                value={selectedInvoice}
                                onValueChange={(value) => setSelectedInvoice(value)}
                                className="flex cursor-pointer"
                            >
                                <RadioGroupItem value={invoice.invoice} id={invoice.invoice} />
                                <Label htmlFor={invoice.invoice} className="cursor-pointer">{invoice.paymentMethod}</Label>
                            </RadioGroup>
                        </TableCell>
                        <TableCell className="text-right font-medium text-gray-300">
                            <Badge
                                className={index === 0 ? "bg-yellow-500 text-white" : index === 1 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-400"}
                            >{invoice.totalAmount}
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

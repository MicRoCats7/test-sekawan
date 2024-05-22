import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "4238",
        paymentMethod: "Waiting on Feature Request",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "1005",
        paymentMethod: "Awaiting Customer Response",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "914",
        paymentMethod: "Awaiting Developer Fix",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "281",
        paymentMethod: "Pending",
    }
]

export function TableDemo() {
    return (
        <Table>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell colSpan={3} className="font-medium">{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right font-medium text-gray-300">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

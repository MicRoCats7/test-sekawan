import { FaFilter, FaSortAmountUp } from "react-icons/fa"
import NavbarDashboard from "./NavbarDashboard"
import { TableTicket } from "./TableTicket"

function Tickets() {
    return (
        <section className="flex flex-col p-4 md:p-8">
            <NavbarDashboard title="Tickets" />
            <div className="mt-6 border-2 rounded-lg flex flex-col bg-white">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6 md:mb-16">
                        <h1 className="text-xl font-semibold mb-3">Today's trends</h1>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <FaSortAmountUp />
                                <span>Sort</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaFilter />
                                <span>Filter</span>
                            </div>
                        </div>
                    </div>
                    <TableTicket />
                </div>
            </div>
        </section>
    )
}

export default Tickets;
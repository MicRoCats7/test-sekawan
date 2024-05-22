import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import MyChart from "./Charts"
import { TableDemo } from "./TableDemo"
import { TableTask } from "./TableTask"
import { FaPlus } from "react-icons/fa"
import NavbarDashboard from "./NavbarDashboard"

function Overview() {
    return (
        <section className="flex flex-col p-4 md:p-8">
            <NavbarDashboard title="Overview" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <Card>
                    <div className="p-4 flex flex-col justify-center items-center w-full gap-3">
                        <h1 className="text-xl font-semibold text-gray-500">Unresolved</h1>
                        <p className="text-5xl text-black">60</p>
                    </div>
                </Card>
                <Card>
                    <div className="p-4 flex flex-col justify-center items-center w-full gap-3">
                        <h1 className="text-xl font-semibold text-gray-500">Overdue</h1>
                        <p className="text-5xl text-black">16</p>
                    </div>
                </Card>
                <Card>
                    <div className="p-4 flex flex-col justify-center items-center w-full gap-3">
                        <h1 className="text-xl font-semibold text-gray-500">Open</h1>
                        <p className="text-5xl text-black">43</p>
                    </div>
                </Card>
                <Card>
                    <div className="p-4 flex flex-col justify-center items-center w-full gap-3">
                        <h1 className="text-xl font-semibold text-gray-500">On Hold</h1>
                        <p className="text-5xl text-black">64</p>
                    </div>
                </Card>
            </div>
            <div className="mt-6 border-2 rounded-lg flex flex-col lg:flex-row bg-white">
                <div className="p-6 md:p-10 w-full lg:w-4/5">
                    <h1 className="text-2xl font-semibold mb-3">Today's trends</h1>
                    <div className="flex flex-col md:flex-row justify-between mb-16">
                        <p className="text-gray-500 text-sm">as of 25 May 2019, 09:41 PM</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-500 h-0.5 w-9" />
                                <span className="text-sm text-gray-500">Today</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-200 h-0.5 w-9" />
                                <span className="text-sm text-gray-500">Yesterday</span>
                            </div>
                        </div>
                    </div>
                    <MyChart />
                </div>
                <div className="w-full lg:w-[30%] border-t lg:border-t-0 lg:border-l flex flex-col items-center justify-center">
                    <div className="p-4 flex flex-col justify-center items-center w-full gap-3 border-b">
                        <h1 className="text-lg font-medium text-gray-500">Resolved</h1>
                        <p className="text-xl text-black font-semibold">449</p>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center w-full gap-3 border-b">
                        <h1 className="text-lg font-medium text-gray-500">Received</h1>
                        <p className="text-xl text-black font-semibold">426</p>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center w-full gap-3 border-b">
                        <h1 className="text-lg font-medium text-gray-500">Average first response time</h1>
                        <p className="text-xl text-black font-semibold">33m</p>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center w-full gap-3 border-b">
                        <h1 className="text-lg font-medium text-gray-500">Average response time</h1>
                        <p className="text-xl text-black font-semibold">3h 8m</p>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center w-full gap-3">
                        <h1 className="text-lg font-medium text-gray-500">Resolution within SLA</h1>
                        <p className="text-xl text-black font-semibold">94%</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between mt-6 gap-4">
                <Card className="w-full lg:w-1/2">
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle className="text-lg">Unresolved tickets</CardTitle>
                            <CardTitle className="text-sm text-blue-500">View Details</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300">Group: <span className="font-semibold text-gray-500">Support</span></CardDescription>
                    </CardHeader>
                    <div className="p-4 flex flex-col justify-center items-center w-full gap-3">
                        <TableDemo />
                    </div>
                </Card>
                <Card className="w-full lg:w-1/2">
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle className="text-lg">Tasks</CardTitle>
                            <CardTitle className="text-sm text-blue-500">View all</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300">Today</CardDescription>
                    </CardHeader>
                    <div className="p-4 flex flex-col justify-center w-full gap-3">
                        <div className="flex items-center justify-between px-4 py-1">
                            <h1 className="text-gray-300 text-sm">Create new task</h1>
                            <div className="bg-gray-200 p-2 rounded-lg">
                                <FaPlus size={15} className="text-gray-400" />
                            </div>
                        </div>
                        <TableTask />
                    </div>
                </Card>
            </div>
        </section>
    )
}

export default Overview

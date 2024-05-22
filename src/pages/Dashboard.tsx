import { Route, Routes } from "react-router-dom";
import Sidebar from "@/components/shared/Sidebar";
import Overview from "@/components/shared/Overview";
import Tickets from "@/components/shared/Tickets";
import Ideas from "@/components/shared/Ideas";
import Contact from "@/components/shared/Contact";
import Agent from "@/components/shared/Agent";
import Articles from "@/components/shared/Articles";
import Setting from "@/components/shared/Setting";
import Subscription from "@/components/shared/Subscription";

function Dashboard() {
    return (
        <section className="h-screen flex bg-slate-100">
            <Sidebar />
            <div className="flex-grow p-6 overflow-auto">
                <Routes>
                    <Route path="overview" element={<Overview />} />
                    <Route path="tickets" element={<Tickets />} />
                    <Route path="ideas" element={<Ideas />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="agents" element={<Agent />} />
                    <Route path="articles" element={<Articles />} />
                    <Route path="setting" element={<Setting />} />
                    <Route path="subscription" element={<Subscription />} />
                </Routes>
            </div>
        </section>
    );
}

export default Dashboard;

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
import { useEffect, useState } from "react";

function Dashboard() {
    const [username, setUsername] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [role, setRole] = useState("");
    const userData = localStorage.getItem('loggedInUserData');
    const loggedInUserData = userData ? JSON.parse(userData) : null;
    const [darkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode === 'true';
    });

    useEffect(() => {
        if (loggedInUserData && Array.isArray(loggedInUserData)) {
            const loggedInUser = loggedInUserData.find((user) => user.email === "guest@gmail.com" || user.email === "admin@gmail.com");
            if (loggedInUser) {
                setUsername(loggedInUser.username);
                setProfileImage(loggedInUser.profileImg);
                setRole(loggedInUser.role);
            }
        }
    }, [loggedInUserData]);

    useEffect(() => {
        // Mengatur darkMode ke localStorage
        localStorage.setItem('darkMode', JSON.stringify(darkMode));

        // Mengubah kelas pada elemen root HTML
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        // Memperbarui darkMode dengan nilai yang terbalik
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <section className={`h-screen flex ${darkMode ? 'dark' : 'bg-slate-100'}`}>
            <Sidebar role={role} />
            <div className="flex-grow p-6 overflow-auto">
                <Routes>
                    <Route
                        path="overview"
                        element={
                            <Overview
                                username={username}
                                profileImage={profileImage}
                                role={role}
                                darkMode={darkMode}
                                toggleDarkMode={toggleDarkMode}
                            />}
                    />
                    <Route
                        path="tickets"
                        element={
                            <Tickets
                                username={username}
                                profileImage={profileImage}
                                role={role}
                                userData={loggedInUserData}
                                darkMode={darkMode}
                                toggleDarkMode={toggleDarkMode}
                            />}
                    />
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

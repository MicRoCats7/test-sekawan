/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import MyChart from "./Charts"
import { TableDemo } from "./TableDemo"
import { TableTask } from "./TableTask"
import { FaPlus } from "react-icons/fa"
import NavbarDashboard from "./NavbarDashboard"
import { useEffect, useState } from "react"
import { db } from "@/lib/firebase-config";
import { collection, onSnapshot, query } from 'firebase/firestore';
import moment from 'moment';
import { useTranslation } from "react-i18next"

interface OverviewProps {
    username: string;
    profileImage: string;
    role: string;
    darkMode: boolean;
    toggleDarkMode: () => void;
}

function Overview({ username, profileImage, role, darkMode, toggleDarkMode }: OverviewProps) {
    const { t } = useTranslation();
    const [overviewData, setOverviewData] = useState<any[]>([]);

    const fetchOverviewData = async () => {
        try {
            onSnapshot(query(collection(db, 'overview')), (snapshot) => {
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setOverviewData(data);
            })
        } catch (error) {
            console.error('Error fetching overview data:', error);
        }
    };

    useEffect(() => {
        fetchOverviewData();
    }, []);

    return (
        <section className="flex flex-col p-4 md:p-8">
            <NavbarDashboard
                title="Overview"
                username={username}
                profileImage={profileImage}
                role={role}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            {overviewData?.map((data, index) => (
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
                    key={index}
                >
                    {data.overviewData?.map((data: any, index: number) => (
                        <Card key={index}>
                            <div className="p-4 flex flex-col justify-center items-center w-full gap-3">
                                <h1 className={`text-xl font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{data.label}</h1>
                                <p className={`text-5xl ${darkMode ? 'dark-text' : 'text-black'}`}>{data.total}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            ))}
            <div className={`mt-6 rounded-lg flex flex-col lg:flex-row ${darkMode ? 'dark border-2 border-gray-700' : 'bg-white border-2'}`}>
                <div className="p-6 md:p-10 w-full lg:w-4/5">
                    <h1 className={`text-2xl font-semibold mb-3 ${darkMode ? 'dark-text' : 'text-black'}`}>{t('overview.today_trend')}</h1>
                    <div className="flex flex-col md:flex-row justify-between mb-16">
                        <p className={`text-sm ${darkMode ? 'dark-text' : 'text-gray-500'}`}>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-500 h-0.5 w-9" />
                                <span className={`text-sm ${darkMode ? 'dark-text' : 'text-gray-500'}`}>{t('overview.today')}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-200 h-0.5 w-9" />
                                <span className={`text-sm ${darkMode ? 'dark-text' : 'text-gray-500'}`}>{t('overview.yesterday')}</span>
                            </div>
                        </div>
                    </div>
                    <MyChart />
                </div>
                <div className={`w-full lg:w-[30%] border-t lg:border-t-0 lg:border-l ${darkMode ? 'border-gray-700' : ''} flex flex-col items-center justify-center`}>
                    {overviewData?.map((data) => (
                        <>
                            {data.todayTrend?.map((data: any, index: number) => (
                                <div className={`p-4 flex flex-col justify-center items-center w-full gap-3 ${index === 4 ? '' : `${darkMode ? 'border-b border-gray-700' : 'border-b'}`}`}
                                    key={index}
                                >
                                    <h1 className={`text-lg font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{data.label}</h1>
                                    <p className={`text-xl ${darkMode ? 'text-white' : 'text-black'} font-semibold`}>{data.total}</p>
                                </div>
                            ))}
                        </>
                    ))}
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between mt-6 gap-4">
                <Card className="w-full lg:w-1/2">
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle className="text-lg">{t('overview.unresolved')}</CardTitle>
                            <CardTitle className="text-sm text-blue-500">{t('overview.view_detail')}</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300">{t('overview.group')}: <span className="font-semibold text-gray-500">{t('overview.support')}</span></CardDescription>
                    </CardHeader>
                    <div className="p-4 flex flex-col justify-center items-center w-full gap-3">
                        <TableDemo />
                    </div>
                </Card>
                <Card className="w-full lg:w-1/2">
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle className="text-lg">{t('overview.task')}</CardTitle>
                            <CardTitle className="text-sm text-blue-500">{t('overview.view_all')}</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300">{t('overview.today')}</CardDescription>
                    </CardHeader>
                    <div className="p-4 flex flex-col justify-center w-full gap-3">
                        <div className="flex items-center justify-between px-4 py-1">
                            <h1 className="text-gray-300 text-sm">{t('overview.create_task')}</h1>
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

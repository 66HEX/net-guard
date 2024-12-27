"use client";
import BackgroundOverlay2 from "@/app/components/BackgroundOverlay2/backgroundOverlay2";
import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area
} from 'recharts';
import {
    Shield, AlertTriangle, Activity, Globe,
    Users, Lock, Server, Wifi
} from 'lucide-react';

const data = [
    { name: 'Mon', threats: 12, traffic: 845, users: 125 },
    { name: 'Tue', threats: 19, traffic: 756, users: 142 },
    { name: 'Wed', threats: 8, traffic: 921, users: 132 },
    { name: 'Thu', threats: 15, traffic: 832, users: 146 },
    { name: 'Fri', threats: 23, traffic: 945, users: 151 },
    { name: 'Sat', threats: 5, traffic: 542, users: 98 },
    { name: 'Sun', threats: 9, traffic: 623, users: 112 }
];

const DashboardSection = () => {
    return (
        <section className="w-full min-h-screen bg-black/60 text-white relative overflow-hidden">
            <BackgroundOverlay2/>

            {/* Content container */}
            <div className="max-w-7xl mx-auto relative py-20 px-4 mt-32">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium mb-6">
                        Powerful <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">Analytics</span> Dashboard
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Monitor your network security in real-time with comprehensive analytics and insights
                    </p>
                </div>

                {/* Main Dashboard Mock */}
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
                    {/* Top Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <StatCard icon={Shield} label="Protected Endpoints" value="1,456" trend="+12%" />
                        <StatCard icon={AlertTriangle} label="Threats Blocked" value="23,651" trend="+8%" />
                        <StatCard icon={Activity} label="Network Uptime" value="99.99%" trend="0%" />
                        <StatCard icon={Users} label="Active Users" value="842" trend="+5%" />
                    </div>

                    {/* Charts Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Threat Detection Chart */}
                        <div className="bg-black/30 rounded-xl p-4">
                            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-green-400" />
                                Threat Detection Overview
                            </h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                        <XAxis dataKey="name" stroke="#ffffff60" />
                                        <YAxis stroke="#ffffff60" />
                                        <Tooltip
                                            contentStyle={{
                                                background: '#000000dd',
                                                border: '1px solid #ffffff20',
                                                borderRadius: '8px'
                                            }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="threats"
                                            stroke="#22c55e"
                                            strokeWidth={2}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Network Traffic Chart */}
                        <div className="bg-black/30 rounded-xl p-4">
                            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-green-400" />
                                Network Traffic Analysis
                            </h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                        <XAxis dataKey="name" stroke="#ffffff60" />
                                        <YAxis stroke="#ffffff60" />
                                        <Tooltip
                                            contentStyle={{
                                                background: '#000000dd',
                                                border: '1px solid #ffffff20',
                                                borderRadius: '8px'
                                            }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="traffic"
                                            stroke="#22c55e"
                                            fill="#22c55e20"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <QuickActionCard
                            icon={Lock}
                            title="Access Control"
                            description="Manage user permissions and access levels"
                        />
                        <QuickActionCard
                            icon={Server}
                            title="Server Status"
                            description="Monitor all connected servers and endpoints"
                        />
                        <QuickActionCard
                            icon={Globe}
                            title="Global Overview"
                            description="View worldwide connection statistics"
                        />
                        <QuickActionCard
                            icon={Wifi}
                            title="Network Settings"
                            description="Configure VPN and security protocols"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ icon: Icon, label, value, trend }) => {
    const trendColor = trend.startsWith('+') ? 'text-green-400' :
        trend.startsWith('-') ? 'text-red-400' : 'text-gray-400';

    return (
        <div className="bg-black/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
                <Icon className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-400">{label}</span>
            </div>
            <div className="flex items-baseline justify-between">
                <span className="text-2xl font-medium">{value}</span>
                <span className={`text-sm ${trendColor}`}>{trend}</span>
            </div>
        </div>
    );
};

const QuickActionCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-black/30 rounded-xl p-4 hover:bg-black/40 transition-colors cursor-pointer group">
            <Icon className="w-6 h-6 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="font-medium mb-1">{title}</h4>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    );
};

export default DashboardSection;
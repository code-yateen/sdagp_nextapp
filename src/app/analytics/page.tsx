"use client";
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { FaChartLine, FaCalendarAlt, FaDollarSign, FaUsers } from 'react-icons/fa';
import { useData } from '@/contexts/DataContext';

export default function AnalyticsPage() {
  

  const monthlyData = [
    { month: 'Jan', earnings: 45.23, bandwidth: 120 },
    { month: 'Feb', earnings: 52.18, bandwidth: 135 },
    { month: 'Mar', earnings: 48.92, bandwidth: 128 },
    { month: 'Apr', earnings: 61.45, bandwidth: 142 },
    { month: 'May', earnings: 58.73, bandwidth: 138 },
    { month: 'Jun', earnings: 67.21, bandwidth: 155 },
  ];

  const deviceData = [
    { name: 'Desktop', value: 65, color: '#22C55E' },
    { name: 'Mobile', value: 25, color: '#0EA5E9' },
    { name: 'Tablet', value: 10, color: '#F59E0B' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
              <p className="text-gray-400">Detailed insights into your bandwidth sharing performance</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="w-5 h-5 text-grass-400" />
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
          </div>
        </motion.div>
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Total Revenue', value: '$234.56', change: '+15.3%', icon: FaDollarSign, color: 'text-grass-400' },
            { title: 'Avg. Daily Earnings', value: '$7.82', change: '+8.1%', icon: FaChartLine, color: 'text-primary-400' },
            { title: 'Active Hours', value: '18.5h', change: '+2.4%', icon: FaCalendarAlt, color: 'text-purple-400' },
            { title: 'Referrals', value: '12', change: '+25%', icon: FaUsers, color: 'text-orange-400' },
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                  <span className="text-xs text-grass-400 font-medium">{metric.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
                <p className="text-gray-400 text-sm">{metric.title}</p>
              </motion.div>
            );
          })}
        </div>
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Earnings */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="card">
            <h3 className="text-xl font-semibold text-white mb-6">Monthly Earnings</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} />
                  <Bar dataKey="earnings" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22C55E" />
                      <stop offset="100%" stopColor="#16A34A" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          {/* Device Distribution */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card">
            <h3 className="text-xl font-semibold text-white mb-6">Device Distribution</h3>
            <div className="h-80 flex items-center">
              <div className="w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-1/2 space-y-4">
                {deviceData.map((device) => (
                  <div key={device.name} className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: device.color }} />
                    <span className="text-gray-300">{device.name}</span>
                    <span className="text-white font-semibold ml-auto">{device.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        {/* Performance Table */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <h3 className="text-xl font-semibold text-white mb-6">Recent Performance</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Date</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Earnings</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Bandwidth</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Quality</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: 'Today', earnings: '$2.45', bandwidth: '45 GB', quality: '98%', status: 'Active' },
                  { date: 'Yesterday', earnings: '$2.12', bandwidth: '42 GB', quality: '95%', status: 'Active' },
                  { date: '2 days ago', earnings: '$1.89', bandwidth: '38 GB', quality: '92%', status: 'Active' },
                  { date: '3 days ago', earnings: '$2.67', bandwidth: '48 GB', quality: '99%', status: 'Active' },
                  { date: '4 days ago', earnings: '$1.95', bandwidth: '40 GB', quality: '94%', status: 'Active' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-white">{row.date}</td>
                    <td className="py-3 px-4 text-grass-400 font-semibold">{row.earnings}</td>
                    <td className="py-3 px-4 text-gray-300">{row.bandwidth}</td>
                    <td className="py-3 px-4 text-gray-300">{row.quality}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-grass-500/20 text-grass-400 rounded-full text-xs">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
} 
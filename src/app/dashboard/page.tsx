"use client";
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import { FaDollarSign, FaChartLine, FaWifi, FaClock, FaCopy, FaExternalLinkAlt, FaBolt } from 'react-icons/fa';
import { useData } from '@/contexts/DataContext';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

export default function DashboardPage() {
  const { earnings, networkStats, connectionStatus, referralCode, referralCount } = useData();

  const copyReferralCode = () => {
    navigator.clipboard.writeText(`https://sdagp.com/ref/${referralCode}`);
    // You could add a toast notification here
  };

  const statsCards = [
    {
      title: 'Total Earnings',
      value: `$${earnings.total.toFixed(4)}`,
      change: '+12.5%',
      icon: FaDollarSign,
      color: 'from-grass-500 to-grass-600',
    },
    {
      title: "Today's Earnings",
      value: `$${earnings.today.toFixed(4)}`,
      change: '+8.2%',
      icon: FaChartLine,
      color: 'from-primary-500 to-primary-600',
    },
    {
      title: 'Network Quality',
      value: `${networkStats.quality}%`,
      change: 'Excellent',
      icon: FaWifi,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Uptime',
      value: `${networkStats.uptime}%`,
      change: '24h',
      icon: FaClock,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const chartData = earnings.history.slice(-7).map((item, index) => ({
    day: `Day ${index + 1}`,
    earnings: item.amount * 1000, // Scale for better visualization
  }));

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-gray-400">Monitor your bandwidth sharing and earnings</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                connectionStatus === 'connected' ? 'bg-grass-500 glow-animation' : 
                connectionStatus === 'connecting' ? 'bg-yellow-500 animate-pulse' : 
                'bg-red-500'
              }`} />
              <span className="text-sm text-gray-400 capitalize">{connectionStatus}</span>
            </div>
          </div>
        </motion.div>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-grass-400 font-medium">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.title}</p>
              </motion.div>
            );
          })}
        </div>
        {/* Charts and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Earnings Chart */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Earnings Trend</h3>
              <FaChartLine className="w-5 h-5 text-grass-400" />
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} />
                  <Line type="monotone" dataKey="earnings" stroke="#22C55E" strokeWidth={3} dot={{ fill: '#22C55E', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, stroke: '#22C55E', strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          {/* Network Stats */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Network Performance</h3>
              <FaBolt className="w-5 h-5 text-primary-400" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Bandwidth</span>
                <span className="text-white font-semibold">{networkStats.bandwidth} Mbps</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Latency</span>
                <span className="text-white font-semibold">{networkStats.latency}ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Quality Score</span>
                <span className="text-grass-400 font-semibold">{networkStats.quality}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Uptime</span>
                <span className="text-white font-semibold">{networkStats.uptime}%</span>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Referral Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Referral Program</h3>
              <p className="text-gray-400">Earn 10% of your referrals&apos; earnings forever</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-grass-400">{referralCount}</div>
              <div className="text-sm text-gray-400">Active Referrals</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <code className="text-grass-400 font-mono">
                https://sdagp.com/ref/{referralCode}
              </code>
            </div>
            <button onClick={copyReferralCode} className="btn-secondary flex items-center space-x-2">
              <FaCopy className="w-4 h-4" />
              <span>Copy</span>
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <FaExternalLinkAlt className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
} 
"use client";
import Layout from '../../components/Layout';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaShareAlt, FaUsers, FaDollarSign, FaChartLine, FaExternalLinkAlt } from 'react-icons/fa';
import { useData } from '@/contexts/DataContext';

export default function ReferralsPage() {
  const { referralCode } = useData();
  const [copied, setCopied] = useState(false);

  const copyReferralLink = () => {
    const link = `https://sdagp.com/ref/${referralCode}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const referralStats = [
    { title: 'Total Referrals', value: '24', change: '+3 this week', icon: FaUsers, color: 'from-grass-500 to-grass-600' },
    { title: 'Active Referrals', value: '18', change: '75% active rate', icon: FaChartLine, color: 'from-primary-500 to-primary-600' },
    { title: 'Referral Earnings', value: '$45.67', change: '+$12.34 this month', icon: FaDollarSign, color: 'from-purple-500 to-purple-600' },
  ];

  const recentReferrals = [
    { username: 'user_2024_001', joinDate: '2024-01-15', earnings: '$12.45', status: 'Active' },
    { username: 'user_2024_002', joinDate: '2024-01-14', earnings: '$8.92', status: 'Active' },
    { username: 'user_2024_003', joinDate: '2024-01-13', earnings: '$15.67', status: 'Inactive' },
    { username: 'user_2024_004', joinDate: '2024-01-12', earnings: '$6.78', status: 'Active' },
    { username: 'user_2024_005', joinDate: '2024-01-11', earnings: '$9.34', status: 'Active' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Referral Program</h1>
              <p className="text-gray-400">Earn 10% commission from your referrals' earnings forever</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaShareAlt className="w-5 h-5 text-grass-400" />
              <span className="text-sm text-gray-400">Share & Earn</span>
            </div>
          </div>
        </motion.div>
        {/* Referral Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {referralStats.map((stat, index) => {
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
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm mb-2">{stat.title}</p>
                <span className="text-xs text-grass-400 font-medium">{stat.change}</span>
              </motion.div>
            );
          })}
        </div>
        {/* Referral Link */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Your Referral Link</h3>
              <p className="text-gray-400">Share this link to start earning commissions</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <code className="text-grass-400 font-mono text-sm">
                https://sdagp.com/ref/{referralCode}
              </code>
            </div>
            <button onClick={copyReferralLink} className={`btn-secondary flex items-center space-x-2 ${copied ? 'bg-grass-500/20 text-grass-400' : ''}`}>
              <FaCopy className="w-4 h-4" />
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          {/* Social Share Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Twitter', color: 'bg-blue-500 hover:bg-blue-600' },
              { name: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
              { name: 'LinkedIn', color: 'bg-blue-700 hover:bg-blue-800' },
              { name: 'Email', color: 'bg-gray-600 hover:bg-gray-700' },
            ].map((platform) => (
              <button
                key={platform.name}
                className={`${platform.color} text-white px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2`}
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                <span>{platform.name}</span>
              </button>
            ))}
          </div>
        </motion.div>
        {/* How It Works */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <h3 className="text-xl font-semibold text-white mb-6">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Share Your Link',
                description: 'Share your unique referral link with friends and family',
              },
              {
                step: '2',
                title: 'They Sign Up',
                description: 'When someone signs up using your link, they become your referral',
              },
              {
                step: '3',
                title: 'Earn Commission',
                description: 'Earn 10% of their earnings for as long as they use SDAGP',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-grass-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Recent Referrals */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <h3 className="text-xl font-semibold text-white mb-6">Recent Referrals</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">User</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Join Date</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Their Earnings</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Your Commission</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentReferrals.map((referral, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-white font-mono text-sm">{referral.username}</td>
                    <td className="py-3 px-4 text-gray-300">{referral.joinDate}</td>
                    <td className="py-3 px-4 text-gray-300">{referral.earnings}</td>
                    <td className="py-3 px-4 text-grass-400 font-semibold">
                      ${(parseFloat(referral.earnings.slice(1)) * 0.1).toFixed(2)}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        referral.status === 'Active' 
                          ? 'bg-grass-500/20 text-grass-400' 
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {referral.status}
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
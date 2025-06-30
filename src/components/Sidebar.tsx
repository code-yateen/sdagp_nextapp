"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaTachometerAlt, FaChartBar, FaUsers, FaCog, FaBolt, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const { logout } = useAuth();
  const pathname = usePathname();

  const navItems = [
    { path: '/dashboard', icon: FaTachometerAlt, label: 'Dashboard' },
    { path: '/analytics', icon: FaChartBar, label: 'Analytics' },
    { path: '/referrals', icon: FaUsers, label: 'Referrals' },
    { path: '/settings', icon: FaCog, label: 'Settings' },
  ];

  return (
    <div className="w-64 glass-effect border-r border-white/10 flex flex-col">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-grass-500 to-primary-500 rounded-xl flex items-center justify-center">
            <FaBolt className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">SDAGP</h1>
            <p className="text-xs text-gray-400">Bandwidth Rewards</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-grass-500/20 text-grass-400 border border-grass-500/30' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-grass-400' : 'group-hover:text-white'}`} />
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute right-4 w-2 h-2 bg-grass-400 rounded-full"
                />
              )}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-white/10">
        <button
          onClick={logout}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 w-full"
        >
          <FaSignOutAlt className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 
import { FaBell } from 'react-icons/fa';
import { FaWifi, FaBan } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';
import { useAuth } from '@/contexts/AuthContext';
import { useData } from '@/contexts/DataContext';
import { motion } from 'framer-motion';

const Header = () => {
  const { user } = useAuth();
  const { connectionStatus, networkStats } = useData();

  const getStatusIcon = () => {
    switch (connectionStatus) {
      case 'connected':
        return <FaWifi className="w-5 h-5 text-grass-400" />;
      case 'connecting':
      case 'syncing':
        return <FaSpinner className="w-5 h-5 text-yellow-400 animate-spin" />;
      case 'offline':
        return <FaBan className="w-5 h-5 text-red-400" />;
      default:
        return <FaWifi className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusText = () => {
    switch (connectionStatus) {
      case 'connected':
        return 'Connected';
      case 'connecting':
        return 'Connecting...';
      case 'syncing':
        return 'Syncing...';
      case 'offline':
        return 'Offline';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = () => {
    switch (connectionStatus) {
      case 'connected':
        return 'status-online';
      case 'connecting':
      case 'syncing':
        return 'status-syncing';
      case 'offline':
        return 'status-offline';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <header className="glass-effect border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-white">
            Welcome back, {user?.username}
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <motion.div 
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${getStatusColor()}`}
            whileHover={{ scale: 1.05 }}
          >
            {getStatusIcon()}
            <span className="text-sm font-medium">{getStatusText()}</span>
            {connectionStatus === 'connected' && (
              <span className="text-xs opacity-75">
                {networkStats.quality}% Quality
              </span>
            )}
          </motion.div>
          <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
            <FaBell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-grass-500 rounded-full"></span>
          </button>
          <div className="w-10 h-10 bg-gradient-to-r from-grass-500 to-primary-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {user?.username?.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
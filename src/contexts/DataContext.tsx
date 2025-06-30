"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface NetworkStats {
  quality: number;
  uptime: number;
  bandwidth: number;
  latency: number;
}

interface EarningsData {
  total: number;
  today: number;
  thisWeek: number;
  thisMonth: number;
  history: Array<{ date: string; amount: number }>;
}

interface DataContextType {
  earnings: EarningsData;
  networkStats: NetworkStats;
  isOnline: boolean;
  connectionStatus: 'connected' | 'connecting' | 'offline' | 'syncing';
  referralCode: string;
  referralCount: number;
  updateEarnings: () => void;
  updateNetworkStats: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [earnings, setEarnings] = useState<EarningsData>({
    total: 0,
    today: 0,
    thisWeek: 0,
    thisMonth: 0,
    history: [],
  });

  const [networkStats, setNetworkStats] = useState<NetworkStats>({
    quality: 0,
    uptime: 0,
    bandwidth: 0,
    latency: 0,
  });

  const [isOnline, setIsOnline] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'connecting' | 'offline' | 'syncing'>('connecting');
  const [referralCode] = useState(() => crypto.randomUUID().slice(0, 8).toUpperCase());
  const [referralCount, setReferralCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOnline(true);
      setConnectionStatus('connected');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isOnline) {
        updateEarnings();
        updateNetworkStats();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isOnline]);

  const updateEarnings = () => {
    setEarnings((prev) => {
      const increment = Math.random() * 0.01;
      const newTotal = prev.total + increment;
      const newToday = prev.today + increment;
      return {
        ...prev,
        total: newTotal,
        today: newToday,
        thisWeek: prev.thisWeek + increment,
        thisMonth: prev.thisMonth + increment,
        history: [
          ...prev.history.slice(-29),
          { date: new Date().toISOString(), amount: increment },
        ],
      };
    });
  };

  const updateNetworkStats = () => {
    setNetworkStats({
      quality: Math.floor(Math.random() * 30) + 70,
      uptime: Math.floor(Math.random() * 10) + 90,
      bandwidth: Math.floor(Math.random() * 50) + 50,
      latency: Math.floor(Math.random() * 20) + 10,
    });
  };

  const value: DataContextType = {
    earnings,
    networkStats,
    isOnline,
    connectionStatus,
    referralCode,
    referralCount,
    updateEarnings,
    updateNetworkStats,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}; 
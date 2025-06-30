"use client";
import Layout from '../../components/Layout';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaBell, FaShieldAlt, FaWifi, FaDownload, FaUpload, FaSave, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '@/contexts/AuthContext';

export default function SettingsPage() {
  const { user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    username: user?.username || '',
    email: user?.email || '',
    emailNotifications: true,
    pushNotifications: true,
    earningsAlerts: true,
    maxBandwidth: 100,
    minQuality: 80,
    autoOptimize: true,
    twoFactorAuth: false,
    sessionTimeout: 30,
  });

  const handleSave = () => {
    // Save settings logic here
    console.log('Settings saved:', settings);
  };

  const updateSetting = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
              <p className="text-gray-400">Manage your account and preferences</p>
            </div>
            <button onClick={handleSave} className="btn-primary flex items-center space-x-2">
              <FaSave className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Settings */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="card">
            <div className="flex items-center space-x-3 mb-6">
              <FaUser className="w-6 h-6 text-grass-400" />
              <h3 className="text-xl font-semibold text-white">Profile</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                <input type="text" value={settings.username} onChange={(e) => updateSetting('username', e.target.value)} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-grass-500/50 focus:ring-2 focus:ring-grass-500/20 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="email" value={settings.email} onChange={(e) => updateSetting('email', e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-grass-500/50 focus:ring-2 focus:ring-grass-500/20 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Change Password</label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type={showPassword ? 'text' : 'password'} placeholder="Enter new password" className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-grass-500/50 focus:ring-2 focus:ring-grass-500/20 transition-all" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                    {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Notification Settings */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card">
            <div className="flex items-center space-x-3 mb-6">
              <FaBell className="w-6 h-6 text-primary-400" />
              <h3 className="text-xl font-semibold text-white">Notifications</h3>
            </div>
            <div className="space-y-4">
              {[
                { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive updates via email' },
                { key: 'pushNotifications', label: 'Push Notifications', description: 'Browser notifications' },
                { key: 'earningsAlerts', label: 'Earnings Alerts', description: 'Notify when earnings reach milestones' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">{item.label}</div>
                    <div className="text-gray-400 text-sm">{item.description}</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={settings[item.key as keyof typeof settings] as boolean} onChange={(e) => updateSetting(item.key, e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-grass-500"></div>
                  </label>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Bandwidth Settings */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="card">
            <div className="flex items-center space-x-3 mb-6">
              <FaWifi className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Bandwidth</h3>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Maximum Bandwidth Usage: {settings.maxBandwidth}%</label>
                <input type="range" min="10" max="100" value={settings.maxBandwidth} onChange={(e) => updateSetting('maxBandwidth', parseInt(e.target.value))} className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider" />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>10%</span>
                  <span>100%</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Minimum Quality Threshold: {settings.minQuality}%</label>
                <input type="range" min="50" max="100" value={settings.minQuality} onChange={(e) => updateSetting('minQuality', parseInt(e.target.value))} className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider" />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Auto Optimize</div>
                  <div className="text-gray-400 text-sm">Automatically adjust settings for best performance</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={settings.autoOptimize} onChange={(e) => updateSetting('autoOptimize', e.target.checked)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-grass-500"></div>
                </label>
              </div>
            </div>
          </motion.div>
          {/* Security Settings */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card">
            <div className="flex items-center space-x-3 mb-6">
              <FaShieldAlt className="w-6 h-6 text-orange-400" />
              <h3 className="text-xl font-semibold text-white">Security</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Two-Factor Authentication</div>
                  <div className="text-gray-400 text-sm">Add an extra layer of security</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={settings.twoFactorAuth} onChange={(e) => updateSetting('twoFactorAuth', e.target.checked)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-grass-500"></div>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Session Timeout (minutes)</label>
                <select value={settings.sessionTimeout} onChange={(e) => updateSetting('sessionTimeout', parseInt(e.target.value))} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-grass-500/50 focus:ring-2 focus:ring-grass-500/20 transition-all">
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={60}>1 hour</option>
                  <option value={120}>2 hours</option>
                  <option value={0}>Never</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Data Usage */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <div className="flex items-center space-x-3 mb-6">
            <FaDownload className="w-6 h-6 text-grass-400" />
            <h3 className="text-xl font-semibold text-white">Data Usage</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-grass-500 to-grass-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaDownload className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">2.4 TB</div>
              <div className="text-gray-400 text-sm">Total Downloaded</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUpload className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">1.8 TB</div>
              <div className="text-gray-400 text-sm">Total Uploaded</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWifi className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div className="text-gray-400 text-sm">Avg. Quality</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
} 
"use client";
import { motion } from 'framer-motion';
import { FaBolt, FaWifi, FaDollarSign, FaShieldAlt, FaChartLine, FaUsers, FaArrowRight, FaCheck } from 'react-icons/fa';
import Link from 'next/link';

export default function LandingPage() {
  const features = [
    {
      icon: FaWifi,
      title: "Share Bandwidth",
      description: "Earn money by sharing your unused internet bandwidth securely"
    },
    {
      icon: FaDollarSign,
      title: "Earn Rewards",
      description: "Get paid for every GB of bandwidth you share with our network"
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Private",
      description: "Your data stays private with enterprise-grade encryption"
    },
    {
      icon: FaChartLine,
      title: "Real-time Analytics",
      description: "Track your earnings and network performance in real-time"
    }
  ];

  const benefits = [
    "Earn passive income from your internet connection",
    "No technical knowledge required",
    "Automatic optimization for best performance",
    "Refer friends and earn 10% commission forever",
    "24/7 support and monitoring",
    "Instant payments and withdrawals"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Navigation */}
      <nav className="glass-effect border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-grass-500 to-primary-500 rounded-xl flex items-center justify-center">
              <FaBolt className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold gradient-text">SDAGP</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/register" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Turn Your
              <span className="gradient-text"> Internet </span>
              Into Income
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              SDAGP lets you earn money by securely sharing your unused bandwidth. 
              Join thousands of users already earning passive income from their internet connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <span>Start Earning Today</span>
                <FaArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/login" className="btn-secondary text-lg px-8 py-4">
                Sign In to Dashboard
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          
            {[
              { number: "We’re currently in development. You can explore the UI/UX design", label: "Details entered aren't stored anywhere. Signup/Signin numbers are hardcoded demos. Backend is still in development." },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Simple steps to start earning from your bandwidth</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center hover:scale-105 transition-transform duration-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-grass-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose SDAGP?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaCheck className="w-5 h-5 text-grass-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/register" className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 w-fit">
                  <span>Join Now</span>
                  <FaArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="card p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-grass-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FaUsers className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Referral Program</h3>
                  <p className="text-gray-400 mb-6">
                    Invite friends and earn 10% of their earnings forever. 
                    Build your network and increase your passive income.
                  </p>
                  <div className="text-3xl font-bold gradient-text mb-4">10% Commission</div>
                  <Link href="/register" className="btn-secondary">
                    Get Your Referral Link
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of users already earning passive income from their internet connection. 
              It only takes a few minutes to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <span>Create Free Account</span>
                <FaArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/login" className="btn-secondary text-lg px-8 py-4">
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-effect border-t border-white/10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-grass-500 to-primary-500 rounded-lg flex items-center justify-center">
                <FaBolt className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">SDAGP</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/login" className="hover:text-white transition-colors">Sign In</Link>
              <Link href="/register" className="hover:text-white transition-colors">Register</Link>
              <span>© 2025 SDAGP. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

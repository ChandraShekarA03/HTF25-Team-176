import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/HalloweenTheme.css';
import '../styles/WebAnimation.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors
    setSuccess(''); // Clear previous success

    // Basic validation
    if (!email || !password) {
      setError('🎃 Oops! Your magical potion is missing some ingredients!');
      return;
    }

    // --- Authentication Logic Goes Here ---
    console.log('Casting login spell with:', { email });

    // Simulate successful login
    setSuccess('🧙‍♂️ Welcome back to the haunted marketplace! Your spells await! ✨');
    
    // Clear form
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#2E003E] to-[#3D0052]">
      {/* Animated Background */}
      <div className="spooky-bg" />
      <div className="fog-overlay" />

      {/* Spider Webs */}
      <div className="web-container web-left">
        <svg className="web-svg" viewBox="0 0 100 100">
          <path d="M0,0 L100,100 M0,20 L80,100 M0,40 L60,100 M0,60 L40,100 M0,80 L20,100
                  M20,0 L100,80 M40,0 L100,60 M60,0 L100,40 M80,0 L100,20" />
          <motion.path
            d="M50,50 C20,20 80,20 50,50 C20,80 80,80 50,50"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </svg>
        <motion.div
          className="spider-on-web"
          style={{ left: '50%', top: '30%' }}
          animate={{
            y: [0, 30, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🕷️
        </motion.div>
      </div>

      <div className="web-container web-right">
        <svg className="web-svg" viewBox="0 0 100 100">
          <path d="M100,0 L0,100 M100,20 L20,100 M100,40 L40,100 M100,60 L60,100 M100,80 L80,100
                  M80,0 L0,80 M60,0 L0,60 M40,0 L0,40 M20,0 L0,20" />
          <motion.path
            d="M50,50 C80,20 20,20 50,50 C80,80 20,80 50,50"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </svg>
        <motion.div
          className="spider-on-web"
          style={{ right: '50%', top: '70%' }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🕷️
        </motion.div>
      </div>

      <motion.div
        className="max-w-md w-full space-y-8 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center relative">
          <motion.h2
            className="mt-6 text-[#E85D04] text-4xl font-bold relative z-10"
            style={{ fontFamily: 'Lobster Two, cursive' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              bounce: 0.5
            }}
            whileHover={{
              textShadow: "0 0 8px rgba(232, 93, 4, 0.6)",
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            Welcome Back, Spellcaster!
          </motion.h2>
          <motion.p
            className="mt-2 text-[#FFD60A]"
            style={{ fontFamily: 'Gloria Hallelujah, cursive' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            whileHover={{
              color: "#E85D04",
              transition: { duration: 0.2 }
            }}
          >
            Enter your magical credentials
          </motion.p>
          {/* Floating Cauldron */}
          <motion.div
            className="absolute -top-10 -right-10 text-4xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🧪
          </motion.div>
        </div>

        <motion.form
          className="mt-8 space-y-6 relative bg-[#2E003E]/50 p-8 rounded-xl backdrop-blur-sm border-2 border-[#E85D04]/20"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <AnimatePresence>
            {error && (
              <motion.div
                className="p-4 rounded-lg bg-[#2E003E] border-2 border-[#E85D04] text-[#FFD60A]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {error}
              </motion.div>
            )}
            {success && (
              <motion.div
                className="p-4 rounded-lg bg-[#2E003E] border-2 border-[#FFD60A] text-[#FFD60A]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {success}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="rounded-md -space-y-px">
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              className="mb-4"
            >
              <motion.label 
                htmlFor="email" 
                className="block text-[#FFF5E1] mb-2"
                whileHover={{
                  color: "#FFD60A",
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                Magic Email 📜
              </motion.label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border-2 border-[#E85D04] bg-[#2E003E] text-[#FFF5E1] focus:outline-none focus:ring-[#FFD60A] focus:border-[#FFD60A] focus:z-10 transition-all duration-300"
                placeholder="wizard@magic.realm"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              className="mb-4"
            >
              <motion.label 
                htmlFor="password" 
                className="block text-[#FFF5E1] mb-2"
                whileHover={{
                  color: "#FFD60A",
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                Secret Spell 🔮
              </motion.label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border-2 border-[#E85D04] bg-[#2E003E] text-[#FFF5E1] focus:outline-none focus:ring-[#FFD60A] focus:border-[#FFD60A] focus:z-10 transition-all duration-300"
                placeholder="Enter your secret spell"
              />
            </motion.div>
          </div>

          <motion.button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border-2 border-transparent text-lg font-bold rounded-lg text-[#2E003E] bg-gradient-to-r from-[#E85D04] to-[#FFD60A] hover:from-[#FFD60A] hover:to-[#E85D04] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E85D04] transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(232, 93, 4, 0.5)",
              transition: {
                duration: 0.3,
                yoyo: Infinity
              }
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: ["0 0 0px rgba(232, 93, 4, 0)", "0 0 20px rgba(232, 93, 4, 0.3)", "0 0 0px rgba(232, 93, 4, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="mr-2">🔮</span>
            CAST SPELL
            <span className="ml-2">✨</span>
          </motion.button>

          <motion.div 
            className="text-center mt-4"
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              to="/signup"
              className="text-[#E85D04] hover:text-[#FFD60A] transition-colors duration-300 inline-flex items-center"
            >
              <motion.span
                animate={{
                  x: [0, -3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🎪
              </motion.span>
              <span className="mx-2">New to our realm? Sign up for magic!</span>
              <motion.span
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ✨
              </motion.span>
            </Link>
          </motion.div>
        </motion.form>

        {/* Floating Bats */}
        <motion.div
          className="fixed bottom-10 right-10 text-4xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🦇
        </motion.div>
        <motion.div
          className="fixed top-10 left-10 text-4xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🦇
        </motion.div>
      </motion.div>
    </div>
    );
  }
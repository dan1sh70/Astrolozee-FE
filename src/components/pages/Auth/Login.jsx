import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login attempted with:', { email, password });
  };

  const handleGoogleLogin = () => {
    console.log('Google login initiated');
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#E8D5C4' }}>
      {/* Background decorative elements */}
      
      {/* Top left sunburst/rays */}
      <div className="absolute top-0 left-0">
        <svg width="300" height="300" viewBox="0 0 300 300" className="opacity-50">
          <g transform="translate(0, 0)">
            {/* Sun circle */}
            <circle cx="0" cy="0" r="30" fill="#C9A876" opacity="0.5" />
            {/* Rays */}
            {[...Array(36)].map((_, i) => (
              <line
                key={i}
                x1="30"
                y1="0"
                x2="150"
                y2="0"
                transform={`rotate(${i * 10})`}
                stroke="#C9A876"
                strokeWidth="1.5"
                opacity="0.4"
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Top center star sparkle */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
        <svg width="30" height="30" viewBox="0 0 30 30">
          <path
            d="M15,0 L16.5,11 L22,5 L17,13 L28,15 L17,17 L22,25 L16.5,19 L15,30 L13.5,19 L8,25 L13,17 L2,15 L13,13 L8,5 L13.5,11 Z"
            fill="#C9A876"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Bottom right sunburst */}
      <div className="absolute bottom-0 right-0">
        <svg width="350" height="350" viewBox="0 0 350 350" className="opacity-40">
          <g transform="translate(350, 350)">
            <circle cx="0" cy="0" r="35" fill="#C9A876" opacity="0.5" />
            {[...Array(36)].map((_, i) => (
              <line
                key={i}
                x1="-35"
                y1="0"
                x2="-180"
                y2="0"
                transform={`rotate(${i * 10})`}
                stroke="#C9A876"
                strokeWidth="1.5"
                opacity="0.4"
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Left side - "LOGIN TO YOUR ADVENTURE!" text */}
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <h1 className="text-6xl font-black leading-tight">
          <div>LOGIN TO YOUR</div>
          <div className="text-orange-500">ADVENTURE!</div>
        </h1>
      </div>

      {/* Center - Login form card */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div 
          className="w-full max-w-md p-8 rounded-3xl shadow-2xl relative"
          style={{ backgroundColor: '#F4E4D0' }}
        >
          {/* Form header */}
          <h2 className="text-2xl font-bold text-center mb-2">Log In</h2>
          <p className="text-center text-gray-600 text-sm mb-6">
            Create an account to enjoy all our services
          </p>

          {/* Input fields */}
          <div className="space-y-4">
            {/* Email field */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 rounded-xl border-0 outline-none text-sm"
                style={{ backgroundColor: '#FAF5ED' }}
              />
            </div>

            {/* Password field */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3 rounded-xl border-0 outline-none text-sm"
                style={{ backgroundColor: '#FAF5ED' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Login button */}
            <button
              onClick={handleSubmit}
              className="w-full py-3 rounded-xl text-white font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#EA8A3C' }}
            >
              Login
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center mt-4 text-gray-600 text-sm">
            Not Registered?{' '}
            <a href="#" className="underline font-medium">
              SignUp
            </a>
          </p>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1" style={{ height: '1px', backgroundColor: '#C4B5A0' }}></div>
            <span className="px-3 text-gray-500 text-sm">Or</span>
            <div className="flex-1" style={{ height: '1px', backgroundColor: '#C4B5A0' }}></div>
          </div>

          {/* Social login */}
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-3">Login with :</p>
            <button
              onClick={handleGoogleLogin}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile version of adventure text - at top */}
      <div className="lg:hidden absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-3xl font-black">
          <div>LOGIN TO YOUR</div>
          <div className="text-orange-500">ADVENTURE!</div>
        </h1>
      </div>
    </div>
  );
}
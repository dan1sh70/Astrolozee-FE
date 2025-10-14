import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import useAuthStore from '../../../stores/useAuthStore';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(''); // Clear error on input change
  };

  // Regular email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`https://astrolozee-backend.vercel.app/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Important for cookies
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Successfully logged in
        console.log('Login successful:', data);
        setUser(data.user); 
        // Redirect to dashboard or home
        window.location.href = '/';
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Google login success handler
  const handleGoogleSuccess = async (credentialResponse) => {
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Important for cookies
        body: JSON.stringify({ 
          credential: credentialResponse.credential 
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Google login successful:', data);
        
        // Check if profile is complete
        if (!data.isProfileComplete) {
          // Redirect to profile completion page
          setUser(data.user); 
          window.location.href = '/complete-profile';
        } else {
          // Redirect to dashboard
          setUser(data.user); 
          window.location.href = '/';
        }
      } else {
        setError(data.message || 'Google login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Google login error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Google login error handler
  const handleGoogleError = () => {
    setError('Google login failed. Please try again.');
  };

  const InputField = ({ icon: Icon, type = "text", placeholder, value, onChange }) => (
    <div className="flex items-center bg-white/80 backdrop-blur-sm border border-amber-200 rounded-lg px-4 py-3 shadow-sm">
      <Icon className="w-5 h-5 text-amber-600 mr-3" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
      />
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      backgroundImage: 'url("./bgimg1.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/20 to-yellow-100/30"></div>

      <div className="relative z-10 min-h-screen flex items-center p-6">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Section */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
              WELCOME BACK
            </h1>
            <h2 className="text-6xl lg:text-7xl font-bold text-amber-500 leading-tight mt-2">
              LOGIN NOW!
            </h2>
          </div>

          {/* Right Section - Login Form */}
          <div className="w-full max-w-lg ml-8 bg-amber-100/60 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-amber-200/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Login</h3>
              <p className="text-gray-600">Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Error Message */}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Email */}
              <InputField
                icon={Mail}
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
              />

              {/* Password */}
              <InputField
                icon={Lock}
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(value) => handleInputChange('password', value)}
              />

              {/* Login Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-full text-lg transition-colors duration-200 shadow-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Loading...' : 'Login'}
              </button>

              <div className="text-center mt-4">
                <p className="text-gray-600">
                  New here?
                  <button 
                    type="button"
                    onClick={() => window.location.href = '/signup'}
                    className="text-amber-600 hover:text-amber-700 font-semibold ml-1 underline"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </form>

            {/* Divider with OR */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-3 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google Login */}
            <div className="flex flex-col items-center">
              <span className="text-gray-600 mb-3">Login with:</span>
              
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap={false}
                shape="pill"
                size="large"
                theme="outline"
                text="continue_with"
                width="280"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
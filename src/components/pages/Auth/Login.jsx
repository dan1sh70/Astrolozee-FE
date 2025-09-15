import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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

            <div className="space-y-4">
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
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-full text-lg transition-colors duration-200 shadow-lg mt-6">
                Login
              </button>

               <div className="text-center mt-4">
                <p className="text-gray-600">
                  New here?
                  <button className="text-amber-600 hover:text-amber-700 font-semibold ml-1 underline">
                    Sign Up
                  </button>
                </p>
              </div>

              {/* Divider with OR */}
              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-3 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Google Login */}
              <div className="flex items-center justify-center">
  <span className="text-gray-600 mr-3">Login with :</span>

  <button className="flex items-center space-x-2 px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
    {/* Google G Icon */}
    <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
      <path fill="#4285F4" d="M533.5 278.4c0-18.5-1.5-37-4.6-54.9H272v103.9h146.9c-6.4 34.8-25.5 64.2-54.3 83.9l87.9 68.2c51.4-47.4 81-117.3 81-201.1z"/>
      <path fill="#34A853" d="M272 544.3c73.6 0 135.4-24.4 180.6-66.2l-87.9-68.2c-24.4 16.6-55.6 26.1-92.7 26.1-71 0-131.2-47.9-152.8-112.4l-90.3 69.4C72.9 475.8 166.5 544.3 272 544.3z"/>
      <path fill="#FBBC05" d="M119.2 323.6c-11.3-33.8-11.3-70.6 0-104.4L28.9 149.8c-37.5 74.8-37.5 164 0 238.8l90.3-65z"/>
      <path fill="#EA4335" d="M272 107.7c39.9-.6 78.4 14.4 108.1 41.7l80.2-80.2C407.3 24.1 344.7-.3 272 0 166.5 0 72.9 68.5 28.9 171.5l90.3 69.4C140.8 155.6 201 107.7 272 107.7z"/>
    </svg>
  </button>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { User, Calendar, MapPin, Heart, Target, Star, ChevronDown } from 'lucide-react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dateOfBirth: '',
    timeOfBirth: '',
    currentLocation: '',
    placeOfBirth: '',
    maritalStatus: '',
    religion: '',
    focusArea: '',
    purposeOfVisit: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const SelectField = ({ icon: Icon, placeholder, value, onChange, options }) => (
    <div className="relative">
      <div className="flex items-center bg-white/80 backdrop-blur-sm border border-amber-200 rounded-lg px-4 py-3 shadow-sm">
        <Icon className="w-5 h-5 text-amber-600 mr-3" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-700 appearance-none"
        >
          <option value="">{placeholder}</option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );

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
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/20 to-yellow-100/30"></div>

      <div className="relative z-10 min-h-screen flex items-center p-6">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Section */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
              SIGN UP TO YOUR
            </h1>
            <h2 className="text-6xl lg:text-7xl font-bold text-amber-500 leading-tight mt-2">
              ADVENTURE!
            </h2>
          </div>

          {/* Right Section - Form */}
          <div className="w-full max-w-lg ml-8 bg-amber-100/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-amber-200/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sign Up</h3>
              <p className="text-gray-600">Create an account to enjoy all our services</p>
            </div>

            <div className="space-y-4">
              {/* Name and Gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  icon={User}
                  placeholder="Name"
                  value={formData.name}
                  onChange={(value) => handleInputChange('name', value)}
                />
                <SelectField
                  icon={User}
                  placeholder="Gender"
                  value={formData.gender}
                  onChange={(value) => handleInputChange('gender', value)}
                  options={['Male', 'Female', 'Other','None']}
                />
              </div>

              {/* Date and Time of Birth */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  icon={Calendar}
                  type="date"
                  placeholder="Date of Birth"
                  value={formData.dateOfBirth}
                  onChange={(value) => handleInputChange('dateOfBirth', value)}
                />
                <InputField
                  icon={Calendar}
                  type="time"
                  placeholder="Time of Birth"
                  value={formData.timeOfBirth}
                  onChange={(value) => handleInputChange('timeOfBirth', value)}
                />
              </div>

              {/* Location Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  icon={MapPin}
                  placeholder="Current Location"
                  value={formData.currentLocation}
                  onChange={(value) => handleInputChange('currentLocation', value)}
                />
                <InputField
                  icon={MapPin}
                  placeholder="Place of Birth"
                  value={formData.placeOfBirth}
                  onChange={(value) => handleInputChange('placeOfBirth', value)}
                />
              </div>

              {/* Status Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectField
                  icon={Heart}
                  placeholder="Marital status"
                  value={formData.maritalStatus}
                  onChange={(value) => handleInputChange('maritalStatus', value)}
                  options={['Single', 'In a relationship', 'Engaged', 'Married', 'Divorced','Separated', 'Widowed']}
                />
                <SelectField
                  icon={Star}
                  placeholder="Religions"
                  value={formData.religion}
                  onChange={(value) => handleInputChange('religion', value)}
                  options={['Hindu', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Non-Religious']}
                />
              </div>

              {/* Focus and Purpose */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectField
                  icon={Target}
                  placeholder="Focus Area"
                  value={formData.focusArea}
                  onChange={(value) => handleInputChange('focusArea', value)}
                  options={['Relationships','Career/Job','Business/Finance', 'Health & Wellness','Fmily & Children', 'Spiritual Growth', 'Education','Foreign Settlement or Travel' ,'Life Purpose or Past life','Marital Status']}
                />
                <SelectField
                  icon={User}
                  placeholder="Purpose of visit"
                  value={formData.purposeOfVisit}
                  onChange={(value) => handleInputChange('purposeOfVisit', value)}
                  options={['Love', 'Marriage', 'Career', 'Health', 'Wealth', 'Peace of mind','Family', 'Other']}
                />
              </div>

              {/* Sign Up Button */}
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-full text-lg transition-colors duration-200 shadow-lg mt-8">
                Sign up
              </button>

              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Already Registered? 
                  <button className="text-amber-600 hover:text-amber-700 font-semibold ml-1 underline">
                    Login
                  </button>
                </p>
              </div>

              {/* Google Login */}
              <div className="flex items-center justify-center mt-6 pt-6 border-t border-amber-200">
                <span className="text-gray-600 mr-3">Login with :</span>
                <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

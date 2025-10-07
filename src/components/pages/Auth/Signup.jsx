import React, { useState } from 'react';
import { User, Calendar, MapPin, Heart, Target, Star, ChevronDown, Mail, Lock } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSignUp = async () => {
    const { name, email, password, gender, dateOfBirth, timeOfBirth, currentLocation, 
            placeOfBirth, maritalStatus, religion, focusArea, purposeOfVisit } = formData;

    if (!name || !email || !password || !gender || !dateOfBirth || !timeOfBirth || 
        !currentLocation || !placeOfBirth || !maritalStatus || !religion || 
        !focusArea || !purposeOfVisit) {
      setError('Please fill all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`http://localhost:5000/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          name,
          email,
          password,
          gender: gender.toLowerCase(),
          dateOfBirth,
          timeOfBirth,
          currentLocation,
          placeOfBirth,
          maritalStatus: maritalStatus.toLowerCase().replace(/\s+/g, ' '),
          religion: religion.toLowerCase(),
          focusArea: [focusArea.toLowerCase()],
          purposeOfVisit: purposeOfVisit.toLowerCase()
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data);
        window.location.href = '/';
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ 
          credential: credentialResponse.credential 
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Google signup successful:', data);
        
        if (!data.isProfileComplete) {
          window.location.href = '/complete-profile';
        } else {
          window.location.href = '/';
        }
      } else {
        setError(data.message || 'Google signup failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Google signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleError = () => {
    setError('Google signup failed. Please try again.');
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
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/20 to-yellow-100/30"></div>

      <div className="relative z-10 min-h-screen flex items-center p-6">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex-1 max-w-2xl">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
              SIGN UP TO YOUR
            </h1>
            <h2 className="text-6xl lg:text-7xl font-bold text-amber-500 leading-tight mt-2">
              ADVENTURE!
            </h2>
          </div>

          <div className="w-full max-w-lg ml-8 bg-amber-100/60 backdrop-blur-md rounded-3xl p-4 shadow-xl border border-amber-200/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sign Up</h3>
              <p className="text-gray-600">Create an account to enjoy all our services</p>
            </div>

            <div className="space-y-4">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <InputField
                icon={User}
                placeholder="Full Name"
                value={formData.name}
                onChange={(value) => handleInputChange('name', value)}
              />

              <InputField
                icon={Mail}
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
              />

              <InputField
                icon={Lock}
                type="password"
                placeholder="Password (min 8 characters)"
                value={formData.password}
                onChange={(value) => handleInputChange('password', value)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectField
                  icon={User}
                  placeholder="Gender"
                  value={formData.gender}
                  onChange={(value) => handleInputChange('gender', value)}
                  options={['Male', 'Female', 'Other','None']}
                />
                <SelectField
                  icon={Heart}
                  placeholder="Marital status"
                  value={formData.maritalStatus}
                  onChange={(value) => handleInputChange('maritalStatus', value)}
                  options={['Single', 'Married', 'Divorced','Separated', 'Widowed']}
                />
              </div>

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

              <SelectField
                icon={Star}
                placeholder="Religion"
                value={formData.religion}
                onChange={(value) => handleInputChange('religion', value)}
                options={['Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'None']}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectField
                  icon={Target}
                  placeholder="Focus Area"
                  value={formData.focusArea}
                  onChange={(value) => handleInputChange('focusArea', value)}
                  options={['Relationship','Career','Business', 'Health & Fitness','Family & Children', 'Spiritual Growth', 'Foreign Settlement' ,'Life Purpose','Marital Status']}
                />
                <SelectField
                  icon={User}
                  placeholder="Purpose of visit"
                  value={formData.purposeOfVisit}
                  onChange={(value) => handleInputChange('purposeOfVisit', value)}
                  options={['Love', 'Marriage', 'Career', 'Health', 'Wealth', 'Peace of Mind','Family', 'Other']}
                />
              </div>

              <button 
                onClick={handleSignUp}
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-full text-lg transition-colors duration-200 shadow-lg mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Account...' : 'Sign up'}
              </button>

              <div className="text-center mt-2">
                <p className="text-gray-600">
                  Already Registered? 
                  <button 
                    onClick={() => window.location.href = '/login'}
                    className="text-amber-600 hover:text-amber-700 font-semibold ml-1 underline"
                  >
                    Login
                  </button>
                </p>
              </div>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-3 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="flex flex-col items-center mt-2">
                <span className="text-gray-600 mb-3">Sign up with:</span>
                
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  useOneTap={false}
                  shape="pill"
                  size="large"
                  theme="outline"
                  text="signup_with"
                  width="280"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
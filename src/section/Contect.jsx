import React from 'react';
import { useState } from 'react';
import { Mail, User, MessageCircle, Send, CheckCircle, Sparkles, Zap } from 'lucide-react';
import { WavyBackground } from '../Components/WavyBackgraund';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  console.log(formData);
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call with loading animation
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 4000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8">
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-green-500/20 rounded-2xl p-8 text-center overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-2 -left-2 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400/10 rounded-full blur-lg animate-bounce animation-delay-2000"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6 animate-bounce">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Message Sent! 🚀
            </h2>
            <p className="text-gray-300 text-lg">
              Thanks for reaching out! I'll get back to you faster than you can say "async/await" 😄
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className=' relative flex items-center  section-spacing justify-center bg-midnight  '>
      <WavyBackground className={" "}>
    <div className="max-w-2xl mx-auto p-8">
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl animate-ping animation-delay-2000"></div>
        </div>

        {/* Header with cool gradient */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 p-8 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-3">
              <Sparkles className="w-8 h-8 text-cyan-300 animate-spin" />
              <h2 className="text-3xl font-bold">Let's Create Something Amazing</h2>
            </div>
            <p className="text-blue-100 text-lg">
              Ready to bring your ideas to life? Drop me a message and let's start the magic! ✨
            </p>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-4 right-4 w-12 h-12 border border-white/20 rounded-full animate-spin animation-duration-3000"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full animate-bounce animation-delay-1000"></div>
        </div>
        
        <div className="relative p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2 transition-colors duration-200">
                <User className={`inline w-4 h-4 mr-2 transition-all duration-300 ${focusedField === 'name' ? 'text-blue-400 scale-110' : 'text-gray-400'}`} />
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 transform hover:scale-105 focus:scale-105 ${
                    errors.name ? 'border-red-500 bg-red-900/20' : 'border-gray-600 hover:border-gray-500'
                  }`}
                  placeholder="Enter your awesome name"
                />
                {focusedField === 'name' && (
                  <div className="absolute -top-1 -left-1 w-full h-full border-2 border-blue-400/30 rounded-lg animate-pulse pointer-events-none"></div>
                )}
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-400 animate-shake">{errors.name}</p>
              )}
            </div>
            
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                <Mail className={`inline w-4 h-4 mr-2 transition-all duration-300 ${focusedField === 'email' ? 'text-blue-400 scale-110' : 'text-gray-400'}`} />
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 transform hover:scale-105 focus:scale-105 ${
                    errors.email ? 'border-red-500 bg-red-900/20' : 'border-gray-600 hover:border-gray-500'
                  }`}
                  placeholder="your.email@domain.com"
                />
                {focusedField === 'email' && (
                  <div className="absolute -top-1 -left-1 w-full h-full border-2 border-blue-400/30 rounded-lg animate-pulse pointer-events-none"></div>
                )}
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-400 animate-shake">{errors.email}</p>
              )}
            </div>
          </div>
          
          <div className="group">
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
              <MessageCircle className={`inline w-4 h-4 mr-2 transition-all duration-300 ${focusedField === 'subject' ? 'text-blue-400 scale-110' : 'text-gray-400'}`} />
              Subject
            </label>
            <div className="relative">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                onFocus={() => handleFocus('subject')}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 transform hover:scale-105 focus:scale-105 ${
                  errors.subject ? 'border-red-500 bg-red-900/20' : 'border-gray-600 hover:border-gray-500'
                }`}
                placeholder="What's cooking in your mind? 🤔"
              />
              {focusedField === 'subject' && (
                <div className="absolute -top-1 -left-1 w-full h-full border-2 border-blue-400/30 rounded-lg animate-pulse pointer-events-none"></div>
              )}
            </div>
            {errors.subject && (
              <p className="mt-1 text-sm text-red-400 animate-shake">{errors.subject}</p>
            )}
          </div>
          
          <div className="group">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
              <Zap className={`inline w-4 h-4 mr-2 transition-all duration-300 ${focusedField === 'message' ? 'text-blue-400 scale-110' : 'text-gray-400'}`} />
              Your Epic Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 transform hover:scale-105 focus:scale-105 resize-vertical ${
                  errors.message ? 'border-red-500 bg-red-900/20' : 'border-gray-600 hover:border-gray-500'
                }`}
                placeholder="Tell me about your amazing project, wild ideas, or just drop a friendly hello! 🚀"
              />
              {focusedField === 'message' && (
                <div className="absolute -top-1 -left-1 w-full h-full border-2 border-blue-400/30 rounded-lg animate-pulse pointer-events-none"></div>
              )}
            </div>
            {errors.message && (
              <p className="mt-1 text-sm text-red-400 animate-shake">{errors.message}</p>
            )}
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-500">
                {formData.message.length}/500 characters
              </p>
              <div className={`h-1 bg-gray-700 rounded-full w-24 overflow-hidden ${formData.message.length > 0 ? 'animate-pulse' : ''}`}>
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                  style={{ width: `${Math.min((formData.message.length / 500) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className={`relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-semibold py-4 px-8 rounded-lg focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden group ${
              isLoading ? 'scale-95 cursor-not-allowed' : 'hover:-translate-y-1'
            }`}
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Loading animation */}
            {isLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse transform -skew-x-12 translate-x-full animation-duration-2000"></div>
              </div>
            )}
            
            <div className="relative flex items-center justify-center space-x-3">
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending Magic...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  <span>Send Message</span>
                  <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                </>
              )}
            </div>
          </button>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-duration-2000 {
          animation-duration: 2s;
        }
        
        .animation-duration-3000 {
          animation-duration: 3s;
        }
      `}</style>
    </div>
    </WavyBackground>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary"></div>
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-primary"></div> */}
    </section>
  );
}
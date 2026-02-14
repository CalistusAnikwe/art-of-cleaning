"use client";

import React, { useState } from 'react';
import { client } from '@/sanity/lib/client';
import { Send, Phone, ShieldCheck } from 'lucide-react';

// Note: I've moved the data fetching logic to be handled via props or a separate 
// server component wrapper, but for this "use client" version, we use the values.

export default function ContactPage({ data }: { data: any }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const hours = data?.hours || [
    { days: 'Mon — Fri', time: '8am – 8pm' },
    { days: 'Saturday', time: '9am – 6pm' },
    { days: 'Sunday', time: 'Closed' },
  ];

  // Function to handle Email App opening
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pickup Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    // Redirects to user's email app
    window.location.href = `mailto:calistusmine@gmail.com?subject=${subject}&body=${body}`;
  };

  // Function to handle Phone Dialer opening
  const handleCallRequest = () => {
    window.location.href = `tel:09064466986`;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            {data?.title || "Contact Our Concierge"}
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            {data?.subtitle || "Experience the pinnacle of garment care. Reach out to our specialists today."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Map & Info */}
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-sm border border-slate-200 bg-slate-200">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127094.61448869106!2d6.980665!3d6.143004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043936082260655%3A0xc6a80479f6486008!2sOnitsha%2C%20Anambra!5e0!3m2!1sen!2sng!4v1700000000000"
                className="absolute inset-0 w-full h-full grayscale opacity-80"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Our Flagship Location</h3>
                <p className="font-bold text-slate-900">{data?.address?.street || "742 Park Avenue South"}</p>
                <p className="text-slate-500">{data?.address?.cityStateZip || "New York, NY 10021"}</p>
              </div>
              <div>
                <h3 className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Concierge Hours</h3>
                <div className="space-y-2">
                  {hours.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="font-medium text-slate-700">{item.days}</span>
                      <span className="text-slate-500">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h2>
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="email@example.com"
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea 
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can our concierge assist you today?"
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-100">
                <span>Send Message via Email</span>
                <Send size={18} />
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
                <div className="relative flex justify-center text-xs uppercase font-bold text-slate-400 bg-white px-2">OR</div>
              </div>

              {/* Functional Phone Button */}
              <button 
                type="button"
                onClick={handleCallRequest}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Phone size={18} />
                <span>Call 09064466986</span>
              </button>

              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                <ShieldCheck className="text-blue-600 shrink-0" />
                <p className="text-xs text-blue-900 leading-tight">
                  Priority member line: <span className="font-bold">{data?.priorityPhone || "09064466986"}</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
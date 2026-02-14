"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, Leaf, Zap } from 'lucide-react';
import urlFor from '@/sanity/lib/imageBuilder';

export default function SchedulePage({ data }: { data: any }) {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  // Sample data fallback if Sanity is empty
  const items = data?.services || [
    { name: 'Couture Care', price: 25.0, description: 'Hand-finished treatment for designer pieces.' },
    { name: 'Executive Shirts', price: 8.0, description: 'Crisp, professional press with starch options.' },
    { name: 'Household Linens', price: 35.0, description: 'Delicate care for premium home fabrics.' },
    { name: 'Full Suit Tailoring', price: 45.0, description: 'Deep cleaning and bespoke steam pressing.' },
  ];

  const subtotal = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  const tax = subtotal * (data?.fees?.taxPercentage / 100 || 0.0825);
  const total = subtotal + tax;

  const toggleItem = (item: any) => {
    if (selectedItems.find(i => i.name === item.name)) {
      setSelectedItems(selectedItems.filter(i => i.name !== item.name));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{data?.title || "Schedule a Luxury Pickup"}</h1>
          <p className="text-slate-500">Entrust your garments to our master artisans. Your concierge experience starts here.</p>
        </div>

        {/* Progress Tracker */}
        {/* <div className="bg-white p-6 rounded-2xl mb-12 border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Step 1 of 3</span>
            <h2 className="text-xl font-bold text-slate-800">Select Services</h2>
          </div>
          <div className="hidden md:block w-1/2 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-blue-600 rounded-full" />
          </div>
          <span className="text-slate-400 text-sm font-medium">Next: Schedule Pickup</span>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Selection Area */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">1</span>
              What items can we care for today?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item: any) => {
                const isSelected = selectedItems.find(i => i.name === item.name);
                return (
                  <div 
                    key={item.name}
                    className={`relative bg-white rounded-3xl overflow-hidden border-2 transition-all cursor-pointer hover:shadow-lg ${isSelected ? 'border-blue-600 ring-4 ring-blue-50' : 'border-slate-100'}`}
                    onClick={() => toggleItem(item)}
                  >
                    <div className="relative h-48 bg-slate-200">
                      {item.image && (
                        <Image src={urlFor(item.image).url()} alt={item.name} fill className="object-cover" />
                      )}
                      {isSelected && <CheckCircle2 className="absolute top-4 right-4 text-blue-600 fill-white" size={28} />}
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-slate-900 mb-2">{item.name}</h4>
                      <p className="text-slate-500 text-sm mb-6 leading-relaxed">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-900">From ${item.price.toFixed(2)}</span>
                        <button className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>
                          {isSelected ? 'Added' : 'Add'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex items-center justify-between pt-8">
              <Link href="/" className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800">
                <ArrowLeft size={20} /> Back to Home
              </Link>
              <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all">
                Continue to Schedule <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Sticky Order Summary Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-8">
              <h3 className="text-xl font-bold text-slate-900">Order Summary</h3>
              
              <div className="space-y-4">
                {selectedItems.length === 0 ? (
                  <p className="text-slate-400 text-sm italic">No items selected yet...</p>
                ) : (
                  selectedItems.map(item => (
                    <div key={item.name} className="flex justify-between text-sm">
                      <div>
                        <p className="font-bold text-slate-800">{item.name}</p>
                        <p className="text-slate-400 text-xs">1 item</p>
                      </div>
                      <span className="font-bold text-slate-800">${item.price.toFixed(2)}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="pt-6 border-t border-slate-50 space-y-3">
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Concierge Fee</span>
                  <span className="text-blue-600 font-medium italic">{data?.fees?.conciergeFee || "Complimentary"}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-4 text-xl font-bold text-slate-900">
                  <span>Total Estimate</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
                <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-blue-800 leading-tight">
                  Final pricing is confirmed upon item inspection by our master cleaners.
                </p>
              </div>

              <div className="flex justify-center gap-6 pt-4 grayscale opacity-30">
                <Shield size={24} />
                <Leaf size={24} />
                <Zap size={24} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
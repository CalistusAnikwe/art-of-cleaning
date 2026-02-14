import React from 'react';
import Link from 'next/link';
import { Layers, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ data }: { data: any }) {
  // Use data from Sanity or fall back to the image content provided
  const sections = data?.sections || [
    {
      title: 'Services',
      links: [
        { label: 'Dry Cleaning', href: '/services/dry-cleaning' },
        { label: 'Shirt Laundry', href: '/services/laundry' },
        // { label: 'Wash & Fold', href: '/services/wash-fold' },
        // { label: 'Bridal Couture', href: '/services/bridal' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Story', href: '/about' },
        { label: 'Sustainability', href: '/sustainability' },
        { label: 'Locations', href: '/locations' },
        { label: 'Careers', href: '/careers' },
      ]
    }
  ];

  const contact = data?.contactInfo || {
    phone: '(555) 123-4567',
    email: 'concierge@artofcleaning.com',
    location: 'Manhattan, NY'
  };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="text-blue-600" size={24} fill="currentColor" />
              <span className="font-bold text-lg text-gray-900">Art of Cleaning</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {data?.brandDescription || "Defining the standard of excellence in garment care since 1984. Traditional craft meets modern logistics."}
            </p>
          </div>

          {/* Dynamic Sections (Services & Company) */}
          {sections.map((section: any) => (
            <div key={section.title}>
              <h3 className="font-bold text-gray-900 mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link: any) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-blue-600 transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-600 cursor-pointer">
                <Phone size={16} className="text-blue-600" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-600 cursor-pointer">
                <Mail size={16} className="text-blue-600" />
                <span>{contact.email}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-blue-600" />
                <span>{contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 text-center">
          <p className="text-gray-300 text-xs tracking-wide">
            {data?.copyrightText || `© ${new Date().getFullYear()} Art of Cleaning. All rights reserved. Crafting quality, one garment at a time.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
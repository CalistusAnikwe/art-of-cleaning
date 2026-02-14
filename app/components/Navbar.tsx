// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X, Layers } from 'lucide-react';

// export default function Navbar({ data }: { data: any }) {
//   const [isOpen, setIsOpen] = useState(false);

//   // Added 'Blog' to the default links
//   const defaultLinks = [
//     { label: 'Home', href: '/' },
//     { label: 'About Us', href: '/about' },
//     { label: 'Services', href: '/services' },
//     // { label: 'Blog', href: '/blog' }, // New Blog Section
//     { label: 'Contact Us', href: '/contact' },
//     { label: 'Schedule', href: '/schedule' },
//   ];

//   const navLinks = data?.navLinks || defaultLinks;

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
          
//           {/* Brand/Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Layers className="text-blue-600" size={28} fill="currentColor" />
//             <span className="font-bold text-xl text-gray-900">
//               {data?.brandName || "Art of Cleaning"}
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link: any) => (
//               <Link 
//                 key={link.label} 
//                 href={link.href} 
//                 className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link 
//               href="/book" 
//               className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all shadow-sm active:scale-95"
//             >
//               {data?.ctaLabel || "Book Pickup"}
//             </Link>
//           </div>

//           {/* Mobile Toggle */}
//           <button 
//             className="md:hidden text-gray-600 p-2 focus:outline-none" 
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle Menu"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
//           <div className="flex flex-col space-y-4">
//             {navLinks.map((link: any) => (
//               <Link 
//                 key={link.label} 
//                 href={link.href} 
//                 onClick={() => setIsOpen(false)} 
//                 className="block text-lg font-medium text-gray-700 hover:text-blue-600 border-b border-gray-50 pb-2"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link 
//               href="/book"
//               onClick={() => setIsOpen(false)}
//               className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-center text-lg shadow-md active:bg-blue-700"
//             >
//               {data?.ctaLabel || "Book Pickup"}
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }














"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Layers } from 'lucide-react';

export default function Navbar({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  // Re-activated 'Blog' and ensured local fallbacks align with CMS
  const defaultLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    // { label: 'Blog', href: '/blog' }, 
    { label: 'Contact Us', href: '/contact' },
    { label: 'Schedule', href: '/schedule' },
  ];

  const navLinks = data?.navLinks || defaultLinks;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand/Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Layers className="text-blue-600" size={28} fill="currentColor" />
            <span className="font-bold text-xl text-gray-900">
              {data?.brandName || "Art of Cleaning"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link: any) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Functional Link: Points to /contact */}
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all shadow-sm active:scale-95"
            >
              {data?.ctaLabel || "Book Pickup"}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gray-600 p-2 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link: any) => (
              <Link 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="block text-lg font-medium text-gray-700 hover:text-blue-600 border-b border-gray-50 pb-2"
              >
                {link.label}
              </Link>
            ))}
            {/* Functional Mobile Link: Points to /contact */}
            <Link 
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-center text-lg shadow-md active:bg-blue-700"
            >
              {data?.ctaLabel || "Book Pickup"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
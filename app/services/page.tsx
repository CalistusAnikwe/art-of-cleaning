import React from 'react';
import { client } from '@/sanity/lib/client';
import { Shirt, WashingMachine, Diamond, BookOpen, Layers } from 'lucide-react';

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Shirt: <Shirt size={24} className="text-blue-600" />,
  WashingMachine: <WashingMachine size={24} className="text-blue-600" />,
  Diamond: <Diamond size={24} className="text-blue-600" />,
  Layers: <Layers size={24} className="text-blue-600" />,
};

async function getServicesData() {
  return await client.fetch(`*[_type == "servicesPage"][0]`);
}

export default async function ServicesPage() {
  const data = await getServicesData();

  // Fallback data if Sanity is empty
  const serviceList = data?.serviceList || [
    { title: 'Premium Dry Cleaning', description: 'Our signature eco-friendly solvent care treats your most delicate fabrics with the respect they deserve.', price: '$15.00', iconName: 'Shirt' },
    { title: 'Wash & Fold', description: 'Professional laundering for your everyday essentials. Neatly folded and ready to wear.', price: '$2.00', unit: '/ lb', iconName: 'WashingMachine' },
    { title: 'Wedding Dress Preservation', description: 'Museum-quality preservation for your most cherished gown with acid-free archival packaging.', price: '$150.00', iconName: 'Diamond' },
    { title: 'Leather & Suede Care', description: 'Specialized restoration for skins and hides. Our master cleaners revitalize texture and color.', price: '$45.00', iconName: 'Layers' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto text-center py-20 px-4">
        <h1 className="font-serif text-5xl text-gray-900 mb-6">
          {data?.title || "Our Expert Services"}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          {data?.description || "Experience meticulous care for your finest garments. We combine traditional expertise with eco-friendly modern technology."}
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceList.map((service: any, index: number) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {iconMap[service.iconName] || <Shirt size={24} className="text-blue-600" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              <div className="flex justify-between items-end pt-4 border-t border-gray-50">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Starting At</span>
                <span className="text-blue-600 font-bold text-xl">
                  {service.price} <span className="text-sm font-normal text-gray-400">{service.unit}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative rounded-3xl overflow-hidden py-20 px-6 text-center from-blue-50 via-white to-blue-100 border border-blue-50">
          <div className="relative z-10 space-y-6">
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
              {data?.promoSection?.title || "Experience Crisp Perfection"}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {data?.promoSection?.subtitle || "Book your first pickup today and receive 20% off your entire order."}
            </p>
            <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
              {data?.promoSection?.buttonText || "Book a Pickup Now"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
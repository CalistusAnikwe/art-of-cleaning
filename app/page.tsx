import Image from "next/image";
import Link from "next/link";
import { Leaf, Truck, Shirt, Instagram, Twitter, Facebook } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// 1. Define the default features in case Sanity is empty
const defaultFeatures = [
  { icon: <Leaf className="text-blue-600" />, title: "Eco-friendly Cleaning", description: "Using advanced, non-toxic solvents." },
  { icon: <Truck className="text-blue-600" />, title: "Doorstep Pickup", description: "Professional couriers collect and return." },
  { icon: <Shirt className="text-blue-600" />, title: "Expert Tailoring", description: "Precision alterations by master tailors." }
];

// 2. The component MUST be the default export
export default async function HomePage() {
  // 3. You MUST fetch the data INSIDE the component or pass it in
  const data = await client.fetch(`*[_type == "home"][0]{
    heroTitle,
    heroSubtitle,
    heroImage,
    standardsTitle,
    standardsSubtitle,
    features,
    ctaTitle,
    ctaSubtitle
  }`);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      {/* Navigation */}
      {/* <nav className="flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">L</div>
          <span className="text-xl font-bold tracking-tight">LuxeClean</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium">Login</button>
          <button className="bg-[#1d4ed8] text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm">
            Book Pickup
          </button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <span className="text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-widest">✨ Premium Garment Care</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-gray-900">
            {data?.heroTitle || "Luxury Care for Your Wardrobe"}
          </h1>
          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
            {data?.heroSubtitle || "Experience meticulous, eco-friendly dry cleaning delivered directly to your doorstep."}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#1d4ed8] hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold transition-all shadow-lg shadow-blue-200">
              Book a Pickup
            </button>
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-md font-semibold transition-all">
              Our Services
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <div className="relative aspect-4/5 rounded-2rem overflow-hidden shadow-2xl bg-gray-100">
            {data?.heroImage ? (
              <Image 
                src={urlFor(data.heroImage).url()} 
                alt="Hero Image" 
                fill 
                className="object-cover" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 italic text-sm">
                Upload image in Sanity Studio
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="bg-[#f8f9fb] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl font-serif text-gray-900">
            {data?.standardsTitle || "Our Premium Standards"}
          </h2>
          <p className="text-gray-500 leading-relaxed">
            {data?.standardsSubtitle || "We combine traditional craftsmanship with modern technology."}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {(data?.features || defaultFeatures).map((item: any, i: number) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6 text-blue-600">
                {/* Simplified icon rendering */}
                {i === 0 && <Leaf />}
                {i === 1 && <Truck />}
                {i === 2 && <Shirt />}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-[#0a0f1a] rounded-[3rem] py-20 px-6 text-center text-white relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif">
               {data?.ctaTitle || "Ready for a Fresh Start?"}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
               {data?.ctaSubtitle || "Join thousands of satisfied customers who trust LuxeClean."}
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold transition-all mt-4">
              Book Your Pickup Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="border-t border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-gray-500">
          <div className="text-center md:text-left">
            <span className="font-bold text-gray-900 text-sm">LuxeClean</span>
            <p>Elevating garment care since 1994.</p>
          </div>
          <div className="flex gap-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
          <div className="flex gap-4">
            <Twitter size={16} />
            <Instagram size={16} />
            <Facebook size={16} />
          </div>
        </div>
      </footer> */}
    </div>
  );
}
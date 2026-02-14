import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { Shirt, Leaf, Scissors } from 'lucide-react';
import urlFor from '@/sanity/lib/imageBuilder'; // Assumes you have an image helper

async function getAboutData() {
  return await client.fetch(`*[_type == "about"][0]`);
}

export default async function AboutPage() {
  const data = await getAboutData();

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-500px lg:h-600px rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/about-hero.jpg" // Fallback or data?.hero.image
              alt="Tailor at work"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">
              {data?.hero?.badge || "SINCE 1984"}
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl text-gray-900 leading-tight">
              {data?.hero?.title || "The Art of Cleaning: A Legacy of Craftsmanship"}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Experience the intersection of traditional fabric care and modern precision. Our commitment to quality ensures your garments receive the royal treatment they deserve.
            </p>
            <p className="italic text-gray-400 font-serif border-l-2 border-gray-100 pl-4">
              "Every garment tells a story; our job is to preserve its chapters for generations to come."
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all">
              Schedule a Collection
            </button>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase block mb-4">OUR VALUES</span>
          <h2 className="font-serif text-3xl lg:text-4xl mb-4">The Craftsmanship Standard</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Shirt className="text-blue-600" />} 
              title="Fabric-First Approach" 
              desc="We analyze every fiber to determine the optimal cleaning method, ensuring delicate materials like silk and cashmere retain their original luster."
            />
            <ValueCard 
              icon={<Leaf className="text-blue-600" />} 
              title="Eco-Conscious Solvents" 
              desc="Our advanced solutions are gentle on your clothes and the environment, utilizing green technology that leaves no scent or harmful residue."
            />
            <ValueCard 
              icon={<Scissors className="text-blue-600" />} 
              title="Hand-Finished Excellence" 
              desc="Every garment is inspected and pressed by hand by our master finishers for a crisp, store-bought finish that machinery can't replicate."
            />
          </div>
        </div>
      </section>

      {/* --- MASTERY SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="font-serif text-3xl lg:text-4xl">Modern Precision, <br/>Traditional Mastery</h2>
            <div className="space-y-4 text-gray-600">
              <p>At the heart of our facility is a dedicated team of artisans who have spent decades perfecting the nuances of stain removal and structural garment care.</p>
              <p>We believe that dry cleaning isn't just a utility—it's a form of preservation. From bridal couture to bespoke tailoring, we treat your wardrobe with the respect it deserves.</p>
            </div>
            <div className="flex gap-12 pt-4">
              <div>
                <p className="text-3xl font-serif text-blue-600 font-bold">12k+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Garments Weekly</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-blue-600 font-bold">40yr</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Master Experience</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-80 rounded-2xl overflow-hidden mt-12">
              <Image src="/shirt-detail.jpg" alt="Shirt detail" fill className="object-cover" />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image src="/machines.jpg" alt="Laundry machines" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-blue-600 rounded-3xl p-12 text-center text-white space-y-8 shadow-xl">
          <h2 className="font-serif text-3xl lg:text-5xl italic">Experience the Master's Touch</h2>
          <p className="max-w-2xl mx-auto text-blue-100">Your wardrobe deserves the standard of excellence we provide. Join thousands of satisfied clients who trust us with their most valuable attire.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">Book Your First Pickup</button>
            <button className="border border-blue-400 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all">View Service Map</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left">
      <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
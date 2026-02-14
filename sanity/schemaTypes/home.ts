import { defineField, defineType } from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    // --- HERO SECTION ---
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Luxury Care for Your Wardrobe',
      description: 'Use <span> for the blue italic text.',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      initialValue: 'Experience meticulous, eco-friendly dry cleaning delivered directly to your doorstep with our white-glove service.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // --- STANDARDS / FEATURES SECTION ---
    defineField({
      name: 'standardsTitle',
      title: 'Standards Section Title',
      type: 'string',
      initialValue: 'Our Premium Standards',
    }),
    defineField({
      name: 'standardsSubtitle',
      title: 'Standards Section Subtitle',
      type: 'text',
      initialValue: 'We combine traditional craftsmanship with modern technology to provide the highest level of care for your garments.',
    }),
    defineField({
      name: 'features',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { 
              name: 'icon', 
              type: 'string', 
              title: 'Icon Name', 
              description: 'Use: Leaf, Truck, or Shirt' 
            },
          ],
        },
      ],
    }),

    // --- CTA SECTION ---
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      initialValue: 'Ready for a Fresh Start?',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Subtitle',
      type: 'text',
      initialValue: 'Join thousands of satisfied customers who trust LuxeClean with their most cherished wardrobe items.',
    }),
  ],
})
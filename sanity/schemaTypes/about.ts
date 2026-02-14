import { defineField, defineType } from 'sanity';

export const about = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'badge', type: 'string', initialValue: 'SINCE 1984' },
        { name: 'title', type: 'string', initialValue: 'The Art of Cleaning: A Legacy of Craftsmanship' },
        { name: 'description', type: 'text' },
        { name: 'quote', type: 'string' },
        { name: 'image', type: 'image', options: { hotspot: true } },
      ]
    }),
    defineField({
      name: 'values',
      title: 'Our Values',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'iconName', type: 'string', description: 'Lucide icon name (e.g., Shirt, Leaf, Scissors)' },
          { name: 'title', type: 'string' },
          { name: 'description', type: 'text' },
        ]
      }]
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', type: 'string', placeholder: '12k+' },
          { name: 'label', type: 'string', placeholder: 'Garments Weekly' }
        ]
      }]
    }),
    defineField({
      name: 'masteryImageOne',
      title: 'Mastery Image Left (Shirt)',
      type: 'image',
    }),
    defineField({
      name: 'masteryImageTwo',
      title: 'Mastery Image Right (Machines)',
      type: 'image',
    })
  ],
});
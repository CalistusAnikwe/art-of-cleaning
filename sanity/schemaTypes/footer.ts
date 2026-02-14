import { defineField, defineType } from 'sanity';

export const footer = defineType({
  name: 'footer',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'brandDescription',
      title: 'Brand Description',
      type: 'text',
      rows: 3,
      initialValue: 'Defining the standard of excellence in garment care since 1984. Traditional craft meets modern logistics.',
    }),
    defineField({
      name: 'sections',
      title: 'Link Sections',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Section Title' },
          { 
            name: 'links', 
            type: 'array', 
            of: [{
              type: 'object',
              fields: [
                { name: 'label', type: 'string' },
                { name: 'href', type: 'string' }
              ]
            }]
          }
        ]
      }]
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', type: 'string', initialValue: '(555) 123-4567' },
        { name: 'email', type: 'string', initialValue: 'concierge@artofcleaning.com' },
        { name: 'location', type: 'string', initialValue: 'Manhattan, NY' },
      ]
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2024 Art of Cleaning. All rights reserved. Crafting quality, one garment at a time.',
    }),
  ],
});
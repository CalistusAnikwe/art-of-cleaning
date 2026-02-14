import { defineField, defineType } from 'sanity';

export const schedule = defineType({
  name: 'schedulePage',
  title: 'Schedule Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      initialValue: 'Schedule a Luxury Pickup',
    }),
    defineField({
      name: 'services',
      title: 'Selectable Services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string', title: 'Service Name' },
          { name: 'description', type: 'string', title: 'Description' },
          { name: 'price', type: 'number', title: 'Base Price' },
          { name: 'image', type: 'image', title: 'Service Image', options: { hotspot: true } },
        ]
      }]
    }),
    defineField({
      name: 'fees',
      title: 'Fees & Taxes',
      type: 'object',
      fields: [
        { name: 'conciergeFee', type: 'string', initialValue: 'Complimentary' },
        { name: 'taxPercentage', type: 'number', initialValue: 8.25 },
      ]
    })
  ],
});
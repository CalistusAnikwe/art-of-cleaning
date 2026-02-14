import { defineField, defineType } from 'sanity';

export const services = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Our Expert Services',
    }),
    defineField({
      name: 'description',
      title: 'Page Description',
      type: 'text',
      initialValue: 'Experience meticulous care for your finest garments. We combine traditional expertise with eco-friendly modern technology.',
    }),
    defineField({
      name: 'serviceList',
      title: 'Services Offered',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Service Name' },
          { name: 'description', type: 'text', title: 'Short Description' },
          { name: 'price', type: 'string', title: 'Starting Price (e.g. $15.00)' },
          { name: 'unit', type: 'string', title: 'Price Unit (e.g. / lb or empty)', initialValue: '' },
          { name: 'iconName', type: 'string', title: 'Icon Name (Lucide React)' },
        ]
      }]
    }),
    defineField({
      name: 'promoSection',
      title: 'Promotion Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', initialValue: 'Experience Crisp Perfection' },
        { name: 'subtitle', type: 'string', initialValue: 'Book your first pickup today and receive 20% off your entire order.' },
        { name: 'buttonText', type: 'string', initialValue: 'Book a Pickup Now' },
      ]
    })
  ],
});
import { defineField, defineType } from 'sanity';

export const contact = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      initialValue: 'Contact Our Concierge',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      initialValue: 'Experience the pinnacle of garment care.',
    }),
    defineField({
      name: 'emailRecipient',
      title: 'Email Recipient',
      type: 'string',
      initialValue: 'calistusmine@gmail.com',
      description: 'The email address where messages will be sent.'
    }),
    defineField({
      name: 'callbackNumber',
      title: 'Callback Phone Number',
      type: 'string',
      initialValue: '09064466986',
      description: 'The number dialed when "Request a Callback" is clicked.'
    }),
    defineField({
      name: 'address',
      title: 'Flagship Location',
      type: 'object',
      fields: [
        { name: 'street', type: 'string', initialValue: '742 Park Avenue South' },
        { name: 'cityStateZip', type: 'string', initialValue: 'Lagos, Nigeria' },
        { name: 'country', type: 'string', initialValue: 'Nigeria' },
      ]
    }),
    defineField({
      name: 'hours',
      title: 'Concierge Hours',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'days', type: 'string', title: 'Days' },
          { name: 'time', type: 'string', title: 'Hours' },
        ]
      }]
    }),
    defineField({
      name: 'priorityPhone',
      title: 'Priority Member Line',
      type: 'string',
      initialValue: '09064466986',
    })
  ],
});
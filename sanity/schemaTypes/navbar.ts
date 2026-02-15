import { defineField, defineType } from 'sanity';

export const navbar = defineType({
  name: 'navbar',
  title: 'Navbar Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
      initialValue: 'Art of Cleaning',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Link Label' }),
            defineField({ name: 'href', type: 'string', title: 'URL Path' }),
          ],
        },
      ],
      initialValue: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Schedule', href: '/schedule' },
      ]
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
      initialValue: 'Book Pickup',
    }),
  ],
});
import {defineField, defineType} from 'sanity'

export const productPage = defineType({
  name: 'productPage',
  title: 'Product Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'productImages',
          title: 'Product Images',
          type: 'array',
          of: [{type: 'image', options: { hotspot: true }}],
        }),
        defineField({
          name: 'asSeenInLogos',
          title: '"As Seen In" Logos',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ],
    }),
    defineField({
      name: 'greenImpact',
      title: 'Green Impact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'co2Saved',
          title: 'CO2 Saved (kg)',
          type: 'string',
        }),
        defineField({
          name: 'waterSaved',
          title: 'Water Saved (days)',
          type: 'string',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image / Graphic',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'icon',
              title: 'Icon/Image',
              type: 'image',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'reviews',
      title: 'Customer Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'authorName',
              title: 'Author Name',
              type: 'string',
            }),
            defineField({
              name: 'avatar',
              title: 'Avatar Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'reviewText',
              title: 'Review Text',
              type: 'text',
            }),
            defineField({
              name: 'rating',
              title: 'Star Rating',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Product Page Content',
      }
    },
  },
})

import {defineField, defineType, defineArrayMember} from 'sanity'

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
    defineField({
      name: 'bestSelf',
      title: 'Be Your Best Self Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          initialValue: 'Be your best self.',
        }),
        defineField({
          name: 'paragraphs',
          title: 'Story Paragraphs',
          type: 'array',
          of: [{type: 'text'}],
        }),
        defineField({
          name: 'mainImage',
          title: 'Main Founder Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'secondaryImageTop',
          title: 'Top Left Accent Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'secondaryImageBottom',
          title: 'Bottom Right Accent Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Customize Your Outfit',
        }),
      ],
    }),
    defineField({
      name: 'comfortMadeEasy',
      title: 'Comfort Made Easy Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          initialValue: 'Comfort made easy',
        }),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'stepNumber', title: 'Step Number', type: 'number'}),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                defineField({name: 'icon', title: 'Icon', type: 'image'}),
                defineField({name: 'isHighlighted', title: 'Is Highlighted (Warm Beige)', type: 'boolean', initialValue: false}),
              ],
            }),
          ],
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Customize Your Outfit',
        }),
        defineField({
          name: 'reviewText',
          title: 'Review Text',
          type: 'string',
          initialValue: 'Over 500+ 5 Star Reviews Online',
        }),
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

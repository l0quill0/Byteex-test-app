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
      title: 'Frequently Asked Questions (Legacy Array)',
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
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          initialValue: 'Frequently asked questions.',
        }),
        defineField({
          name: 'faqs',
          title: 'Questions & Answers',
          type: 'array',
          of: [
            defineArrayMember({
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
            }),
          ],
        }),
        defineField({
          name: 'mainImage',
          title: 'Collage Main Center Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'secondaryImageTop',
          title: 'Collage Top Right Accent Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'secondaryImageBottom',
          title: 'Collage Bottom Left Accent Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'buttonText',
          title: 'CTA Button Text (Mobile)',
          type: 'string',
          initialValue: 'Customize Your Outfit',
        }),
        defineField({
          name: 'reviewText',
          title: 'Review Rating Text (Mobile)',
          type: 'string',
          initialValue: 'One of 500+ 5 Star Reviews Online',
        }),
      ],
    }),
    defineField({
      name: 'greenImpactSection',
      title: 'Our Total Green Impact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Headline Title',
          type: 'string',
          initialValue: 'Our total green impact',
        }),
        defineField({
          name: 'stats',
          title: 'Sustainability Metrics',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon Graphic',
                  type: 'image',
                }),
                defineField({
                  name: 'value',
                  title: 'Metric Value',
                  type: 'string',
                }),
                defineField({
                  name: 'label',
                  title: 'Metric Label',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
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
    defineField({
      name: 'reviewsSection',
      title: 'Reviews Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          initialValue: 'What are our fans saying?',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          initialValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.',
        }),
        defineField({
          name: 'fansGroupImage',
          title: 'Fans Group Image Strip',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'reviews',
          title: 'Reviews',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'author',
                  title: 'Author Name',
                  type: 'string',
                  initialValue: 'Jane, S.',
                }),
                defineField({
                  name: 'quote',
                  title: 'Quote',
                  type: 'text',
                  initialValue:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.',
                }),
                defineField({name: 'rating', title: 'Rating', type: 'number', initialValue: 5}),
                defineField({name: 'avatar', title: 'Avatar', type: 'image'}),
              ],
            }),
          ],
        }),
        defineField({
          name: 'ugcImages',
          title: 'UGC Photo Gallery (Alternative)',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'image',
              options: {hotspot: true},
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
    defineField({
      name: 'finalCtaSection',
      title: 'Final CTA Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Headline Title',
          type: 'string',
          initialValue: 'Find something you love.',
        }),
        defineField({
          name: 'desktopSubtitle',
          title: 'Desktop Subtitle',
          type: 'text',
          initialValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
        }),
        defineField({
          name: 'mobileSubtitle',
          title: 'Mobile Subtitle',
          type: 'text',
          initialValue: 'Click below to browse our collection!',
        }),
        defineField({
          name: 'productCards',
          title: 'Product Showcase Cards',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'image',
              options: {hotspot: true},
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
          name: 'shipsInText',
          title: 'Shipping Speed Text',
          type: 'string',
          initialValue: 'Ships in 1-2 Days',
        }),
        defineField({
          name: 'freeShippingText',
          title: 'Free Shipping Text',
          type: 'string',
          initialValue: 'FREE Shipping on Orders over $200',
        }),
        defineField({
          name: 'reviewsText',
          title: 'Reviews Badge Text',
          type: 'string',
          initialValue: 'Over 500+ 5 Star Reviews Online',
        }),
        defineField({
          name: 'ethicallyMadeText',
          title: 'Ethically Made Text',
          type: 'string',
          initialValue: 'Made ethically and responsibly.',
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

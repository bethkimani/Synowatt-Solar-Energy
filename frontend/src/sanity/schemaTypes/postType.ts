import { defineArrayMember, defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The title of your blog article.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Click "Generate" to create a URL-friendly slug from the title.',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      description: 'Select the main topic category.',
      type: 'string',
      options: {
        list: [
          { title: 'Solar Energy', value: 'Solar Energy' },
          { title: 'Solar Installation', value: 'Solar Installation' },
          { title: 'Solar Batteries', value: 'Solar Batteries' },
          { title: 'Energy Saving Tips', value: 'Energy Saving Tips' },
          { title: 'Renewable Energy in Kenya', value: 'Renewable Energy in Kenya' },
          { title: 'Solar Maintenance', value: 'Solar Maintenance' },
          { title: 'Solar Technology', value: 'Solar Technology' },
        ],
      },
      initialValue: 'Solar Energy',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Summary / Excerpt',
      description: 'A 1-2 sentence preview shown on the blog cards and search results.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          description: 'Accessibility description of the cover photo.',
          type: 'string',
          initialValue: 'Solar installation',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Synowatt Power & Solar Ltd',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      description: 'Articles are sorted with the most recent at the top.',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      description: 'Keywords separated by enter (e.g., solar, batteries, hybrid).',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'intro',
      title: 'Introduction Lead Paragraph',
      description: 'The opening paragraph shown at the start of the article in bold/larger text.',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Article Sections',
      description:
        'Add sections to your article. Each section heading (H2) automatically appears in the interactive Table of Contents.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'section',
          title: 'Section',
          fields: [
            defineField({
              name: 'heading',
              title: 'Section Heading (H2)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'blocks',
              title: 'Content Blocks',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'paragraphBlock',
                  title: 'Paragraph',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Paragraph Text',
                      type: 'text',
                      rows: 4,
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                  preview: {
                    select: { title: 'text' },
                    prepare({ title }) {
                      return { title: title || 'Empty paragraph', subtitle: 'Paragraph' };
                    },
                  },
                }),
                defineArrayMember({
                  name: 'subheadingBlock',
                  title: 'Subheading (H3)',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Subheading Text',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                  preview: {
                    select: { title: 'text' },
                    prepare({ title }) {
                      return { title: title || 'Subheading', subtitle: 'Subheading (H3)' };
                    },
                  },
                }),
                defineArrayMember({
                  name: 'listBlock',
                  title: 'List (Bullets or Numbered)',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'items',
                      title: 'List Items',
                      type: 'array',
                      of: [{ type: 'string' }],
                      validation: (Rule) => Rule.required().min(1),
                    }),
                    defineField({
                      name: 'ordered',
                      title: 'Numbered List?',
                      type: 'boolean',
                      initialValue: false,
                    }),
                  ],
                  preview: {
                    select: { items: 'items' },
                    prepare({ items }) {
                      return {
                        title: items?.join(', ') || 'Empty list',
                        subtitle: `List (${items?.length || 0} items)`,
                      };
                    },
                  },
                }),
                defineArrayMember({
                  name: 'calloutBlock',
                  title: 'Callout / Tip Box',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Callout Title (Optional, e.g. "Good to know")',
                      type: 'string',
                    }),
                    defineField({
                      name: 'text',
                      title: 'Callout Message',
                      type: 'text',
                      rows: 3,
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                  preview: {
                    select: { title: 'title', text: 'text' },
                    prepare({ title, text }) {
                      return { title: title || text || 'Callout', subtitle: 'Callout box' };
                    },
                  },
                }),
                defineArrayMember({
                  name: 'imageBlock',
                  title: 'In-article Image',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'image',
                      title: 'Image File',
                      type: 'image',
                      options: { hotspot: true },
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'caption',
                      title: 'Caption (Optional)',
                      type: 'string',
                    }),
                  ],
                  preview: {
                    select: { title: 'alt', media: 'image' },
                    prepare({ title, media }) {
                      return { title: title || 'Image', subtitle: 'In-article Image', media };
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: 'heading', blocks: 'blocks' },
            prepare({ title, blocks }) {
              return {
                title: title || 'Untitled section',
                subtitle: `${blocks?.length || 0} content block(s)`,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (Optional)',
      description: 'Leave empty to automatically use the post title.',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description (Optional)',
      description: 'Leave empty to automatically use the excerpt.',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
});

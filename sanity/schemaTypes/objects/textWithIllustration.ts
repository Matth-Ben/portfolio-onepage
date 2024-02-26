// ./schemas/textWithIllustration.js

import {ImageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default {
    name: 'textWithIllustration',
    type: 'object',
    title: 'Text with Illustration',
    icon: ImageIcon,
    preview: {
        select: {
        title: 'heading',
        image: 'image',
        },
        prepare({title, image}) {
            return {
                title: title || 'Untitled',
                subtitle: 'Text with Illustration',
                media: image || ImageIcon,
            }
        },
    },
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'tagline',
            type: 'string',
        }),
        defineField({
            name: 'excerpt',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image'
                }
            ]
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }),
            ],
        }),
    ],
}
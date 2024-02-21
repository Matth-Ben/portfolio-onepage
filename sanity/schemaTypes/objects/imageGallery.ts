// imageGallery.js

import {ImagesIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default {
    name: 'gallery',
    type: 'object',
    title: 'Gallery',
    icon: ImagesIcon,
    preview: {
        prepare() {
            return {
                title: 'Gallerie',
                subtitle: 'Gallery',
                media: ImagesIcon,
            }
        },
    },
    fields: [
        {
            name: 'images',
            type: 'array',
            of: [
                defineField({
                    name: 'image',
                    type: 'image',
                    options: {hotspot: true},
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        },
                    ],
                }),
            ],
            options: {
                layout: 'grid',
            },
        },
    ],
}
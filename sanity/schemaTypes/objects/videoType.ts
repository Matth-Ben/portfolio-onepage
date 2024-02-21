// ./schemas/videoType.js

import {DocumentVideoIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default {
    name: 'video',
    type: 'object',
    title: 'Vidéo',
    icon: DocumentVideoIcon,
    preview: {
        select: {
            title: 'videoLabel'
        },
        prepare({title}) {
        return {
            title: title || 'Untitled',
            subtitle: 'Vidéo',
            media: DocumentVideoIcon,
        }
        },
    },
    fields: [
        defineField({
            name: 'videoLabel',
            type: 'string',
        }),
        defineField({
            name: 'url',
            type: 'string',
            title: 'URL',
        }),
    ],
}
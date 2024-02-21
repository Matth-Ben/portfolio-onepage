// ./schemas/formType.js

import {EnvelopeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default {
    name: 'form',
    type: 'object',
    title: 'Formulaire',
    icon: EnvelopeIcon,
    preview: {
        select: {
            title: 'heading'
        },
        prepare({title}) {
        return {
            title: title || 'Untitled',
            subtitle: 'Formulaire',
            media: EnvelopeIcon,
        }
        },
    },
    fields: [
        defineField({
            name: 'label',
            type: 'string',
        }),
        defineField({
            name: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'form',
            type: 'string',
            description: 'Select form type',
            options: {
                list: ['newsletter', 'register', 'contact'],
            },
        }),
    ],
}
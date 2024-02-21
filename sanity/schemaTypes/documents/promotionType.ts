// ./schemas/promotionType.ts

import {defineField, defineType} from 'sanity'

export default {
    name: 'promotion',
    type: 'document',
    title: 'Promotion',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'link',
            type: 'url',
        }),
    ],
}
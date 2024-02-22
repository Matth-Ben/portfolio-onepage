// ./schemas/exempleType.ts

import {defineField} from 'sanity'

export default {
    name: 'exemple',
    type: 'document',
    title: 'Exemple',
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
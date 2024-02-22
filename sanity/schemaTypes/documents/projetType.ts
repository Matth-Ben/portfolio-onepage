import {defineArrayMember, defineField} from 'sanity'

export default {
    name: 'projets',
    type: 'document',
    title: 'Projets',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" }
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
        defineField({
            name: 'pageBuilder',
            type: 'array',
            title: 'Page builder',
            of: [
                defineArrayMember({
                    name: 'hero',
                    type: 'hero',
                }),
                defineArrayMember({
                    name: 'textWithIllustration',
                    type: 'textWithIllustration',
                }),
                defineArrayMember({
                    name: 'gallery',
                    type: 'gallery',
                }),
                defineArrayMember({
                    name: 'form',
                    type: 'form',
                }),
                defineArrayMember({
                    name: 'video',
                    type: 'video',
                }),
                defineArrayMember({
                    name: 'callToAction',
                    type: 'reference',
                    to: [{type: 'projets'}],
                }),
            ],
        }),
    ],
}
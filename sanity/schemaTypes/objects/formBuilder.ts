import {FaAlignLeft} from 'react-icons/fa'

export default {
  name: 'formBuilder',
  title: 'Form Builder',
  icon: FaAlignLeft,
  type: 'object',
  fields: [
    {
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [{type: 'formFields'}],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Custom form setup`,
        subtitle: `Form Builder`,
        media: FaAlignLeft,
      }
    },
  },
}
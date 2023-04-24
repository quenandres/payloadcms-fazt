import { CollectionConfig } from 'payload/types';

const Service: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create:() => true,
    delete:() => true
  },
  labels: {
    singular: 'service',
    plural: 'services',
  },
  fields: [
    {
        name: 'name',
        type: 'text', 
        required: true
    },
    {
        name: 'description',
        type: 'richText', 
    },
    {
        name: 'image',
        type: 'upload', // required
        relationTo: 'media',   
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
      required: true
    }
  ],
};

export default Service;
import { CollectionConfig } from 'payload/types';

const Service: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create:() => true
  },
  labels: {
    singular: 'service',
    plural: 'services',
  },
  fields: [
    {
        name: 'name',
        type: 'text', 
    },
    {
        name: 'description',
        type: 'richText', 
    },
    {
        name: 'image',
        type: 'upload', // required
        relationTo: 'media',   
    }

  ],
};

export default Service;
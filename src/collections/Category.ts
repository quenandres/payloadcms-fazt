import { CollectionConfig } from 'payload/types';

const Category: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create:() => true
  },
  labels: {
    singular: 'category',
    plural: 'categories',
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
        name: 'color',
        type: 'text', 
    },
    {
        name: 'image',
        type: 'upload', // required
        relationTo: 'media',   
    }

  ],
};

export default Category;
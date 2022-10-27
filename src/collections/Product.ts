import { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'name',
        type: 'text', 
    },
    {
        name: 'description',
        type: 'richText', 
    }
  ],
};

export default Products;
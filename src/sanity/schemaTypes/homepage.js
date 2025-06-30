import { defineType, defineField } from 'sanity';

const homepage = defineType({
  name: 'product_details',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),  
    defineField({
        name: 'subheading_desc',
        title: 'context',
        type: 'string',
      }),
      
      defineField({
        name: 'subheading',
        title: 'Price',
        type: 'string',
      }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
      }),
      defineField({
        name: 'detailed_desc',
        title: 'Description',
        type: 'text',
      }),
  ],
});

export default homepage;

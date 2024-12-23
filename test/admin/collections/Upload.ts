import type { CollectionConfig } from 'payload'

import { uploadCollectionSlug } from '../slugs.js'

export const UploadCollection: CollectionConfig = {
  slug: uploadCollectionSlug,
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
  upload: {
    adminThumbnail: () => 'https://payloadcms.com/images/universal-truth.jpg',
  },
}

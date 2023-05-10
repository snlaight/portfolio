import imageUrlBuilder from '@sanity/image-url';

import { client } from '@/sanity/lib/client';

const builder = imageUrlBuilder(client);

export const urlForImage = (source: any) => builder.image(source).height(320).width(400).toString();

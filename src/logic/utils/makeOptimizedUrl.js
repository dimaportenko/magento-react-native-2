/** @flow */
import { URL, URLSearchParams } from 'whatwg-url';
import type { MediaPathType } from '../types/magento';

const mediaBases = new Map()
  .set('image-product', 'catalog/product/')
  .set('image-category', 'catalog/category/');

const joinUrls = (base, url) =>
  (base.endsWith('/') ? base.slice(0, -1) : base) +
  '/' +
  (url.startsWith('/') ? url.slice(1) : url);


export const makeOptimizedUrl = (
  image: { file: string, type: MediaPathType },
  mediaBackend: string,
  width: number = 0
): string => {
  let baseURL = new URL(image.file, mediaBackend);

  if (mediaBases.has(image.type)) {
    const mediaBase = mediaBases.get(image.type);
    if (mediaBase && !baseURL.pathname.includes(mediaBase)) {
      baseURL = new URL(joinUrls(mediaBase, image.file), mediaBackend);
    }
  }

  if (width > 0) {
    const params = new URLSearchParams(baseURL.search);
    params.set('width', width); // Use the webp format if available
    baseURL.search = params.toString();
  }

  return baseURL.href;
};


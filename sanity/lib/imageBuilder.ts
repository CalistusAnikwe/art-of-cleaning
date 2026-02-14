import imageUrlBuilder from '@sanity/image-url';
import { client } from './client'; // Ensure this points to your Sanity client file

// Initialize the builder with your specific client configuration
const builder = imageUrlBuilder(client);

/**
 * Transforms a Sanity image reference into a URL string.
 * This allows for automatic cropping, resizing, and optimization.
 */
export default function urlFor(source: any) {
  return builder.image(source);
}
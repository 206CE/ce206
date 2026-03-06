import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CE206',
    short_name: 'CE206',
    description: 'My Portfolio at your fingertips',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000', // Change this to your desired splash screen background color
    theme_color: '#000000', // Change this to your desired theme color
    icons: [
      {
        src: '/icons/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // Add more icon sizes (e.g., 192x192, 512x512) for better compatibility
      {
        src: '/icons/Logo_180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icons/Logo_512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

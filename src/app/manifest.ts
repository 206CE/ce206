import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '206_CE Services',
    short_name: '206_CE',
    description: 'Digital efficiency and web development services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a10', // Match your --bg-primary
    theme_color: '#ffd166', // Match your --primary
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/Logo_512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable', // Allows Android to crop the icon into different shapes
      },
    ],
  };
}

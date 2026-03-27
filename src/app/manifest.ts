import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '206_CE Services',
    short_name: '206_CE',
    description: 'Digital efficiency and web development services.',
    start_url: '/',
    display: 'standalone',
    background_color: 'oklch(0.97 0 360)', // Match your --bg-primary
    theme_color: 'oklch(0.55 0 360)', // Match your --primary
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

// Add real albums here: drop the images into public/photos/<something>/ or reuse the existing folder then add an entry below.
// The first photo in `photos` is used as the album cover image on the collapsed view.
// `lat`/`lng` place the album on the map at the top of the page - look up coordinates for wherever the album was shot or use https://www.latlong.net/.

export interface AlbumPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface Album {
  slug: string;
  title: string;
  date: string; // ISO date e.g. '2026-05-14'.
  location: string;
  lat: number;
  lng: number;
  category: string;
  description: string;
  photos: AlbumPhoto[];
}

export const albums: Album[] = [
  {
    slug: 'placeholder-trip',
    title: 'Placeholder Trip',
    date: '2026-05-14',
    location: 'Kyoto, Japan',
    lat: 35.0116,
    lng: 135.7681,
    category: 'Travel',
    description:
      'A couple of placeholder sentences about this trip to test out a non-UK destination. I still want to go back to Japan at some point!',
    photos: [
      { src: '/photos/placeholder-1.svg', alt: 'Placeholder photo 1' },
      { src: '/photos/placeholder-2.svg', alt: 'Placeholder photo 2' },
      { src: '/photos/placeholder-3.svg', alt: 'Placeholder photo 3' },
    ],
  },
  {
    slug: 'placeholder-day',
    title: 'An Everyday Moment',
    date: '2026-02-02',
    location: 'London, UK',
    lat: 51.5072,
    lng: -0.1276,
    category: 'Everyday',
    description:
      'Another short placeholder to test out another tag.',
    photos: [
      { src: '/photos/placeholder-4.svg', alt: 'Placeholder photo 4' },
      { src: '/photos/placeholder-5.svg', alt: 'Placeholder photo 5' },
      { src: '/photos/placeholder-6.svg', alt: 'Placeholder photo 6' },
    ],
  },
  {
    slug: 'placeholder-london-2',
    title: 'Another London Day',
    date: '2026-06-20',
    location: 'London, UK',
    lat: 51.5072,
    lng: -0.1276,
    category: 'Everyday',
    description:
      'A second placeholder at the same location - to test that the map stacks multiple albums from the same spot into one marker.',
    photos: [
      { src: '/photos/placeholder-7.svg', alt: 'Placeholder photo 7' },
      { src: '/photos/placeholder-8.svg', alt: 'Placeholder photo 8' },
    ],
  },
];

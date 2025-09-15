export type VideoItem = {
  id: string;
  title: string;
  platform: 'youtube' | 'vimeo';
  embedUrl: string;
  publishedAt?: string;
};

// Edit this array to add/remove your videos.
// - platform: 'youtube' or 'vimeo'
// - embedUrl: use the embed URL, e.g.
//   YouTube: https://www.youtube.com/embed/VIDEO_ID
//   Vimeo:   https://player.vimeo.com/video/VIDEO_ID
export const videos: VideoItem[] = [
  {
    id: 'yt-1',
    title: 'Showreel 2025',
    platform: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    publishedAt: '2025-01-01',
  },
  {
    id: 'vm-1',
    title: 'Client Project – Teaser',
    platform: 'vimeo',
    embedUrl: 'https://player.vimeo.com/video/76979871',
    publishedAt: '2025-04-12',
  },
  {
    id: 'yt-2',
    title: 'Behind the Scenes',
    platform: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
    publishedAt: '2025-06-20',
  },
];



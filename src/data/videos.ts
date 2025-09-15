export type VideoItem = {
  id: string;
  title: string;
  platform: 'youtube' | 'vimeo';
  embedUrl: string;
  publishedAt?: string;
};

// Edite esta lista para adicionar novos vídeos.
// Use sempre a URL de embed:
//  - YouTube: https://www.youtube.com/embed/VIDEO_ID
//  - Vimeo:   https://player.vimeo.com/video/VIDEO_ID

export const videos: VideoItem[] = [

  {
    id: 'ytdronevideo',
    title: 'Drone Video',
    platform: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/ubLKXRgn0yQ',
    publishedAt: '2024-09-11',
},
{  id: 'aberturayt-1',
    title: 'Documentario Industria de Games Brasil',
    platform: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/KqU1QMFTQ9w',
    publishedAt: '2024-09-11',
},
{  id: 'aberturayt-2',
    title: 'Abertura Canal de Youtube',
    platform: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/mG1WIKGX428',
    publishedAt: '2024-09-11',
},

{ id: 'yt-W3SegWh7M3s', title: 'Abertura Canal CtrlMan', platform: 'youtube', embedUrl: 'https://www.youtube.com/embed/W3SegWh7M3s' },
{ id: 'yt-dtGrYev-ZX0', title: 'Abertura Canal CtrlMan Nova', platform: 'youtube', embedUrl: 'https://www.youtube.com/embed/dtGrYev-ZX0' },
{ id: 'yt-IcNKcCDb7ls', title: 'Level Up Intro', platform: 'youtube', embedUrl: 'https://www.youtube.com/embed/IcNKcCDb7ls' },
{ id: 'yt-8iNkF-OHIdU', title: 'TV Feevale - Vinheta 10 anos', platform: 'youtube', embedUrl: 'https://www.youtube.com/embed/8iNkF-OHIdU' },
{ id: 'yt-Mprvxr_IZ9I', title: 'Shock TV - Vinheta', platform: 'youtube', embedUrl: 'https://www.youtube.com/embed/Mprvxr_IZ9I' },
{ id: 'yt-cFMQMFP9J9k', title: 'Level Up Produtora', platform: 'youtube', embedUrl: 'https://www.youtube.com/embed/cFMQMFP9J9k' },
{ id: 'yt-S6U41kdSD-4', title: 'Edicao - Festival de Cinema de Gramado', platform: 'youtube', embedUrl: 'https://www.youtube.com/embed/S6U41kdSD-4' },
{ id: 'yt-UpUvaXnmvrg', title: 'Documentario AdJogos: Dash Games', platform: 'youtube', embedUrl: 'https://www.youtube.com/embed/UpUvaXnmvrg' },
{ id: 'yt-v_QtVpQcXvo', title: 'Documentario AdJogos Jam: Edicao Cartoon Network', platform: 'youtube', embedUrl: 'https://www.youtube.com/embed/v_QtVpQcXvo' },
{ id: 'yt-PlmM4-n_9MM', title: 'Abertura Game: Perfect World', platform: 'youtube', embedUrl: 'https://www.youtube.com/embed/PlmM4-n_9MM' },
{ id: 'yt-Qt4l0gcNNE4', title: 'YouTube Video - Intro ControlV', platform: 'youtube', embedUrl: 'https://www.youtube.com/embed/Qt4l0gcNNE4' },

];


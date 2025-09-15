Minimal portfolio site built with Next.js (App Router) and TailwindCSS.

## Scripts

- `npm run dev`: start dev server
- `npm run build`: build
- `npm start`: start production

## Estrutura

- `src/app` — páginas (`/`, `/portfolio`, `/contact`)
- `src/components` — `Navbar`, `Footer`, `VideoCard`
- `src/data/videos.ts` — lista de vídeos editável

## Adicionando vídeos

Edite `src/data/videos.ts`. Exemplo de item:

```ts
{
  id: 'yt-1',
  title: 'Showreel 2025',
  platform: 'youtube', // ou 'vimeo'
  embedUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  publishedAt: '2025-01-01'
}
```

## EmailJS

1) Crie um arquivo `.env.local` na raiz com:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

2) No EmailJS, configure um template com os campos `from_name`, `from_email`, `message`.

O formulário em `/contact` usa `@emailjs/browser` e lê as variáveis acima.

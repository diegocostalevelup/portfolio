type VideoCardProps = {
  title: string;
  embedUrl: string;
};

export default function VideoCard({ title, embedUrl }: VideoCardProps) {
  return (
    <article className="group rounded-lg border bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-gray-100">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="px-4 py-3">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      </div>
    </article>
  );
}



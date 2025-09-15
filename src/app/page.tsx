import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

export default function Home() {
  const latest = [...videos]
    .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))
    .slice(0, 3);

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Video&apos;s Portfolio</h1>
        <p className="mt-2 text-gray-600"></p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-medium">Trabalhos mais recentes</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((v) => (
            <VideoCard key={v.id} title={v.title} embedUrl={v.embedUrl} />
          ))}
        </div>
      </section>
    </div>
  );
}

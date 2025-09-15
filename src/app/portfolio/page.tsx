import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

export const metadata = {
  title: "Portfólio — Todos os vídeos",
};

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Portfólio</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <VideoCard key={v.id} title={v.title} embedUrl={v.embedUrl} />
        ))}
      </div>
    </div>
  );
}



import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">Seu Nome</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/portfolio" className="hover:underline">Portfolio</Link>
          <Link href="/contact" className="hover:underline">Contato</Link>
        </nav>
      </div>
    </header>
  );
}



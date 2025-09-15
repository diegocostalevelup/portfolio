export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}



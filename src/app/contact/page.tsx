"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Initialize EmailJS once when the public key exists
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string | undefined;
    if (publicKey) {
      try {
        emailjs.init({ publicKey });
      } catch {
        // no-op: init is optional since we pass publicKey on send
      }
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string | undefined;

      if (!serviceId || !templateId || !publicKey) {
        const missing: string[] = [];
        if (!serviceId) missing.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
        if (!templateId) missing.push("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
        if (!publicKey) missing.push("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
        throw new Error(
          `Configuração do EmailJS ausente: ${missing.join(", ")}. ` +
          `Crie/edite .env.local e reinicie o servidor (npm run dev).`
        );
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message,
          to_email: "diegocostalevelup@gmail.com",
          subject: `AudioVisualMessage`,
        },
        {
          publicKey,
        }
      );
      if (response.status !== 200) {
        throw new Error(`EmailJS retornou status ${response.status}: ${response.text}`);
      }
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      console.error("EmailJS error", err);
      const errorMessage = err instanceof Error ? err.message : 
        (err && typeof err === 'object' && 'text' in err && typeof err.text === 'string') ? err.text :
        "Falha ao enviar mensagem";
      setErrorMessage(errorMessage);
      setStatus("error");
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight mb-4">Contato</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="name">Nome</label>
            <input
              id="name"
              className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              className="min-h-32 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-800 disabled:opacity-60"
          >
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>
          {status === "sent" && (
            <p className="text-sm text-green-600">Mensagem enviada com sucesso!</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">Ocorreu um erro. Tente novamente. {errorMessage && `(${errorMessage})`}</p>
          )}
        </form>
      </section>
      <aside className="space-y-3">
        <h2 className="text-xl font-medium">Informações</h2>
        <p className="text-gray-600">Você também pode me encontrar em:</p>
        <ul className="space-y-2 text-gray-700">
          <li>
            <a className="hover:underline" href="mailto:diegocostalevelup@gmail.com">diegocostalevelup@gmail.com</a>
          </li>
          <li>
            <a className="hover:underline" href="https://www.linkedin.com/in/diego-dacosta" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a className="hover:underline" href="https://www.instagram.com/eldiegodacosta" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a className="hover:underline" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Proximamente: YouTube</a>
          </li>
        </ul>
      </aside>
    </div>
  );
}



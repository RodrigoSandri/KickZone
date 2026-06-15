import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://copilot.microsoft.com/th/id/BC0.3ce51763-357c-4ab8-bbc3-a42becae3443.png')",
      }}
    >
      {/* Barra de navegação */}
      <nav className="bg-black/70 backdrop-blur-md w-full py-4 fixed top-0 left-0 shadow-md">
        <ul className="flex justify-center gap-10 text-lg font-semibold text-white">
          <li>
            <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          </li>
          <li>
            <Link href="/contatos" className="hover:text-yellow-400 transition">Contatos</Link>
          </li>
          <li>
            <Link href="/estoque" className="hover:text-yellow-400 transition">Estoque</Link>
          </li>
          <li>
            <Link href="/deshboard" className="hover:text-yellow-400 transition">Deshboard</Link>
          </li>
        </ul>
      </nav>

      {/* Texto central */}
      <p className="mt-28 text-2xl drop-shadow-md">
        Prepare-se para entrar em campo!
      </p>
    </main>
  );
}

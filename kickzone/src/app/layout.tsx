import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <nav className="bg-black/70 backdrop-blur-md w-full py-4 fixed top-0 left-0 shadow-md">
          <ul className="flex justify-center gap-10 text-lg font-semibold text-white">
            <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link href="/contatos" className="hover:text-yellow-400 transition">Contatos</Link></li>
            <li><Link href="/estoque" className="hover:text-yellow-400 transition">Estoque</Link></li>
            <li><Link href="/deshboard" className="hover:text-yellow-400 transition">Deshboard</Link></li>
          </ul>
        </nav>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}

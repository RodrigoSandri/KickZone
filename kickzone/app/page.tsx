export default function Home() {
  return (
    <main className="min-h-screen text-white relative">

      {/* Fundo */}
      <div className="absolute inset-0 bg-[url('/imagens/imagemdahome.jpg')] bg-cover bg-center" />

      {/* Overlay escuro (pra leitura ficar boa) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10">

        <header className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
          <h1 className="text-2xl font-bold text-green-500">
            Sítio Seven
          </h1>

          <nav className="flex gap-6 text-sm">
            <a href="#">Início</a>
            <a href="#">Produtos</a>
            <a href="#">Contato</a>
          </nav>
        </header>

        <section className="flex flex-col items-center justify-center text-center px-6 py-32">
          <h2 className="text-5xl font-bold max-w-3xl leading-tight">
            Encontre a chuteira perfeita para o seu jogo
          </h2>

          <p className="mt-6 max-w-xl text-zinc-300 text-lg">
            Chuteiras profissionais das melhores marcas para campo,
            society e futsal.
          </p>

          <button className="mt-8 rounded-full bg-green-500 px-8 py-4 font-semibold text-black hover:bg-green-400 transition">
            Ver coleção
          </button>
        </section>

      </div>
    </main>
  );
}
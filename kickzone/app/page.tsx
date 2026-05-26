export default function Home() {
  return (
    <main className="min-h-screen text-white relative">

      {/* Background */}
      <div className="absolute inset-0 bg-[url('/imagens/imagemdahome.jpg')] bg-cover bg-center" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10">

        {/* Header */}
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

        {/* Hero */}
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

      {/* Produtos */}
      <section className="relative z-10 bg-zinc-950 px-8 py-20">

        <h3 className="text-3xl font-bold text-center mb-12">
          Produtos em destaque
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-zinc-900 rounded-2xl p-4">

            <div className="h-48 bg-zinc-800 rounded-xl"></div>

            <h4 className="mt-4 text-xl font-semibold">
              Nike Mercurial
            </h4>

            <p className="text-zinc-400 mt-2">
              Velocidade e controle para jogadores ofensivos.
            </p>

            <button className="mt-4 bg-green-500 text-black px-4 py-2 rounded-full font-semibold">
              Ver produto
            </button>

          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900 rounded-2xl p-4">

            <div className="h-48 bg-zinc-800 rounded-xl"></div>

            <h4 className="mt-4 text-xl font-semibold">
              Adidas Predator
            </h4>

            <p className="text-zinc-400 mt-2">
              Controle e precisão em cada jogada.
            </p>

            <button className="mt-4 bg-green-500 text-black px-4 py-2 rounded-full font-semibold">
              Ver produto
            </button>

          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900 rounded-2xl p-4">

            <div className="h-48 bg-zinc-800 rounded-xl"></div>

            <h4 className="mt-4 text-xl font-semibold">
              Puma Future
            </h4>

            <p className="text-zinc-400 mt-2">
              Conforto e agilidade para qualquer posição.
            </p>

            <button className="mt-4 bg-green-500 text-black px-4 py-2 rounded-full font-semibold">
              Ver produto
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}
export function About() {
  return (
    <section
      id="sobre"
      className="bg-background text-text px-6 sm:px-12 py-24 font-sans relative"
    >
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-2">
        <p className="text-sm text-highlight uppercase tracking-widest">
          Sobre minha trajetória
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
          Experiência com tecnologia de ponta
        </h2>
        <div className="w-16 h-1 bg-highlight mx-auto mt-2" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="relative group">
          <div className="absolute inset-0 bg-yellow-400/10 rounded-xl blur-sm group-hover:bg-yellow-400/20 transition-all duration-500" />
          <div className="relative bg-surface/60 backdrop-blur-lg border border-yellow-400/20 p-6 rounded-xl shadow-xl group-hover:border-yellow-400/40 transition-all duration-300">
            <div className="flex flex-col">
              <div className="font-semibold text-xl text-text mb-3">
                Visão moderna e prática
              </div>
              <p className="text-muted">
                Crio sistemas com base em boas práticas, animações suaves e
                interfaces claras. Tenho experiência com soluções reais que
                atendem empresas, com foco em performance, experiência e
                manutenção.
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-yellow-400/10 rounded-xl blur-sm group-hover:bg-yellow-400/20 transition-all duration-500" />
          <div className="relative bg-surface/60 backdrop-blur-lg border border-yellow-400/20 p-6 rounded-xl shadow-xl group-hover:border-yellow-400/40 transition-all duration-300">
            <div className="flex flex-col">
              <div className="font-semibold text-xl text-text mb-3">
                Stack moderna e domínio técnico
              </div>
              <p className="text-muted">
                Domínio de React, TypeScript, Tailwind CSS, Node.js, NestJS,
                PostgreSQL e integrações com APIs REST e realtime. Atuo com
                projetos de ponta a ponta e foco em entregar qualidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section
      className="relative w-full min-h-[600px] bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 flex flex-col justify-center items-start max-w-6xl mx-auto h-full px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ASB Nettoyage
        </h1>
        <p className="text-xl mb-6 max-w-xl">
          Propreté et entretien pour particuliers et professionnels à Paris
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-medium transition"
        >
          Obtenir un devis
        </a>
      </div>
    </section>
  )
}

export default Hero

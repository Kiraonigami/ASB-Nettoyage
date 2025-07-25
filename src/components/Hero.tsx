function Hero() {
  return (
    <section
      className="relative w-full h-[400px] bg-cover text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundPosition: 'center 34%'
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 flex flex-col justify-end items-center text-center max-w-4xl mx-auto h-full px-6 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">ASB Nettoyage</h1>
        <p className="text-lg md:text-xl mb-4 max-w-2xl">
          Propreté et entretien pour particuliers et professionnels à Paris
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-5 rounded-lg text-white text-lg font-semibold transition"
        >
          Obtenir un devis
        </a>
      </div>
    </section>
  )
}

export default Hero

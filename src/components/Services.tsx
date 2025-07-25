import { Building2, Home, CheckCircle2 } from 'lucide-react'

const services = [
  {
    title: 'Nettoyage Résidentiel',
    icon: <Home className="w-12 h-12 text-blue-600" />,
    description: 'Maisons, appartements, terrasses, nettoyage après travaux'
  },
  {
    title: 'Nettoyage Commercial',
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    description: 'Bureaux, commerces, immeubles, parkings'
  },
  {
    title: 'Remplacement de Gardienne',
    icon: <CheckCircle2 className="w-12 h-12 text-blue-600" />,
    description: 'Remplacement temporaire ou régulier de gardienne d’immeuble'
  },
  {
    title: 'Débarras',
    icon: <CheckCircle2 className="w-12 h-12 text-blue-600" />,
    description: 'Débarras de caves, greniers, locaux encombrés'
  },
  {
    title: 'Nettoyage de Vitres',
    icon: <CheckCircle2 className="w-12 h-12 text-blue-600" />,
    description: 'Nettoyage de vitres sans cordistes, en toute sécurité'
  }
]

function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Nos Services</h2>

        {/* Avantages globaux */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 text-center">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Personnel qualifié</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Produits écologiques</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Interventions rapides</span>
          </div>
        </div>

        {/* Cartes services */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="bg-gray-100 p-4 rounded text-gray-700 text-lg leading-relaxed mt-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

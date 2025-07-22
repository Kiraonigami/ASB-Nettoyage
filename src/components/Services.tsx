import { Building2, Factory, Home, CheckCircle2 } from 'lucide-react'

const services = [
  {
    title: 'Nettoyage Résidentiel',
    icon: <Home className="w-12 h-12 text-blue-600" />,
    description: 'Maisons, appartements, terrasses, nettoyage après travaux',
  },
  {
    title: 'Nettoyage Commercial',
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    description: 'Bureaux, commerces, immeubles, parkings',
  },
  {
    title: 'Nettoyage Industriel',
    icon: <Factory className="w-12 h-12 text-blue-600" />,
    description: 'Sites industriels, entrepôts, zones techniques',
  },
]

function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nos Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  <span>Personnel qualifié</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  <span>Produits écologiques</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  <span>Interventions rapides</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

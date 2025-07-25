function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* À propos */}
          <div>
            <h4 className="text-xl font-semibold mb-4">À Propos</h4>
            <p className="text-gray-400">
              ASB Nettoyage propose des services de propreté pour particuliers
              et professionnels à Paris et en Île-de-France.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white">
                  Nos Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Téléphone : +33 6 10 24 00 30</li>
              <li>Email : nanamedu75@gmail.com</li>
              <li>Adresse : 18 Rue Saint Saëns, Paris</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ASB Nettoyage. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { Mail, MapPin, Phone } from 'lucide-react'

function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setStatus('idle')

    try {
      await emailjs.sendForm(
        'service_teyt8nv',
        'template_uvbqorb',
        formRef.current!,
        'aFcf_qeRd66FSy6r5'
      )
      setStatus('success')
      formRef.current?.reset()
      setCaptchaToken(null)
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contactez-nous</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Bloc gauche - Infos de contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Nous Joindre</h3>
            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-600" />
                +33 0610240030
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-600" />
                contact@cleaningservice.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                18 Rue Saint Saens, Paris, France
              </li>
            </ul>
          </div>

          {/* Bloc droit - Formulaire */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Nom"
              required
              className="w-full p-3 border rounded"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Email"
              required
              className="w-full p-3 border rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              className="w-full p-3 border rounded"
            />
            <select
              name="service_type"
              required
              className="w-full p-3 border rounded"
              defaultValue="Nettoyage Résidentiel"
            >
              <option>Nettoyage Résidentiel</option>
              <option>Nettoyage Commercial</option>
              <option>Nettoyage Industriel</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="w-full p-3 border rounded"
            />
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              {sending ? 'Envoi en cours...' : 'Envoyer le Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center mt-4">Message envoyé !</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center mt-4">
                Une erreur est survenue. Réessayez plus tard.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

export default function Contact() {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Contact</h1>
  
        <p className="text-lg mb-4">
          Pour toute question, suggestion ou demande de partenariat, n’hésitez pas à nous contacter :
        </p>
  
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm">
          <p className="text-lg font-semibold text-orange-700">📩 Email :</p>
          <a href="mailto:contact@clariosourcing.com" className="text-orange-600 hover:underline">
            contact@yapuka.app
          </a>
  
          <p className="mt-4 text-lg font-semibold text-orange-700">📍 Adresse :</p>
          <p>VISI’BOOST, France</p>
        </div>
  
        <p className="mt-8 text-sm text-gray-500">
          Temps de réponse moyen : sous 48h ouvrées.
        </p>
      </div>
    );
  }
  
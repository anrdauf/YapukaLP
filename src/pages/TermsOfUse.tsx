export default function TermsOfUse() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FFF5F0' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* Header with back button */}
        <div className="mb-8 md:mb-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 transition"
            aria-label="Retour à l'accueil"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
            Retour à l'accueil
          </a>
        </div>

        <h1 
          className="text-3xl md:text-4xl font-bold leading-tight mb-2"
          style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
        >
          Conditions d'Utilisation
        </h1>
        <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : janvier 2025</p>

        <div className="space-y-8 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {/* Section 1: Abonnements disponibles */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              1. Abonnements disponibles
            </h2>
            <p className="mb-4">
              YAPUKA propose les abonnements suivants pour accéder à toutes les fonctionnalités premium :
            </p>
            <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm mb-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-orange-700 mb-2">Yapuka Plus Mensuel</h3>
                  <p className="text-2xl font-bold" style={{ color: '#FF5733' }}>4,99 €/mois</p>
                  <p className="text-sm text-gray-600 mt-1">Accès à toutes les fonctionnalités premium</p>
                </div>
                <div className="border-t border-orange-100 pt-4">
                  <h3 className="text-lg font-semibold text-orange-700 mb-2">Yapuka Plus Annuel</h3>
                  <p className="text-2xl font-bold" style={{ color: '#FF5733' }}>39,99 €/an</p>
                  <p className="text-sm text-gray-600 mt-1">Économisez 2 mois par rapport à l'abonnement mensuel</p>
                </div>
              </div>
            </div>
            <p className="mb-4">
              Les abonnements incluent :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Recettes illimitées</li>
              <li>Import automatique depuis les réseaux sociaux</li>
              <li>Catégories intelligentes</li>
              <li>Export PDF</li>
              <li>Support prioritaire</li>
            </ul>
          </section>

          {/* Section 2: Essai gratuit */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              2. Essai gratuit
            </h2>
            <p className="mb-4">
              Tous les nouveaux utilisateurs bénéficient d'un <strong>essai gratuit de 7 jours</strong> pour découvrir 
              toutes les fonctionnalités de Yapuka Plus.
            </p>
            <p className="mb-4">
              À la fin de la période d'essai, votre abonnement se renouvelle automatiquement au tarif de l'offre choisie 
              (mensuel ou annuel), sauf si vous annulez au moins 24 heures avant la fin de la période d'essai.
            </p>
            <p className="mb-4">
              Aucun montant ne vous sera facturé pendant la période d'essai gratuit.
            </p>
          </section>

          {/* Section 3: Renouvellement automatique */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              3. Renouvellement automatique
            </h2>
            <p className="mb-4">
              Les abonnements Yapuka Plus se renouvellent <strong>automatiquement</strong> à la fin de chaque période 
              (mensuelle ou annuelle selon l'offre choisie).
            </p>
            <p className="mb-4">
              Le renouvellement se fait automatiquement sauf si vous annulez votre abonnement au moins 24 heures avant 
              la fin de la période en cours.
            </p>
            <p className="mb-4">
              Le montant de l'abonnement sera débité sur le compte Apple ID associé à votre appareil dans les 24 heures 
              précédant la fin de la période en cours.
            </p>
          </section>

          {/* Section 4: Annulation */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              4. Annulation
            </h2>
            <p className="mb-4">
              Vous pouvez annuler votre abonnement à tout moment, sans frais supplémentaires.
            </p>
            <p className="mb-4">
              <strong>Pour annuler votre abonnement :</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
              <li>Ouvrez les <strong>Réglages</strong> de votre iPhone ou iPad</li>
              <li>Appuyez sur votre nom en haut de l'écran</li>
              <li>Sélectionnez <strong>Abonnements</strong></li>
              <li>Trouvez <strong>Yapuka Plus</strong> dans la liste</li>
              <li>Appuyez sur <strong>Annuler l'abonnement</strong></li>
            </ol>
            <p className="mb-4">
              Vous continuerez à avoir accès aux fonctionnalités premium jusqu'à la fin de la période déjà payée. 
              Aucun remboursement ne sera effectué pour la période en cours.
            </p>
          </section>

          {/* Section 5: Politique de remboursement */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              5. Politique de remboursement
            </h2>
            <p className="mb-4">
              Les abonnements Yapuka Plus sont gérés via l'App Store d'Apple. La politique de remboursement suit 
              les conditions générales d'Apple.
            </p>
            <p className="mb-4">
              <strong>En général :</strong> les abonnements ne sont pas remboursables, sauf dans les cas suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Problème technique empêchant l'utilisation du service (sous réserve de vérification)</li>
              <li>Erreur de facturation manifeste</li>
              <li>Conformément à la politique de remboursement d'Apple pour les abonnements</li>
            </ul>
            <p className="mb-4">
              Pour toute demande de remboursement, contactez le support Apple via votre compte Apple ID ou 
              contactez-nous à <a href="mailto:contact@yapuka.app" className="text-orange-600 hover:underline">contact@yapuka.app</a>.
            </p>
          </section>

          {/* Section 6: EULA Apple */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              6. Accord de licence utilisateur final (EULA) Apple
            </h2>
            <p className="mb-4">
              L'utilisation de l'application YAPUKA est également régie par l'Accord de Licence Utilisateur Final 
              standard d'Apple pour les applications iOS.
            </p>
            <p className="mb-4">
              Vous pouvez consulter l'EULA Apple à l'adresse suivante :
            </p>
            <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
              <a 
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline break-all"
              >
                https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
              </a>
            </div>
          </section>

          {/* Section 7: Contact */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              7. Contact
            </h2>
            <p className="mb-4">
              Pour toute question concernant ces conditions d'utilisation ou votre abonnement :
            </p>
            <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
              <p className="text-lg font-semibold text-orange-700 mb-2">📩 Email :</p>
              <a href="mailto:contact@yapuka.app" className="text-orange-600 hover:underline">
                contact@yapuka.app
              </a>
              <p className="mt-4 text-lg font-semibold text-orange-700 mb-2">📍 Éditeur :</p>
              <p>VISI'BOOST, France</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}


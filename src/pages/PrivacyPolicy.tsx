export default function PrivacyPolicy() {
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
          Politique de Confidentialité
        </h1>
        <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : janvier 2025</p>

        <div className="space-y-8 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {/* Section 1: Quelles données on collecte */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              1. Quelles données nous collectons
            </h2>
            <p className="mb-4">
              YAPUKA collecte uniquement les données nécessaires au bon fonctionnement de l'application :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Données d'identification :</strong> adresse email, mot de passe chiffré</li>
              <li><strong>Recettes sauvegardées :</strong> contenu des recettes que vous importez ou créez dans l'application</li>
              <li><strong>Sources des recettes :</strong> liens vers les recettes importées depuis Instagram, TikTok, YouTube, Facebook, ou photos manuscrites</li>
              <li><strong>Données de préférences :</strong> catégories, favoris, listes de courses</li>
              <li><strong>Données techniques :</strong> type d'appareil, version de l'application, statistiques d'usage anonymisées</li>
            </ul>
          </section>

          {/* Section 2: Comment on utilise les données */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              2. Comment nous utilisons vos données
            </h2>
            <p className="mb-4">
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Synchronisation cloud :</strong> vos recettes sont synchronisées via Supabase pour être accessibles sur tous vos appareils</li>
              <li><strong>Amélioration de l'application :</strong> analyse anonyme de l'usage pour identifier les bugs et améliorer les fonctionnalités</li>
              <li><strong>Fonctionnement du service :</strong> traitement des recettes importées (extraction d'ingrédients, catégorisation automatique)</li>
              <li><strong>Support utilisateur :</strong> résolution des problèmes techniques et réponses à vos demandes</li>
            </ul>
          </section>

          {/* Section 3: Partage avec des tiers */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              3. Partage avec des tiers
            </h2>
            <p className="mb-4">
              <strong>Nous ne vendons JAMAIS vos données personnelles.</strong>
            </p>
            <p className="mb-4">
              Vos données peuvent être partagées uniquement avec :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Supabase :</strong> notre prestataire d'hébergement cloud pour la synchronisation de vos recettes. Supabase est conforme au RGPD et héberge les données dans l'Union Européenne.</li>
              <li><strong>Prestataires techniques :</strong> uniquement dans le cadre strict du fonctionnement du service (hébergement, maintenance)</li>
            </ul>
            <p className="mb-4">
              Aucune donnée n'est utilisée à des fins publicitaires ou revendue à des tiers.
            </p>
          </section>

          {/* Section 4: Stockage des données */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              4. Stockage des données
            </h2>
            <p className="mb-4">
              Vos données sont stockées de manière sécurisée :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Hébergement :</strong> Supabase (serveurs situés dans l'Union Européenne)</li>
              <li><strong>Sécurité :</strong> chiffrement des données en transit (HTTPS) et au repos, authentification sécurisée</li>
              <li><strong>Durée de conservation :</strong> vos données sont conservées tant que votre compte est actif. Vous pouvez supprimer votre compte à tout moment.</li>
            </ul>
          </section>

          {/* Section 5: Droits de l'utilisateur */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              5. Vos droits
            </h2>
            <p className="mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Droit d'accès :</strong> vous pouvez consulter toutes vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> vous pouvez corriger vos données incorrectes</li>
              <li><strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité :</strong> vous pouvez exporter vos données (recettes, préférences) dans un format lisible</li>
              <li><strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données</li>
            </ul>
            <p className="mb-4">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@yapuka.app" className="text-orange-600 hover:underline">contact@yapuka.app</a>
            </p>
          </section>

          {/* Section 6: Contact */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              6. Contact
            </h2>
            <p className="mb-4">
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :
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

          {/* Section 7: Modifications */}
          <section>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#FF5733', fontFamily: 'KronaOne, sans-serif' }}
            >
              7. Modifications de cette politique
            </h2>
            <p className="mb-4">
              Cette politique de confidentialité peut être mise à jour périodiquement. En cas de modification substantielle, 
              vous serez notifié dans l'application ou par email. La date de dernière mise à jour est indiquée en haut de cette page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}


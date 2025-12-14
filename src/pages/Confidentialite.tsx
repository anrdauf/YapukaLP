import { useEffect } from "react";

export default function Confidentialite() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href")?.substring(1);
        const targetEl = targetId ? document.getElementById(targetId) : null;

        if (targetEl) {
          e.preventDefault();
          window.scrollTo({
            top: targetEl.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.replaceWith(link.cloneNode(true));
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700"
            aria-label="Retour à l'accueil"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
            Retour à l'accueil
          </a>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
          Politique de Confidentialité
        </h1>
        <p className="text-sm text-gray-500">Dernière mise à jour : décembre 2024</p>

        <div className="mt-6 text-sm text-gray-700 space-y-1">
          <p>
            <strong>Éditeur :</strong> VISI'BOOST
          </p>
          <p>
            <strong>Contact :</strong>{" "}
            <a href="mailto:contact@yapuka.app" className="underline">
              contact@yapuka.app
            </a>
          </p>
        </div>

        {/* Sommaire */}
        <nav aria-label="Sommaire" className="mt-8 md:mt-10 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="font-semibold mb-3">Sommaire</h2>
          <ol className="grid sm:grid-cols-2 gap-y-2 text-sm list-decimal list-inside">
            <li><a className="hover:text-orange-600" href="#intro">Introduction</a></li>
            <li><a className="hover:text-orange-600" href="#data">Données collectées</a></li>
            <li><a className="hover:text-orange-600" href="#purpose">Finalité du traitement</a></li>
            <li><a className="hover:text-orange-600" href="#legal">Base légale</a></li>
            <li><a className="hover:text-orange-600" href="#sharing">Partage avec des tiers</a></li>
            <li><a className="hover:text-orange-600" href="#rights">Vos droits (RGPD)</a></li>
            <li><a className="hover:text-orange-600" href="#security">Sécurité</a></li>
            <li><a className="hover:text-orange-600" href="#updates">Modifications</a></li>
            <li><a className="hover:text-orange-600" href="#retention">Durée de conservation</a></li>
            <li><a className="hover:text-orange-600" href="#contact">Contact et réclamations</a></li>
          </ol>
        </nav>

        {/* Sections */}
        <section id="intro" className="prose prose-orange max-w-none">
          <h2>1. Introduction</h2>
          <p>
            VISI'BOOST, éditeur de l'application <strong>YAPUKA</strong>, s'engage à protéger la confidentialité de vos données
            personnelles. Cette politique explique quelles données nous collectons, pourquoi nous les utilisons, comment nous
            les protégeons et quels sont vos droits.
          </p>
          <p>
            YAPUKA est conforme au <strong>Règlement Général sur la Protection des Données (RGPD)</strong> et à la loi française
            Informatique et Libertés.
          </p>
        </section>

        <section id="data" className="prose prose-orange max-w-none mt-10">
          <h2>2. Données collectées</h2>
          <p>
            Nous collectons uniquement les données strictement nécessaires au bon fonctionnement du service :
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">2.1 Données de compte :</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Identifiant unique utilisateur (UUID, généré automatiquement)</li>
            <li>Email (uniquement si vous créez un compte via l'application)</li>
            <li>Mot de passe chiffré (algorithme bcrypt)</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4">2.2 Données de contenu :</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Recettes sauvegardées</strong> : titre, ingrédients, instructions, temps de préparation, source</li>
            <li><strong>URLs importées</strong> : liens vers recettes sur Instagram, TikTok, YouTube, Pinterest, Facebook</li>
            <li><strong>Photos manuscrites</strong> : stockées temporairement pour analyse OCR (supprimées après extraction)</li>
            <li><strong>Collections et catégories</strong> : organisations personnalisées de vos recettes</li>
            <li><strong>Listes de courses</strong> : ingrédients et quantités générées automatiquement</li>
            <li><strong>Planification de repas</strong> : calendrier de vos repas planifiés</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4">2.3 Données techniques :</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Version de l'application iOS</li>
            <li>Modèle d'appareil (iPhone, iPad)</li>
            <li>Version iOS</li>
            <li>Logs d'erreurs techniques (anonymisés, sans données personnelles)</li>
            <li>Statistiques d'usage anonymisées (nombre de recettes, fréquence d'utilisation)</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4">2.4 Données d'abonnement :</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Statut de l'abonnement (gratuit, Yapuka Plus mensuel, Yapuka Plus annuel)</li>
            <li>Date de souscription</li>
            <li>⚠️ Nous n'avons <strong>AUCUN accès</strong> à vos coordonnées bancaires (gérées par Apple)</li>
          </ul>

          <div className="bg-green-50 p-5 rounded-lg mt-6 border-l-4 border-green-400">
            <p className="font-bold mb-2">✅ Nous ne collectons JAMAIS :</p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>❌ Votre nom complet ou prénom</li>
              <li>❌ Votre adresse postale</li>
              <li>❌ Votre numéro de téléphone</li>
              <li>❌ Vos coordonnées bancaires ou cartes de crédit</li>
              <li>❌ Vos contacts</li>
              <li>❌ Votre localisation GPS précise</li>
              <li>❌ Vos messages privés sur les réseaux sociaux</li>
            </ul>
          </div>
        </section>

        <section id="purpose" className="prose prose-orange max-w-none mt-10">
          <h2>3. Finalité du traitement</h2>
          <p>
            Vos données sont utilisées <strong>exclusivement</strong> pour les finalités suivantes :
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">3.1 Fourniture du service :</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>✅ Synchroniser vos recettes entre tous vos appareils Apple (via iCloud/Supabase)</li>
            <li>✅ Importer automatiquement des recettes depuis les réseaux sociaux (Instagram, TikTok, YouTube, Pinterest, Facebook)</li>
            <li>✅ Extraire les ingrédients et instructions à partir de photos manuscrites (OCR avec IA)</li>
            <li>✅ Générer automatiquement vos listes de courses à partir des recettes sélectionnées</li>
            <li>✅ Planifier vos repas de la semaine</li>
            <li>✅ Catégoriser intelligemment vos recettes (type de plat, difficulté, régime alimentaire)</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4">3.2 Amélioration du produit :</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>✅ Corriger les bugs et erreurs techniques</li>
            <li>✅ Améliorer la précision de l'extraction IA des recettes</li>
            <li>✅ Développer de nouvelles fonctionnalités basées sur l'usage anonymisé</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4">3.3 Communication :</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>✅ Vous envoyer des notifications de rappel pour vos repas planifiés (si vous l'autorisez)</li>
            <li>✅ Vous informer des mises à jour majeures de l'application</li>
            <li>✅ Répondre à vos demandes de support</li>
          </ul>

          <div className="bg-red-50 p-5 rounded-lg mt-6 border-l-4 border-red-400">
            <p className="font-bold mb-2">❌ Nous n'utilisons JAMAIS vos données pour :</p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>❌ Publicité ciblée ou personnalisée</li>
              <li>❌ Revente à des tiers commerciaux</li>
              <li>❌ Profilage commercial ou marketing</li>
              <li>❌ Analyse comportementale à des fins commerciales</li>
              <li>❌ Partage avec des courtiers en données (data brokers)</li>
            </ul>
          </div>
        </section>

        <section id="legal" className="prose prose-orange max-w-none mt-10">
          <h2>4. Base légale</h2>
          <p>
            Le traitement de vos données repose sur les bases légales suivantes (selon le RGPD) :
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Exécution du contrat</strong> (Art. 6.1.b RGPD) : pour fournir les services de l'application (stockage de
              recettes, synchronisation, import automatique)
            </li>
            <li>
              <strong>Consentement</strong> (Art. 6.1.a RGPD) : pour l'envoi de notifications et communications non essentielles
            </li>
            <li>
              <strong>Intérêt légitime</strong> (Art. 6.1.f RGPD) : pour améliorer le service et corriger les bugs techniques
            </li>
          </ul>
        </section>

        <section id="sharing" className="prose prose-orange max-w-none mt-10">
          <h2>5. Partage avec des tiers</h2>
          <p>
            Nous ne vendons <strong>JAMAIS</strong> vos données personnelles à des tiers. Nous travaillons uniquement avec des
            partenaires techniques de confiance pour assurer le bon fonctionnement du service :
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">5.1 Supabase (Hébergement Cloud & Base de données)</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Rôle</strong> : Stockage sécurisé de vos recettes, collections et préférences</li>
            <li><strong>Localisation</strong> : Serveurs situés en <strong>Union Européenne</strong> (conformité RGPD)</li>
            <li><strong>Sécurité</strong> : Chiffrement TLS/SSL en transit, chiffrement AES-256 au repos</li>
            <li><strong>Politique</strong> : <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">https://supabase.com/privacy</a></li>
            <li><strong>Engagement</strong> : Supabase ne peut pas accéder à vos données ni les utiliser à d'autres fins</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4">5.2 OpenAI (Traitement IA pour extraction de recettes)</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Rôle</strong> : Extraction intelligente des ingrédients et instructions à partir de textes et images</li>
            <li><strong>Données envoyées</strong> : Textes de recettes et images (anonymisés, sans identifiant utilisateur)</li>
            <li><strong>Conservation</strong> : Aucun stockage permanent par OpenAI (traitement ponctuel)</li>
            <li><strong>Politique</strong> : <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">https://openai.com/privacy</a></li>
            <li><strong>Engagement</strong> : Les données sont supprimées après traitement (pas d'entraînement de modèles avec vos recettes)</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4">5.3 n8n (Automatisation du traitement des recettes)</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Rôle</strong> : Orchestration du flux de traitement des recettes importées</li>
            <li><strong>Localisation</strong> : Serveur privé hébergé en Europe</li>
            <li><strong>Données transitant</strong> : URLs de recettes et contenu extrait (temporaire)</li>
            <li><strong>Sécurité</strong> : Webhook sécurisé avec authentification par token</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4">5.4 Apple (Paiements & Synchronisation iCloud)</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Rôle</strong> : Gestion des abonnements, paiements et synchronisation iCloud (facultative)</li>
            <li><strong>Engagement</strong> : Nous n'avons <strong>AUCUN accès</strong> à vos coordonnées bancaires ni à vos informations de paiement</li>
            <li><strong>Politique</strong> : <a href="https://www.apple.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">https://www.apple.com/legal/privacy</a></li>
          </ul>

          <div className="bg-blue-50 p-5 rounded-lg mt-6 border-l-4 border-blue-400">
            <p className="font-bold mb-2">🔒 Engagement de transparence :</p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>❌ Nous ne vendons JAMAIS vos données à des tiers</li>
              <li>❌ Nous ne partageons JAMAIS vos recettes publiquement sans votre consentement</li>
              <li>❌ Nous ne faisons PAS de publicité dans l'application</li>
              <li>❌ Nous ne travaillons PAS avec des courtiers en données (data brokers)</li>
              <li>✅ Tous nos partenaires sont soumis à des accords de confidentialité stricts (DPA - Data Processing Agreements)</li>
            </ul>
          </div>
        </section>

        <section id="rights" className="prose prose-orange max-w-none mt-10">
          <h2>6. Vos droits (RGPD)</h2>
          <p>
            Conformément au <strong>Règlement Général sur la Protection des Données (RGPD)</strong>, vous disposez des droits
            suivants sur vos données personnelles :
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">6.1 Droit d'accès (Art. 15 RGPD)</h3>
          <p>
            Vous pouvez demander une copie complète de toutes vos données personnelles que nous détenons.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">6.2 Droit de rectification (Art. 16 RGPD)</h3>
          <p>
            Vous pouvez corriger ou mettre à jour vos données directement dans l'application ou en nous contactant.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">6.3 Droit de suppression / "Droit à l'oubli" (Art. 17 RGPD)</h3>
          <p>
            Vous pouvez supprimer votre compte et <strong>toutes vos données</strong> à tout moment :
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Depuis l'application</strong> : Profil &gt; Paramètres &gt; Supprimer mon compte</li>
            <li><strong>Par email</strong> : contact@yapuka.app</li>
          </ul>
          <div className="bg-yellow-50 p-4 rounded-lg mt-3 border-l-4 border-yellow-400">
            <p className="text-sm">
              <strong>⚠️ Attention</strong> : La suppression est <strong>définitive et irréversible</strong>. Toutes vos recettes,
              collections et préférences seront définitivement effacées sous 30 jours.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-6 mb-4">6.4 Droit à la portabilité (Art. 20 RGPD)</h3>
          <p>
            Vous pouvez exporter vos recettes dans un format lisible et réutilisable :
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Format PDF</strong> : Pour impression ou archivage</li>
            <li><strong>Format JSON</strong> : Pour import dans d'autres applications</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4">6.5 Droit d'opposition (Art. 21 RGPD)</h3>
          <p>
            Vous pouvez vous opposer au traitement de certaines données non essentielles (ex : statistiques d'usage anonymisées).
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">6.6 Droit à la limitation du traitement (Art. 18 RGPD)</h3>
          <p>
            Vous pouvez demander la suspension temporaire du traitement de vos données.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg mt-6 border border-gray-200">
            <h4 className="font-bold mb-3">📝 Pour exercer vos droits :</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 <strong>Email</strong> : contact@yapuka.app</li>
              <li>📝 <strong>Objet</strong> : "Demande RGPD - [Type de droit]"</li>
              <li>⏱️ <strong>Délai de réponse</strong> : Maximum <strong>30 jours</strong> (Article 12.3 RGPD)</li>
            </ul>
            <p className="mt-3 text-sm">
              <strong>Documents à fournir</strong> : Copie d'une pièce d'identité pour vérification (sécurité)
            </p>
          </div>
        </section>

        <section id="security" className="prose prose-orange max-w-none mt-10">
          <h2>7. Sécurité</h2>
          <p>
            Nous mettons en œuvre les mesures de sécurité suivantes pour protéger vos données :
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Chiffrement des communications</strong> : TLS/SSL pour toutes les connexions</li>
            <li><strong>Chiffrement des données au repos</strong> : AES-256 pour les données stockées</li>
            <li><strong>Mots de passe sécurisés</strong> : Hachage bcrypt avec sel unique</li>
            <li><strong>Accès limité</strong> : Seules les personnes autorisées ont accès aux serveurs</li>
            <li><strong>Monitoring 24/7</strong> : Surveillance active des intrusions et anomalies</li>
            <li><strong>Sauvegardes régulières</strong> : Backup automatique toutes les 24h</li>
          </ul>
          <p className="mt-4">
            Aucun système n'est infaillible à 100%. En cas de faille de sécurité affectant vos données, vous serez immédiatement
            informé conformément au RGPD (Article 33).
          </p>
        </section>

        <section id="updates" className="prose prose-orange max-w-none mt-10">
          <h2>8. Modifications</h2>
          <p>
            Nous pouvons modifier cette politique de confidentialité à tout moment. Toute modification importante vous sera
            notifiée par :
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Notification push dans l'application</li>
            <li>Email à l'adresse enregistrée</li>
            <li>Bannière visible sur le site web</li>
          </ul>
          <p className="mt-3">
            La date de "Dernière mise à jour" en haut de cette page indique la version en vigueur.
          </p>
        </section>

        <section id="retention" className="prose prose-orange max-w-none mt-10">
          <h2>9. Durée de conservation des données</h2>

          <h3 className="text-xl font-bold mt-6 mb-4">Données de compte actif :</h3>
          <p>
            <strong>Conservation</strong> : Tant que votre compte est actif et que vous utilisez l'application
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">Données après suppression de compte :</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Suppression définitive</strong> : <strong>30 jours maximum</strong> après demande de suppression</li>
            <li><strong>Période de grâce</strong> : 7 jours pour annuler la suppression (si demandée par erreur)</li>
            <li><strong>Après suppression</strong> : Aucune récupération possible</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4">Logs techniques et statistiques :</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Conservation</strong> : <strong>90 jours maximum</strong></li>
            <li><strong>Anonymisation</strong> : Immédiate (suppression de tout identifiant personnel)</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4">Données de facturation (Apple) :</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Gérées exclusivement par Apple selon leur politique de conservation</li>
            <li>VISI'BOOST n'a aucun accès à ces données</li>
          </ul>

          <div className="bg-gray-50 p-5 rounded-lg mt-4 border-l-4 border-gray-400">
            <p className="text-sm">
              <strong>⚖️ Obligation légale :</strong><br/>
              En cas d'obligation légale (ex : enquête judiciaire), certaines données peuvent être conservées au-delà de ces
              délais, conformément aux lois françaises et européennes.
            </p>
          </div>
        </section>

        <section id="contact" className="prose prose-orange max-w-none mt-10 mb-12">
          <h2>10. Contact et réclamations</h2>

          <h3 className="text-xl font-bold mt-6 mb-4">Questions sur vos données personnelles ?</h3>
          <p>
            📧 <strong>Email</strong> : contact@yapuka.app<br/>
            📍 <strong>Éditeur</strong> : VISI'BOOST, France
          </p>
          <p>
            Nous nous engageons à répondre à toutes vos questions dans un délai de <strong>48 heures ouvrées</strong>.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Réclamations auprès de la CNIL (France) :</h3>
          <p>
            Si vous estimez que vos droits ne sont pas respectés ou que le traitement de vos données n'est pas conforme au RGPD,
            vous pouvez déposer une réclamation auprès de la <strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong> :
          </p>
          <ul className="list-none space-y-2">
            <li>🌐 <strong>Site web</strong> : <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">https://www.cnil.fr/fr/plaintes</a></li>
            <li>📞 <strong>Téléphone</strong> : 01 53 73 22 22</li>
            <li>
              📮 <strong>Adresse postale</strong> :<br/>
              CNIL<br/>
              3 Place de Fontenoy<br/>
              TSA 80715<br/>
              75334 PARIS CEDEX 07<br/>
              France
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">Délégué à la Protection des Données (DPO) :</h3>
          <p>
            Pour toute question relative à la protection de vos données personnelles, vous pouvez contacter notre DPO à :
            <strong> contact@yapuka.app</strong> (objet : "DPO - Protection des données")
          </p>
        </section>
      </div>
    </main>
  );
}

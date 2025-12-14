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

          <p className="mb-4"><strong>Données de compte :</strong></p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Identifiant utilisateur unique</li>
            <li>Email (si compte créé)</li>
          </ul>

          <p className="mb-4"><strong>Données de contenu :</strong></p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Recettes sauvegardées (titre, ingrédients, instructions)</li>
            <li>URLs des recettes importées (Instagram, TikTok, YouTube, Pinterest, Facebook)</li>
            <li>Collections créées</li>
            <li>Listes de courses</li>
            <li>Planning de repas</li>
          </ul>

          <p className="mb-4"><strong>Données techniques :</strong></p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Version app</li>
            <li>Modèle appareil</li>
            <li>Logs d'erreurs (anonymisés)</li>
          </ul>

          <p className="mb-4"><strong>Non collecté :</strong></p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Coordonnées bancaires (gérées par Apple)</li>
            <li>Localisation GPS</li>
            <li>Contacts</li>
          </ul>
        </section>

        <section id="purpose" className="prose prose-orange max-w-none mt-10">
          <h2>3. Finalité du traitement</h2>

          <p className="mb-4">Vos données servent à :</p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Synchroniser vos recettes entre appareils</li>
            <li>Importer des recettes depuis réseaux sociaux</li>
            <li>Générer listes de courses automatiques</li>
            <li>Planifier vos repas</li>
            <li>Améliorer l'application (analyses anonymes)</li>
          </ul>

          <p className="mb-4">Nous n'utilisons PAS vos données pour :</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Publicité</li>
            <li>Revente à des tiers</li>
          </ul>
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
          <h2>5. Partage des données</h2>

          <p className="mb-4"><strong>Supabase (Hébergement) :</strong></p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Stockage de vos recettes</li>
            <li>Serveurs : Union Européenne</li>
            <li><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">https://supabase.com/privacy</a></li>
          </ul>

          <p className="mb-4"><strong>n8n (Traitement recettes) :</strong></p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Import automatique depuis réseaux sociaux</li>
            <li>Serveur privé Europe</li>
          </ul>

          <p className="mb-4"><strong>Apple (Paiements) :</strong></p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Gestion abonnements</li>
            <li>Nous n'avons pas accès à vos paiements</li>
            <li><a href="https://www.apple.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">https://www.apple.com/legal/privacy</a></li>
          </ul>

          <p>
            Nous ne vendons JAMAIS vos données.
          </p>
        </section>

        <section id="rights" className="prose prose-orange max-w-none mt-10">
          <h2>6. Vos droits (RGPD)</h2>

          <p className="mb-4"><strong>Droit d'accès :</strong> Demander copie de vos données</p>

          <p className="mb-4"><strong>Droit de suppression :</strong></p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Dans l'app : Profil &gt; Paramètres &gt; Supprimer compte</li>
            <li>Ou par email : contact@yapuka.app</li>
          </ul>

          <p className="mb-4"><strong>Droit de portabilité :</strong> Exporter vos recettes (PDF)</p>

          <p className="mb-4"><strong>Pour exercer vos droits :</strong></p>
          <p className="mb-2">📧 contact@yapuka.app</p>
          <p>Délai de réponse : 30 jours maximum</p>
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
          <h2>9. Durée de conservation</h2>

          <ul className="list-disc ml-6 space-y-1">
            <li>Compte actif : Tant que vous utilisez l'app</li>
            <li>Après suppression : 30 jours maximum</li>
            <li>Logs techniques : 90 jours</li>
          </ul>
        </section>

        <section id="contact" className="prose prose-orange max-w-none mt-10 mb-12">
          <h2>10. Contact et réclamations</h2>

          <p className="mb-4"><strong>Questions :</strong></p>
          <p className="mb-4">📧 contact@yapuka.app</p>

          <p className="mb-4"><strong>Réclamation CNIL :</strong></p>
          <p>
            Si vos droits ne sont pas respectés :<br/>
            <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">https://www.cnil.fr/fr/plaintes</a>
          </p>
        </section>
      </div>
    </main>
  );
}

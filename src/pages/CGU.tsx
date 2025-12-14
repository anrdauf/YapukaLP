import { useEffect } from "react";

export default function CGU() {
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
          Conditions Générales d'Utilisation et de Vente (CGU / CGV)
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
            <li><a className="hover:text-orange-600" href="#obj">Objet</a></li>
            <li><a className="hover:text-orange-600" href="#acc">Acceptation des Conditions</a></li>
            <li><a className="hover:text-orange-600" href="#accs">Accès au service</a></li>
            <li><a className="hover:text-orange-600" href="#cpt">Comptes et sécurité</a></li>
            <li><a className="hover:text-orange-600" href="#off">Offres et abonnements</a></li>
            <li><a className="hover:text-orange-600" href="#use">Utilisation des services</a></li>
            <li><a className="hover:text-orange-600" href="#cnt">Contenu utilisateur</a></li>
            <li><a className="hover:text-orange-600" href="#data">Données personnelles et confidentialité</a></li>
            <li><a className="hover:text-orange-600" href="#resp">Responsabilité</a></li>
            <li><a className="hover:text-orange-600" href="#ip">Propriété intellectuelle</a></li>
            <li><a className="hover:text-orange-600" href="#res">Résiliation</a></li>
            <li><a className="hover:text-orange-600" href="#int">Intégrations tierces</a></li>
            <li><a className="hover:text-orange-600" href="#law">Droit applicable et litiges</a></li>
            <li><a className="hover:text-orange-600" href="#contact">Contact</a></li>
          </ol>
        </nav>

        {/* Sections */}
        <section id="obj" className="prose prose-orange max-w-none">
          <h2>1. Objet</h2>
          <p>
            Les présentes Conditions Générales d'Utilisation et de Vente (ci-après les «&nbsp;Conditions&nbsp;») régissent
            l'accès et l'utilisation de l'application YAPUKA éditée par VISI'BOOST («&nbsp;l'Éditeur&nbsp;», «&nbsp;nous&nbsp;», «&nbsp;notre&nbsp;»),
            ainsi que les services proposés sur le site <strong>yapuka.app</strong> et via les applications mobiles associées.
          </p>
          <p>
            YAPUKA permet aux utilisateurs d'importer, d'organiser et de cuisiner leurs recettes préférées à partir de contenus
            issus de plateformes sociales (Instagram, TikTok, Facebook, YouTube, Pinterest) ou de photos manuscrites, et de générer
            automatiquement des listes de courses.
          </p>
        </section>

        <section id="acc" className="prose prose-orange max-w-none mt-10">
          <h2>2. Acceptation des Conditions</h2>
          <p>
            En accédant à YAPUKA ou en utilisant ses services, l'utilisateur reconnaît avoir lu, compris et accepté les présentes
            Conditions. Si vous n'acceptez pas ces Conditions, vous ne devez pas utiliser les Services.
          </p>
          <p>
            Les présentes Conditions peuvent être mises à jour à tout moment. L'utilisateur sera informé de toute modification
            substantielle par email ou notification dans l'application.
          </p>
        </section>

        <section id="accs" className="prose prose-orange max-w-none mt-10">
          <h2>3. Accès au service</h2>
          <ul>
            <li>L'accès à YAPUKA est ouvert à toute personne âgée de 13 ans ou plus.</li>
            <li>Certaines fonctionnalités peuvent être restreintes selon l'abonnement souscrit.</li>
            <li>YAPUKA est actuellement disponible en France uniquement.</li>
          </ul>
        </section>

        <section id="cpt" className="prose prose-orange max-w-none mt-10">
          <h2>4. Comptes et sécurité</h2>
          <p>
            Pour utiliser certaines fonctionnalités, l'utilisateur doit créer un compte via l'application mobile. L'utilisateur
            est responsable de la confidentialité de ses identifiants et des activités réalisées sous son compte.
          </p>
          <p>
            VISI'BOOST se réserve le droit de suspendre tout compte en cas d'utilisation frauduleuse, abusive ou contraire aux
            présentes Conditions.
          </p>
        </section>

        <section id="off" className="prose prose-orange max-w-none mt-10">
          <h2>5. Offres et abonnements</h2>

          <h3 className="text-xl font-bold mt-6 mb-4">5.1 Offres disponibles</h3>

          <div className="bg-gray-50 p-5 rounded-lg mb-4">
            <h4 className="font-bold text-lg mb-2">📦 Offre Gratuite :</h4>
            <ul className="list-disc ml-6 space-y-1">
              <li>Accès limité à 10 recettes</li>
              <li>Import manuel uniquement</li>
              <li><strong>Tarif : Gratuit</strong></li>
            </ul>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg mb-4 border-2 border-orange-200">
            <h4 className="font-bold text-lg mb-2">⭐ Yapuka Plus (Mensuel) :</h4>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Prix : 4,99 €/mois</strong></li>
              <li><strong>Durée : Abonnement mensuel</strong></li>
              <li><strong>Renouvellement : Automatique chaque mois</strong></li>
              <li><strong>Essai gratuit : AUCUN</strong> (paiement immédiat)</li>
              <li><strong>Avantages :</strong> Recettes illimitées, import automatique depuis Instagram/TikTok/YouTube/Pinterest, catégories intelligentes, scanner de recettes manuscrites, génération automatique de listes de courses, planification de repas, export PDF et support prioritaire.</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg mb-4 border-2 border-orange-200">
            <h4 className="font-bold text-lg mb-2">🏆 Yapuka Plus (Annuel) :</h4>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Prix : 39,99 €/an</strong> (soit <strong>3,33 €/mois</strong>)</li>
              <li><strong>Durée : Abonnement annuel</strong></li>
              <li><strong>Essai gratuit : 7 JOURS GRATUITS</strong></li>
              <li><strong>Renouvellement : Automatique chaque année</strong></li>
              <li><strong>Avantages :</strong> Mêmes avantages que l'offre Yapuka Plus mensuelle.</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg mb-4 border-l-4 border-yellow-400">
            <p className="font-bold mb-2">⚠️ Important - Essai gratuit (Plan Annuel uniquement) :</p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>L'essai gratuit de 7 jours s'applique <strong>UNIQUEMENT</strong> à l'abonnement annuel.</li>
              <li>Pendant l'essai, vous pouvez annuler à tout moment <strong>SANS être facturé</strong>.</li>
              <li>Si vous n'annulez pas avant la fin des 7 jours, le premier paiement de <strong>39,99 €</strong> sera effectué automatiquement le 8ème jour.</li>
              <li>L'abonnement mensuel ne bénéficie <strong>PAS</strong> d'essai gratuit : le paiement de 4,99 € est immédiat.</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">5.2 Paiement</h3>
          <p>
            Le paiement est géré exclusivement via l'<strong>App Store</strong> (Apple In-App Purchase). Aucun paiement ne transite directement
            sur le site ou les serveurs de VISI'BOOST.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">5.3 Renouvellement & Annulation</h3>

          <h4 className="font-semibold mt-4 mb-2">Renouvellement automatique :</h4>
          <p>Les abonnements Yapuka se renouvellent automatiquement selon la périodicité choisie :</p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Mensuel</strong> : Renouvellement tous les mois à la date d'anniversaire de souscription</li>
            <li><strong>Annuel</strong> : Renouvellement tous les ans à la date d'anniversaire de souscription</li>
          </ul>
          <p className="mt-3">
            Vous serez <strong>automatiquement facturé 24 heures avant</strong> la fin de votre période en cours, sauf si vous annulez votre abonnement avant cette échéance.
          </p>

          <h4 className="font-semibold mt-6 mb-2">Comment annuler votre abonnement :</h4>
          <p>Pour annuler votre abonnement Yapuka, suivez ces étapes sur votre iPhone ou iPad :</p>
          <ol className="list-decimal ml-6 space-y-2 mt-3">
            <li>Ouvrez l'application <strong>Réglages</strong> de votre appareil</li>
            <li>Appuyez sur <strong>votre nom</strong> en haut de l'écran</li>
            <li>Sélectionnez <strong>Abonnements</strong></li>
            <li>Choisissez <strong>Yapuka</strong> dans la liste</li>
            <li>Appuyez sur <strong>Annuler l'abonnement</strong></li>
            <li>Confirmez l'annulation</li>
          </ol>

          <h4 className="font-semibold mt-6 mb-2">Effet de l'annulation :</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>L'annulation prend effet <strong>à la fin de la période déjà payée</strong></li>
            <li>Vous conservez l'accès aux fonctionnalités Premium jusqu'à la date de fin</li>
            <li>Aucun remboursement n'est effectué pour les jours restants non utilisés</li>
            <li>Après expiration, votre compte repasse automatiquement en version gratuite (10 recettes max)</li>
          </ul>

          <h4 className="font-semibold mt-6 mb-2">Gestion des abonnements :</h4>
          <p>Tous les abonnements sont gérés <strong>exclusivement par Apple</strong> via l'App Store. VISI'BOOST :</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>❌ N'a AUCUN accès à vos informations de paiement</li>
            <li>❌ Ne peut PAS annuler votre abonnement à votre place</li>
            <li>❌ Ne peut PAS modifier votre mode de paiement</li>
            <li>❌ Ne peut PAS effectuer de remboursements directs</li>
          </ul>
          <p className="mt-3">Pour toute question sur votre abonnement, contactez le support Apple.</p>

          <h3 className="text-xl font-bold mt-8 mb-4">5.4 Droit de rétractation</h3>
          <p>
            Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux contenus
            numériques fournis immédiatement après l'achat avec l'accord du consommateur.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">5.5 Politique de remboursement</h3>

          <h4 className="font-semibold mt-4 mb-2">Tous les paiements sont gérés par Apple :</h4>
          <p>
            Les remboursements pour les achats effectués via l'App Store sont gérés exclusivement par Apple selon leur politique de remboursement. VISI'BOOST ne peut pas effectuer de remboursements directs car nous n'avons aucun accès à vos transactions de paiement.
          </p>

          <h4 className="font-semibold mt-6 mb-2">Demander un remboursement à Apple :</h4>
          <p>Si vous souhaitez demander un remboursement pour votre abonnement Yapuka :</p>
          <ol className="list-decimal ml-6 space-y-2 mt-3">
            <li>Rendez-vous sur : <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline font-semibold">https://reportaproblem.apple.com</a></li>
            <li>Connectez-vous avec votre <strong>Apple ID</strong></li>
            <li>Recherchez votre achat <strong>Yapuka</strong> dans la liste</li>
            <li>Cliquez sur <strong>"Signaler un problème"</strong></li>
            <li>Sélectionnez le motif de votre demande</li>
            <li>Suivez les instructions d'Apple</li>
          </ol>

          <h4 className="font-semibold mt-6 mb-2">Délais de traitement :</h4>
          <p>
            Les demandes de remboursement sont traitées par Apple sous 48 heures en moyenne. Apple décidera d'accorder ou non le remboursement selon leur politique.
          </p>

          <h4 className="font-semibold mt-6 mb-2">Politique de remboursement Apple :</h4>
          <p>
            Consultez la politique complète ici : <a href="https://support.apple.com/fr-fr/HT204084" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline font-semibold">https://support.apple.com/fr-fr/HT204084</a>
          </p>

          <div className="bg-yellow-50 p-5 rounded-lg mt-4 border-l-4 border-yellow-400">
            <p className="font-bold mb-2">⚠️ Important :</p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>Les remboursements ne sont PAS automatiques</li>
              <li>Apple évalue chaque demande au cas par cas</li>
              <li>Aucun remboursement partiel n'est possible pour les périodes d'abonnement non utilisées</li>
              <li>Une fois un remboursement accordé, votre accès Premium Yapuka est immédiatement révoqué</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">5.6 Licence Standard Apple (EULA)</h3>
          <p>
            L'utilisation de l'application Yapuka est également régie par la <strong>Licence d'Application Utilisateur Final Standard d'Apple</strong> (Apple Standard EULA).
          </p>
          <p className="mt-3">
            <strong>Consultez la licence complète ici :</strong><br/>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline font-semibold">https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</a>
          </p>
          <p className="mt-3">
            <strong>Ordre de priorité :</strong><br/>
            En cas de conflit entre les présentes Conditions Générales d'Utilisation et l'EULA Standard d'Apple, <strong>les termes de l'EULA Apple prévalent</strong>.
          </p>
          <p className="mt-3">
            Les présentes CGU complètent et précisent l'EULA Apple pour les aspects spécifiques à l'application Yapuka (abonnements, fonctionnalités, données utilisateur).
          </p>
        </section>

        <section id="use" className="prose prose-orange max-w-none mt-10">
          <h2>6. Utilisation des services</h2>
          <p>L'utilisateur s'engage à utiliser YAPUKA dans le respect des lois et de ces Conditions. Il est strictement interdit de&nbsp;:</p>
          <ul>
            <li>Republier publiquement du contenu provenant de réseaux sociaux sans autorisation.</li>
            <li>Utiliser l'application à des fins commerciales non autorisées.</li>
            <li>Extraire, scraper ou reproduire la base de données YAPUKA.</li>
          </ul>
        </section>

        <section id="cnt" className="prose prose-orange max-w-none mt-10">
          <h2>7. Contenu utilisateur</h2>
          <p>
            Les recettes importées (liens sociaux ou manuscrites) demeurent la propriété de leurs auteurs respectifs. L'utilisateur
            conserve la propriété de son contenu manuscrit ou importé, mais accorde à VISI'BOOST une licence technique limitée
            pour stocker, traiter et afficher ses données dans l'application.
          </p>
          <p>YAPUKA ne revend ni ne redistribue les données utilisateur à des tiers.</p>
        </section>

        <section id="data" className="prose prose-orange max-w-none mt-10">
          <h2>8. Données personnelles et confidentialité</h2>
          <p>
            VISI'BOOST collecte uniquement les données nécessaires au bon fonctionnement du service (identifiants, recettes,
            préférences). Les données ne sont jamais revendues ni utilisées à des fins publicitaires. L'application peut utiliser
            des modèles d'IA et d'OCR internes pour extraire les ingrédients et les étapes des recettes importées.
          </p>
          <p>
            Les utilisateurs peuvent exercer leurs droits (accès, suppression, portabilité) en écrivant à&nbsp;:
            <a href="mailto:contact@yapuka.app" className="underline"> contact@yapuka.app</a>.
          </p>
          <p>
            Pour plus d'informations, voir notre <a href="/confidentialite" className="underline font-semibold">Politique de Confidentialité</a>.
          </p>
        </section>

        <section id="resp" className="prose prose-orange max-w-none mt-10">
          <h2>9. Responsabilité</h2>
          <p>
            VISI'BOOST fournit le service «&nbsp;en l'état&nbsp;». Nous ne garantissons pas que le service sera exempt d'erreurs
            ou d'interruptions temporaires. VISI'BOOST ne pourra être tenu responsable d'un dommage indirect ou d'une perte liée
            à l'utilisation de YAPUKA.
          </p>
        </section>

        <section id="ip" className="prose prose-orange max-w-none mt-10">
          <h2>10. Propriété intellectuelle</h2>
          <p>
            Tous les éléments constitutifs du service (nom, logo, design, texte, code, visuels, structure de données, etc.)
            sont la propriété exclusive de VISI'BOOST. Toute reproduction, représentation, modification ou distribution sans
            autorisation écrite est strictement interdite.
          </p>
        </section>

        <section id="res" className="prose prose-orange max-w-none mt-10">
          <h2>11. Résiliation</h2>
          <p>
            L'utilisateur peut supprimer son compte à tout moment depuis l'application ou en écrivant à&nbsp;
            <a href="mailto:contact@yapuka.app" className="underline">contact@yapuka.app</a>.
            VISI'BOOST se réserve le droit de suspendre ou de supprimer un compte en cas de non-respect des présentes Conditions.
          </p>
        </section>

        <section id="int" className="prose prose-orange max-w-none mt-10">
          <h2>12. Intégrations tierces</h2>
          <p>
            YAPUKA permet d'importer du contenu depuis des services tiers (Instagram, TikTok, YouTube, Facebook, Pinterest). Ces intégrations
            nécessitent le respect des Conditions d'utilisation de chaque plateforme. VISI'BOOST n'est pas affilié ni approuvé
            par ces services tiers.
          </p>
        </section>

        <section id="law" className="prose prose-orange max-w-none mt-10">
          <h2>13. Droit applicable et litiges</h2>
          <p>
            Les présentes Conditions sont régies par le droit français. En cas de litige, et après échec d'une solution amiable,
            les tribunaux français seront seuls compétents.
          </p>
        </section>

        <section id="contact" className="prose prose-orange max-w-none mt-10 mb-12">
          <h2>14. Contact</h2>
          <p>
            Pour toute question relative à ces Conditions ou au service YAPUKA&nbsp;:
            <br />
            📧 <a href="mailto:contact@yapuka.app" className="underline">contact@yapuka.app</a>
            <br />
            📍 Éditeur : VISI'BOOST, France.
          </p>
        </section>
      </div>
    </main>
  );
}

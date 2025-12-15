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

          <p className="mb-4"><strong>Offre Gratuite :</strong></p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>10 recettes maximum</li>
            <li>Import manuel</li>
            <li>Tarif : Gratuit</li>
          </ul>

          <p className="mb-4"><strong>Yapuka Plus - Mensuel :</strong></p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li><strong>Prix : 4,99 €/mois</strong></li>
            <li><strong>Durée : 1 mois</strong></li>
            <li>Renouvellement automatique mensuel</li>
            <li><strong>Pas d'essai gratuit</strong> (paiement immédiat)</li>
            <li>Fonctionnalités : Recettes illimitées, import automatique depuis Instagram/TikTok/YouTube/Pinterest/Facebook, listes de courses automatiques, planification de repas.</li>
          </ul>

          <p className="mb-4"><strong>Yapuka Plus - Annuel :</strong></p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Prix : 39,99 €/an</strong> (soit 3,33 €/mois)</li>
            <li><strong>Durée : 1 an</strong></li>
            <li><strong>Essai gratuit : 7 jours</strong></li>
            <li>Renouvellement automatique annuel</li>
            <li>Mêmes fonctionnalités que l'offre mensuelle</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">5.2 Paiement</h3>
          <p>
            Le paiement est géré exclusivement via l'<strong>App Store</strong> (Apple In-App Purchase). Aucun paiement ne transite directement
            sur le site ou les serveurs de VISI'BOOST.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">5.3 Renouvellement & Annulation</h3>

          <p className="mb-4"><strong>Renouvellement :</strong></p>
          <p className="mb-4">
            Les abonnements se renouvellent automatiquement. Vous serez facturé 24h avant la fin de chaque période.
          </p>

          <p className="mb-4"><strong>Annulation :</strong></p>
          <p className="mb-2">Pour annuler :</p>
          <ol className="list-decimal ml-6 space-y-1 mb-4">
            <li>Réglages iOS &gt; Votre nom &gt; Abonnements</li>
            <li>Sélectionnez Yapuka</li>
            <li>Annuler l'abonnement</li>
          </ol>

          <p className="mb-4">
            L'annulation prend effet à la fin de la période payée. Aucun remboursement pour les jours restants.
          </p>

          <p className="mb-4"><strong>Gestion :</strong></p>
          <p>
            Les abonnements sont gérés par Apple. VISI'BOOST n'a aucun accès à vos paiements.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">5.4 Droit de rétractation</h3>
          <p>
            Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux contenus
            numériques fournis immédiatement après l'achat avec l'accord du consommateur.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">5.5 Remboursements</h3>

          <p className="mb-4">
            Les remboursements sont gérés par Apple.
          </p>

          <p className="mb-4">
            Pour demander un remboursement :<br/>
            <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">https://reportaproblem.apple.com</a>
          </p>

          <p>
            Politique Apple : <a href="https://support.apple.com/fr-fr/HT204084" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">https://support.apple.com/fr-fr/HT204084</a>
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">5.6 Licence Apple (EULA)</h3>
          <p className="mb-4">
            Ces conditions complètent la licence standard Apple :<br/>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</a>
          </p>
          <p>
            En cas de conflit, l'EULA Apple prévaut.
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
            🌐 <a href="https://www.yapuka.app/#/contact" className="underline">www.yapuka.app/#/contact</a>
            <br />
            📍 Éditeur : VISI'BOOST, France.
          </p>
        </section>
      </div>
    </main>
  );
}

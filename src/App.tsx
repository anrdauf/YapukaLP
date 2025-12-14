import { useEffect, useState } from "react";


/* ---------------- NAV ---------------- */
const NAV: { href: string; label: string }[] = [];

function NavBar({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50">
      {/* couche translucide “glass” + gradient très léger */}
      <div
        className={`border-b transition-shadow duration-300
        bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(253,186,116,0.18),transparent_50%),radial-gradient(1000px_600px_at_90%_-10%,rgba(251,146,60,0.14),transparent_55%)]
        bg-white/60 backdrop-blur-xl border-white/50
        ${scrolled ? "shadow-md" : "shadow-none"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 md:h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Yapuka" className="h-10 md:h-12 w-auto" />
            </a>

            {/* Menu desktop (vide) */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="relative px-2 py-1 rounded-lg text-gray-700 hover:text-gray-900 transition
                             hover:bg-white/40 after:absolute after:left-1/2 after:-translate-x-1/2
                             after:-bottom-1 after:h-0.5 after:w-0 after:rounded-full
                             after:bg-gradient-to-r after:from-orange-400 after:to-orange-500
                             hover:after:w-3/4 after:transition-all"
                >
                  {it.label}
                </a>
              ))}
            </div>

            {/* Actions desktop : badge App Store uniquement */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://apps.apple.com/fr/app/yapuka/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label="Télécharger sur l’App Store"
              >
                <img
                  src="/badges/appstore-badge.svg"
                  alt="Disponible sur l’App Store"
                  className="h-9 w-auto hover:opacity-90 transition"
                />
              </a>
            </div>

            {/* Bouton mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Ouvrir le menu"
              className="md:hidden p-2 rounded-lg hover:bg-white/50 transition"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Drawer mobile : badge App Store uniquement */}
      {mobileOpen && (
        <div className="md:hidden border-b bg-white/95 backdrop-blur-xl border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-3">
            <a
              href="https://apps.apple.com/fr/app/yapuka/id1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="Télécharger sur l’App Store"
            >
              <img
                src="/badges/appstore-badge.svg"
                alt="Disponible sur l’App Store"
                className="h-11 w-auto mx-auto hover:opacity-90 transition"
              />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ---------------- APP ---------------- */
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* Scroll-reveal */
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) el.classList.add("is-visible");
          else el.classList.remove("is-visible");
        }),
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* NAV */}
      <NavBar mobileOpen={mobileMenuOpen} setMobileOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche : texte */}
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-orange-200 rounded-full text-sm mb-6">
                <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                <span className="text-gray-700">
                  Nouveau : import depuis Instagram, TikTok, Pinterest, YouTube
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Toutes vos recettes au même endroit
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Importez, organisez et cuisinez vos recettes préférées depuis vos réseaux sociaux favoris en un clic.
              </p>

              {/* CTA unique : badge App Store */}
              <a
                href="https://apps.apple.com/fr/app/yapuka/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="Télécharger sur l’App Store"
              >
                <img
                  src="/badges/appstore-badge.svg"
                  alt="Disponible sur l’App Store"
                  className="h-12 w-auto hover:opacity-90 transition"
                />
              </a>
            </div>

            {/* Colonne droite : image seule, sans fond blanc */}
            <div className="relative reveal flex justify-center md:justify-end">
              {/* halo orangé subtil */}
              <div className="absolute -z-10 top-1/2 right-1/2 md:right-0 md:translate-x-1/4 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-orange-200/40 blur-3xl rounded-full"></div>

              <img
                src="/mockup.svg"
                alt="Aperçu de l'application Yapuka"
                className="w-[120%] md:w-[100%] h-auto object-contain drop-shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES (inchangé visuel) */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tout ce qu'il vous faut pour cuisiner
            </h2>
            <p className="text-xl text-gray-600">
              Des fonctionnalités pensées pour simplifier votre cuisine au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                ),
                title: "Import en 1 clic",
                description:
                  "Collez simplement le lien de votre recette et YAPUKA fait le reste automatiquement.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                ),
                title: "Classement automatique",
                description:
                  "Vos recettes sont organisées par catégories intelligentes pour les retrouver facilement.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: "Listes de courses",
                description:
                  "Générez automatiquement votre liste de courses depuis vos recettes sélectionnées.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                ),
                title: "Mode cuisine",
                description:
                  "Interface épurée et étapes détachables pour cuisiner sans stress.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="reveal p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition group hover:bg-orange-50"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* FOOTER */}
<footer className="bg-gray-900 text-gray-300 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 mb-12 items-start">
      {/* Colonne gauche */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <img src="/logobl.svg" alt="Yapuka logo" className="h-8 w-auto" />
        </div>
        <p className="text-sm text-gray-400 max-w-sm">
          L'application qui simplifie votre cuisine au quotidien en centralisant
          toutes vos recettes préférées.
        </p>
      </div>

      {/* Colonne droite */}
      <div className="flex flex-col md:items-end gap-6">
        <div>
          <h3 className="font-bold text-white mb-4">Légal</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/cgu" className="hover:text-orange-500 transition">Conditions d'utilisation</a></li>
            <li><a href="/confidentialite" className="hover:text-orange-500 transition">Politique de confidentialité</a></li>
            <li><a href="/contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Nos réseaux */}
        <div className="pt-4 text-right">
          <span className="block text-sm font-medium text-gray-400 mb-2">
            Nos réseaux :
          </span>
          <div className="flex justify-end gap-4">
            <a
              href="https://instagram.com/yapuka.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src="/public/socials/instagram.svg" alt="Instagram" className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src="/public/socials/x.svg" alt="X / Twitter" className="h-6 w-6" />
            </a>
            <a
              href="https://tiktok.com/yapuka.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src="/public/socials/tiktok.svg" alt="TikTok" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bas de page */}
    <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-gray-400">© 2025 YAPUKA. Tous droits réservés.</p>
    </div>
  </div>
</footer>



     
    </div>
  );
}

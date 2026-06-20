# Rapport final

## Fichiers modifiés

- `.gitignore`
- `components/Header.tsx`
- `components/ProjectGallery.tsx`
- `lib/seo.ts`
- `next.config.mjs`
- `package.json`

## Fichiers créés

- `.env.example`
- `DEPLOY_VERCEL.md`
- `PRODUCTION_AUDIT.md`

## Optimisations appliquées

- Configuration Next.js compatible Vercel avec `compress`, `poweredByHeader: false`, `reactStrictMode` et formats images AVIF/WebP.
- Cache long pour les assets image servis depuis `public/`.
- Headers de sécurité : `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`.
- URL canonique configurable via `NEXT_PUBLIC_SITE_URL`, avec fallback Vercel et domaine de production.
- Sitemap, robots, Open Graph, Twitter Cards et Schema.org déjà présents et conservés.
- Navigation desktop améliorée au clavier avec `group-focus-within`.
- Lightbox portfolio enrichie avec labels accessibles.
- Exclusion Git des artefacts générés : `.next`, `node_modules`, `.vercel`, `tsconfig.tsbuildinfo`, `.env`.
- Script `typecheck` fiabilisé avec `next typegen && tsc --noEmit` pour les routes typées Next.js.

## Score Lighthouse attendu

- Performance : 90+
- Accessibilité : 90+
- Bonnes pratiques : 90+
- SEO : 95+

Le score réel dépendra surtout du réseau, des images distantes Unsplash et du domaine de production.

## Étapes de déploiement

1. Initialiser ou connecter le dépôt GitHub.
2. Pousser la branche principale sur GitHub.
3. Importer le projet dans Vercel.
4. Configurer `NEXT_PUBLIC_SITE_URL`.
5. Lancer le build Vercel.
6. Ajouter le domaine personnalisé et configurer les DNS.

## Audit

- Aucun secret détecté dans le code source.
- Aucune variable serveur privée requise pour l'état actuel du site.
- Le projet utilise Next.js 15, App Router, React 19, `next/image`, `next/font`, sitemap et robots natifs.
- `vercel.json` n'a pas été créé : la configuration Vercel par défaut suffit pour ce projet Next.js.
- `npm run typecheck`, `npm run lint` et `npm run build` passent localement.
- `npm audit --omit=dev` signale une vulnérabilité transitive dans Next.js 15.5.19. La correction automatique proposée par npm est incorrecte pour ce projet car elle suggère un changement cassant. Le projet reste volontairement sur Next 15, conformément au cahier des charges.
- Le build local Windows affiche un warning SWC natif et utilise le fallback WASM. Ce point est lié au binaire Windows local ; Vercel reconstruit les dépendances sur Linux et ne devrait pas réutiliser ce binaire.

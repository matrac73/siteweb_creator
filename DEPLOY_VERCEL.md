# Installation

npm install

# Lancement local

npm run dev

# Build

npm run build

# Déploiement Vercel

npm install -g vercel

vercel login

vercel

# Production

vercel --prod

# Variables d'environnement

Configurer dans Vercel Project Settings > Environment Variables :

- `NEXT_PUBLIC_SITE_URL` : URL canonique publique du site, par exemple `https://www.essencesdart-albertville.fr`.

Aucune variable serveur privée n'est requise actuellement. Ne jamais commiter de fichier `.env`.

# Domaine personnalisé

Dans Vercel Project Settings > Domains :

1. Ajouter le domaine personnalisé, par exemple `essencesdart-albertville.fr`.
2. Ajouter aussi `www.essencesdart-albertville.fr` si le domaine www doit répondre.
3. Choisir le domaine canonique dans Vercel.
4. Mettre `NEXT_PUBLIC_SITE_URL` à jour avec ce domaine canonique.

# Configuration DNS

Chez le registrar DNS :

- Pour le domaine racine, créer un enregistrement `A` vers l'adresse IP fournie par Vercel.
- Pour `www`, créer un enregistrement `CNAME` vers la cible fournie par Vercel.
- Supprimer les anciens enregistrements conflictuels si Vercel les signale.
- Attendre la propagation DNS, puis vérifier le statut HTTPS dans Vercel.

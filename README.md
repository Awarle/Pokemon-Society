# POKEMON SOCIETY
# Objectifs
Introduction au concept d'API
route
contrôleur
modèle
CRUD (Create, Read, Update, Delete)
Manipuler, requêter et modifier une base de donnée
Comprendre les verbes/methodes/code retours HTTP
# Etape 1 : Introduction - Mission pour la Pokémon Society

# Consignes
Bienvenue, jeune chercheur, dans la prestigieuse Pokémon Society ! En rejoignant cette équipe, vous recevez votre “Starter Kit” : un ensemble d'outils et de consignes pour construire le Pokédex Numérique Ultime, une API (Application Programming Interface) qui documentera et rendra accessibles toutes les informations vitales sur les Pokémon aux chercheurs et dresseurs du monde entier. Ce projet est de haute importance, et votre mission est de configurer un environnement sécurisé et professionnel pour manipuler les données confidentielles de la Pokémon Society.

Commencez par initialiser le projet avec npm init -y, posant ainsi les fondations de votre API, puis installez les outils essentiels pour un développement robuste : express pour gérer les requêtes HTTP, typescript pour assurer la sécurité du code, mysql2 pour la connexion à la base de données, et dotenv pour sécuriser les informations sensibles dans un fichier .env. Ce fichier .env renfermera vos “Badges de Savoir”, des clés d’accès vitales aux données secrètes de la Society. Par exemple, DB_PASSWORD devient le “Badge de Savoir : code_du_professeur_oak”, vous permettant d'accéder aux données les plus rares de la base.

Pour faciliter le développement, configurez également des scripts pour l’exécution de votre application :

Script de Watcher : Créez un script npm run dev pour démarrer l'application en mode développement. Installez nodemon pour surveiller les changements de fichiers, et dans le fichier package.json, ajoutez "dev": "nodemon src/index.ts", permettant à l'application de se recharger automatiquement à chaque modification.

Script de Build : Ajoutez un script npm run build pour compiler le code TypeScript en JavaScript en production. Dans package.json, spécifiez "build": "tsc" pour générer le dossier dist contenant le code JavaScript compilé.

Script de Lancement en Mode Production : Ajoutez le script npm start pour exécuter l’application compilée sans surveillance. Configurez "start": "node dist/index.js" pour lancer l'API directement en production.

Pour une gestion professionnelle des logs, utilisez un logger comme winston. Installez-le via npm et configurez-le dans un fichier logger.ts pour créer des logs propres et détaillés à chaque étape. Configurez winston pour enregistrer des messages de démarrage de serveur exemple (logger.info("Serveur démarré sur le port 8080")) et de connexion à la base de données (logger.info("Connexion réussie à la base de données MySQL")), facilitant ainsi le suivi de l’état de l’application et la gestion des erreurs. Dans le fichier principal (index.ts), configurez votre application pour écouter sur le port 8080 en utilisant app.listen(8080).

Grâce à ces scripts d’exécution et au logger configuré, vous disposerez d’un environnement de développement stable et fiable, essentiel pour l’accomplissement de votre mission. À vous de relever le défi et d’offrir à la Pokémon Society un Pokédex digital exemplaire !

Ressources
express
Nodemon
winston
mysql2
dotenv

# Etape 2 : Système de Navigation - Routes d’Exploration de Données Pokémon
# Consignes
Félicitations, jeune chercheur, pour avoir accompli la première étape !

Vous êtes désormais prêt à débuter une nouvelle quête :

construire le Système de Navigation de votre Pokédex Numérique Ultime, un réseau de routes qui permettra d’explorer toutes les informations vitales sur les Pokémon,leurs types, leurs mouvements, et les objets.

Le Conseil des 4 papayes exige que ce système soit clair et organisé, prêt à être utilisé par tout dresseur en quête de savoir.

Commencez par organiser le projet en territoires :

1 - les routes contiendront les chemins d’accès aux données
2 - les contrôleurs traiteront les requêtes pour chaque route
3 - les modèles géreront les interactions avec les données de la base
4 - les types structureront les définitions des entités Pokémon.

Dans les routes, ouvrez les premiers chemins d’accès du Pokédex :

une route de base pour les Pokémon et une autre pour les types. Définissez deux points d'accès sur la route des Pokémon,

l'une pour consulter la liste complète et l'autre pour les détails d’un Pokémon choisi, et faites de même pour les types afin de fournir une liste et des informations détaillées.

Puis, dans les contrôleurs, créez des fonctions qui répondront aux requêtes en collectant les informations depuis la base, formant le cœur de votre système d’exploration.

Ensuite, dans le territoire principal de l'application (main.ts), connectez les routes aux fondations du Pokédex afin de garantir que chaque chemin d'accès mène à une information précise,
empruntable par tous les chercheurs. Enfin, testez votre système en utilisant des outils comme Postman ou curl pour vérifier que chaque chemin fonctionne correctement, que la liste des Pokémon,

les détails d’un Pokémon, la liste des types et les informations sur un type sont bien accessibles.

Considérez chaque route comme une Mission d’Exploration :

chaque requête réussie enrichit votre quête de connaissance, chaque donnée collectée ajoutant une page précieuse au Pokédex.

Ces routes ouvrent ainsi la voie vers des connaissances mystérieuses consignées pour la Pokémon Society.

Ressources
Http status codes
Https verbs

# Etape 3 : Interpréter les Secrets Ancestraux - Modélisation des Relations
# Consignes
Félicitations pour vos progrès, chercheur de la Pokémon Society !

Vous êtes maintenant prêt pour l’Étape 3, une quête cruciale où vous allez percer les secrets ancestraux des Pokémon en établissant les relations entre les entités de votre Pokédex Numérique Ultime.

Cette étape consiste à découvrir et modéliser les connexions qui existent entre les Pokémon, leurs types, leurs mouvements, et leurs compatibilités d'élevage, un travail de précision qui transformera votre API en véritable encyclopédie vivante.

Commencez par créer des modèles pour les tables de votre base de données nécessaire pour définir les relations suivantes :

Association des Pokémons et leurs types
Association des Pokémons et leur mouvements
Association des Pokémons et leur groupes d’œufs.
Une fois les modèles définis, implémentez les fonctions dans les contrôleurs qui pourront interroger ces relations, permettant ainsi à votre API d’extraire des données liées, par exemple, les mouvements spécifiques que chaque Pokémon peut apprendre, ou encore les types auxquels ils appartiennent. Dans votre quête de précision, utilisez les techniques de jointures pour assembler les informations provenant de différentes tables et ainsi révéler des relations complexes.
Ce travail vous permettra de déployer de véritables liens de parenté et d’affinités.

Assurez-vous que ces connexions fonctionnent en testant chaque association de manière rigoureuse, car chaque relation entre les entités de votre Pokédex doit être solide et précise.

Considérez ces relations comme des “liens mystiques” dans la généalogie Pokémon, chaque requête réussie dévoilant des secrets ancestraux que seuls les plus grands chercheurs de la Pokémon Society pourront comprendre et consigner.

En maîtrisant les relations complexes de cette étape, vous enrichirez votre Pokédex d’une profondeur inégalée,
rendant l’exploration des Pokémon encore plus fascinante pour toute la communauté !

# Etape 4 : Gestion des Points d’Accès Avancés et des Opérations CRUD
# Consignes
Bravo, chercheur !

Vous avez brillamment progressé, et voici l’Étape 4, une quête de haut niveau où vous devrez approfondir vos connaissances et maîtriser les liens complexes entre les entités de votre Pokédex Numérique Ultime.

Votre mission est de créer des points d’accès avancés – des endpoints capables de naviguer dans les relations établies, et de fournir des informations détaillées sur les affinités, mouvements, et capacités des Pokémon.

Mais, ce n’est pas tout ! Pour cette étape, vous allez également implémenter des fonctionnalités de gestion des données, permettant la création, la mise à jour, et la suppression (CRUD) d’un élément spécifique du Pokédex, comme un type, un mouvement, ou un objet.

Commencez par concevoir des chemins d'accès spécifiques.

Par exemple, une route pour récupérer tous les mouvements d’un Pokémon, une autre pour découvrir ses types, et encore une autre pour ajouter un nouveau type, mettre à jour ses caractéristiques ou le supprimer.

Dans les contrôleurs, créez des fonctions qui interrogeront les relations et renverront des données enrichies, tout en ajoutant les fonctionnalités CRUD.

Utilisez des filtres avancés et des jointures pour affiner vos requêtes et extraire des informations essentielles, comme les affinités de type, les compétences spéciales et les caractéristiques propres à certains groupes de Pokémon.

Pour la gestion des données, créez des endpoints RESTful comme suit :

POST pour créer un nouvel élément, par exemple un type ou un mouvement.
PUT pour mettre à jour les caractéristiques d'un élément existant.
DELETE pour supprimer un élément de la base de données, tel qu'un type obsolète ou un mouvement.
Testez soigneusement chaque point d’accès et chaque opération CRUD pour garantir des réponses complètes et une gestion fiable des données.

Visualisez ces points d’accès comme des “portails de connaissances” : chaque requête révèle un pan de la complexité des Pokémon, dévoilant les secrets de leurs capacités, de leurs relations, et permettant une gestion active de l’information.

En maîtrisant cet art d’interrogation et de gestion avancées, vous offrez à la Pokémon Society un outil d’une puissance inestimable, capable de rendre l’étude des Pokémon plus immersive et fascinante que jamais pour les chercheurs du monde entier !

# Attention
Voir les codes de réponse Http que vous devez avoir en tête

- code 200 ok
- code 201 created
- code 204 no content

- code 400 bad request
- code 404 not found
- code 409 conflict

- code 500 internal server error
# BONUS 1 : Protéger le Pokédex et Défier la Team Rocket
# Consignes
Bravo, chercheur dévoué, vous êtes maintenant prêt pour l’Étape 6,
l’ultime mission où vous protégerez votre Pokédex Numérique Ultime afin de le partager avec le monde tout en le protégeant contre les menaces !

Cette étape cruciale consiste à sécuriser votre API et à la préparer pour sa mise en ligne, en garantissant que seules les personnes autorisées peuvent accéder aux données sensibles.

Commencez par implémenter une authentification avec des JSON Web Tokens (JWT) pour que seuls les dresseurs et chercheurs ayant un accès spécial puissent utiliser certaines routes de votre API.

Ajoutez des middlewares de sécurité pour filtrer les accès et assurer que les informations critiques ne tombent pas entre de mauvaises mains, notamment la redoutable Team Rocket.

Configurez également des logs complets avec des informations claires sur le démarrage de l’application et la connexion à la base de données, permettant ainsi de suivre l’activité et de détecter rapidement toute tentative de manipulation suspecte.

En sécurisant ce Pokédex, vous ouvrez la voie à une nouvelle ère de recherches Pokémon, où tout dresseur digne de ce nom pourra y accéder en toute sécurité.

Avec cette dernière étape, vous avez accompli votre mission et offert à la Pokémon Society un outil inestimable, prêt à éclairer les mystères des Pokémon pour le monde entier !

# BONUS 2 : Illuminer le Pokédex - La Galerie Vivante des Pokémon
# Consignes
Félicitations, chercheur de la Pokémon Society !

Vous avez accompli un travail extraordinaire, et voici l’Étape Bonus,
une mission spéciale pour donner vie à votre Pokédex Numérique Ultime avec une interface visuelle immersive.

Cette étape consiste à créer un mini Pokédex en ligne, un portail interactif permettant aux chercheurs et dresseurs de consulter les informations sur les Pokémon, leurs types, et leurs mouvements en naviguant directement sur une interface web.

Commencez par installer et configurer un moteur de templates, tel que EJS ou Pug, pour transformer les données de l’API en pages visuelles.

Concevez une page d’accueil, une “Galerie du Pokédex”, où chaque Pokémon sera représenté par une carte affichant son nom et son image
les utilisateurs pourront cliquer pour en découvrir davantage.

Créez ensuite une page de Détails Pokémon pour chaque créature, affichant ses types, ses statistiques et ses mouvements afin d’offrir une expérience de consultation complète.

Intégrez des fonctionnalités de pagination pour faciliter la navigation et permettez aux utilisateurs de filtrer les Pokémon par type ou affinité.

En ajoutant un peu de style CSS, donnez vie à chaque page avec un design inspiré des cartes Pokémon, et pour plus d’interactivité, utilisez un peu de JavaScript pour rendre l’expérience plus fluide.

Cette interface est le point d’aboutissement de votre Pokédex Numérique Ultime, un guide en ligne complet pour tous les dresseurs et chercheurs de la Pokémon Society, leur permettant de parcourir les données Pokémon comme s’ils lisaient les pages d’une encyclopédie vivante.

Avec cette ultime mission, vous avez non seulement créé un outil de recherche puissant, mais aussi une expérience immersive et unique qui marquera l’histoire de la Pokémon Society !

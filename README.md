# Clean Code MOC

[Sujet](https://gist.github.com/CaptpBdcht/9192a868457a1003edda6687893a92b6)

L'objectif de cet exercice est de commencer à créer le coeur applicatif (business) d'un RPG.  
Commencez par former un groupe de 2.
Créez ensuite la branche pour votre projet:

````
git checkout -b examen-nom1-nom2
git push --set-upstream origin examen-nom1-nom2
````

L'ensemble de l'examen devra être réalisé en pair programming.  
Si vous developpez seul à un moment, vous **DEVEZ** créer une [PR (pull request)](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests) qui **DOIT** être validée par votre binôme avant d'être mergée.  
En effet, aucun morceau de code ne devrait être connu que d'un seul développeur.  

Le code doit:
  - être correctement **testé**, i.e. vous devez être en mesure d'expliquer comment fonctionnent les tests présents, pourquoi ils sont pertinents, mais aussi d'expliquer pourquoi vous n'avez pas estimé pertinent de tester ce que vous n'avez pas testé
  - être correctement indenté, mettez-vous d'accord en amont sur des normes de code et tenez-vous-y
  - être correctement structuré, ne mettez pas tout dans un seul fichier et séparez bien les classes par responsabilité
  - être lisible, choisissez la langue dans laquelle vous développez et tenez-vous-y ; aussi discutez régulièrement le nom des variables que vous donnez avec votre binôme: soyez au plus proche du **métier** 
  - posséder un README.md expliquant **précisément** comment lancer vos tests : partez du principe qu'un développeur lambda doit pouvoir checkout sur votre branche et suivre votre tutoriel pour lancer les tests - ce qui signifie que vous devez préciser s'il y a des choses à installer pour que ça tourne. Néanmoins n'oubliez pas que clean code rime avec "make dependencies minimal"

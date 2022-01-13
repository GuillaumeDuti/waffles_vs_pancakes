# waffles_vs_pancakes

## Principe de jeu

Il y a N (random) clients (10-30 pers) qui ont chaqun N (random) argents (5-20€) tous les jours et une envie particulière Gauffres/Crêpes.
La foire du Rio dure une semaine (7j).

Au début de la partie, on détermine avec notre chiffre d'affaire (fixe) les caractéristiques du bizz.

Après chaque jour, on determine la nouvelle stratégie pour le lendemain :
- remplissage des stocks
- prix de ventes
- promos
- (capital restant pour le prochain tour)

(Les éléments magasin cité plus haut sont générés aléatoirement pour le magasin adverse)

Si un des magasins fait faillite avant les 7 jours => fin de la partie
Au bout des 7 jours (ou dans le cas de la faillite) c'est le plus riche magasin qui gagne

- magasins
    - nom
    - chiffres d'affaires
    - produits
        - nom
        - coût fabrication (premier temps fixe)
        - prix de ventes
        - stock
        - peremptions (dans premier temps 1 jour)
    - promo (ex : 1+1)
    - prix de l'emplacement (fixe)

- clients
    - portefeuille
    - envie (45% vs 55%)






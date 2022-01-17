import Shop from './src/models/Shop.js';
import Product from './src/models/Product.js';
import Client from './src/models/Client.js';

// créer la structure Orienté Objets

    // - magasins
    //     - nom
    //     - chiffres d'affaires
    //     - produits
    //         - nom
    //         - coût fabrication (premier temps fixe)
    //         - prix de ventes
    //         - stock
    //         - peremptions (dans premier temps 2 jour)
    //     - promo (ex : 1+1)
    //     - prix de l'emplacement (fixe)

    // - clients
    //     - portefeuille
    //     - envie (45% vs 55%)

// créer la logique mathematique

// créer la structure html ==>
    // dynamiser les info d'une page à l'autre
    // prévoir le formulaire qui permet à chaque tour les choix Bizz pour le jour suivant
    // paufiner les forms...
    // visualisé les stats de vente de chaque jour + la semaine déjà écoulé (les deux magasins qui s'affrontent)

// créer le css pour l'html

// connecter html et js

const shop = new Shop()

shop.addProduct(new Product("gauffre", 0.3, 3.0, 10));

console.log(shop.getProducts()[0]);
console.log(shop.money);

shop.sellProductByName('gauffre');

console.log(shop.getProducts()[0]);
console.log(shop.money);

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

const promos = [
    {
        id: 'one+one',
        name: '1+1 Gratuit!'
    },
    {
        id: 'second-half',
        name: '2ème à moitié prix'
    }
]

shop.addProduct(new Product("gauffre", 0.3, 3.0, 10));

// Test First Promo
// shop.setCurrentPromo(promos[0]);
// console.log(shop.getMoney(), "Before sell");

// shop.sellProductByName('gauffre')

// console.log(shop.getProducts()[0]);
// console.log(shop.getMoney(), "After sell");

// // Test Second promo
// shop.setCurrentPromo(promos[1]);
// console.log(shop.getMoney(), "Before sell");

// shop.sellProductByName('gauffre')

// console.log(shop.getProducts()[0]);
// console.log(shop.getMoney(), "After sell");

// const client = new Client(2);

// const gauffrerie = new Shop('gauffrerie');
// const creperies = new Shop('crêperie');

// gauffrerie.setCurrentPromo(promos[1]);

// gauffrerie.addProduct(new Product('gauffre', 0.3, 1.5, 10));
// creperies.addProduct(new Product('crêpe', 0.3, 2.0, 10));

// client.generateWish({
//     shops : [gauffrerie, creperies],
// });

// console.log(client.getWish());


// const submitBtn = document.getElementById('btnSubmit');
// const inputShop = document.getElementById('shopName');
// let shopp = "";
// submitBtn.addEventListener("click", function(e){
//     shopp = submitForm();
// });
// function submitForm() {
//     shopp = new Shop(inputShop.value);
//     console.log(shopp)
// }

// const sectionInfosPlayer = document.getElementById('infosPlayer');
// const shopTitle = document.createElement("h2");
// shopTitle.innerText = shopp.getName();
// sectionInfosPlayer.appendChild(shopTitle);



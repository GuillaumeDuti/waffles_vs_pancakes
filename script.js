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

class Product {
    constructor(name, cost, price, stock) {
        this.name = name;
        this.cost = cost;
        this.price = price;
        this.stock = stock;
    }
}

class Shop {
    name = "Creperies";
    money = 0;
    products= [];

    constructor(newName, newMoney) {
        this.name = newName;
        // money
        if (newMoney < 0) {
            this.money = 0;
        }else {
            this.money = newMoney;
        }
    }

    getName() {
        return this.name;
    }

    setName(newName){
        this.name = newName;
    }

    getProducts(){
        return this.products;
    }

    setProducts(newProducts){
        this.products = newProducts;
    }

    addProduct(newProduct){
        this.products.push(newProduct);
    }
}

const shop = new Shop("Gauffre", -10);
const product = new Product("gauffre", 0.30, 3.00, 10);

// console.log(shop, "avant");

// shop.setProducts([...shop.getProducts(), product]);

// console.log(shop, "après1");

// shop.setProducts([...shop.getProducts(), product]);

// console.log(shop, "après2");

// console.log(shop.getName());
// shop.setName("Crêpes");
// console.log(shop.getName());

// console.log(product);

/*======================= SPREAD OPERATORS =====================*/

const originalTab = [1,42,56,89,99];
const originalObj = {name: "Pierre", age : "25"}

// console.log([...originalTab], "spread simple");
// console.log([...originalTab, 100], "ajout une valeur");
// console.log([...originalTab, 100, 200], "ajout deux valeur");
// console.log([...originalTab, "-" ,...originalTab], "multiple spread operator");

// console.log({...originalObj, lotto: [...originalTab]}, "spread simple object");

/*======================= DESTRUCTURING =====================*/

const getPokemon = ({type, name, ...rest}) => {
    console.log(name);
    console.log(type);
    console.log(rest);
}

const pokemon = {
    name: "Pierre",
    type: "feu",
    age: '25',
    foo: 'bar'
}

getPokemon(pokemon);

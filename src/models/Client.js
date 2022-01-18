export default class Client {
    constructor(money, wish){
        this.money = money;
        this.wish = wish;
    }

    generateWish({shops}){
        let prob = [];
        // Pile ou face
        const shopIndex = this.randomIntFromInterval(0, shops.length-1);
        prob.push(shops[shopIndex]);
        // Methode For
        // Je parcours les magasins
        // for (let i = 0; i < shops.length; i++) {
        //     // Je parcours les produits de chaque magasin
        //     for (let j = 0; j < shops[i].getProducts().length; j++) {
        //         // Pour chaque produit je compare si le client est capable de l'acheter ou pas
        //         if (this.money>=shops[i].getProducts()[j].price) {
        //             prob.push(shops[i]);
        //         }
        //     }
        // }
        // Methode Foreach
        shops.forEach((shop) => {
            shop.getProducts().forEach((product) => {
                if (this.money >= product.price) {
                    prob.push(shop)
                }
            })
        })
        // Check promos
        shops.forEach((shop) => {
            if (shop.getCurrentPromo()) {
                prob.push(shop)
            }
        })

        const probIndex = this.randomIntFromInterval(0, prob.length-1);
        this.setWish(prob[probIndex]);
    }

    randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getWish() {
        return this.wish;
    }

    setWish(newWish) {
        this.wish = newWish;
    }
}

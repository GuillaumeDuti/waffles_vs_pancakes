import Product from "./Product.js";

export default class Shop {
    products = [];
    currentPromo;
    constructor(name, money=1000, rent=100) {
        this.name = name;
        this.money = money;
        this.rent = rent;
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

    getMoney() {
        return this.money;
    }

    setMoney(newMoney) {
        this.name = newMoney;
    }

    getRent() {
        return this.rent;
    }

    setRent(newRent) {
        this.rent = newRent;
    }

    payRent(){
        this.money -= this.rent; // this.money = this.money - product.price;
    }

    /**
     * A method that can permit us to sell a product in our store.
     *
     * @param {*} productName Name of the product that we want to sell.
     */
    sellProductByName(productName){
        // Find the product
        let product = this.products.find((product) => product.name === productName);
        // If the product is an instance of Product then we start our logic of selling a product
        if (product instanceof Product) {
            // Check if the product is still available
            if (product.stock > 0) {
                switch (this.currentPromo.id) {
                    case 'one+one':
                        if (product.stock > 1) {
                            product.stock = product.stock - 2;
                        }else{
                            product.stock = 0;
                        }
                        this.money += product.price;
                        break;
                    case 'second-half':
                        if (product.stock > 1) {
                            product.stock = product.stock - 2;
                            this.money += product.price + (product.price/2)
                        }else{
                            product.stock = 0;
                            this.money += product.price;
                        }
                        break;
                    default:
                        product.stock--;
                        this.money += product.price; // this.money = this.money + product.price;
                        break;
                }
            }
        }
    }

    addProduct(newProduct){
        this.products.push(newProduct);
    }

    getCurrentPromo(){
        return this.currentPromo;
    }

    setCurrentPromo(newPromo){
        this.currentPromo = newPromo;
    }
}

export default class Product {
    constructor(name, cost, price, stock) {
        this.name = name;
        this.cost = cost;
        this.price = price;
        this.stock = stock;
    }

    getName() {
        return this.name;
    }

    setName(newName){
        this.name = newName;
    }

    getCost() {
        return this.cost;
    }

    setCost(newCost){
        this.cost = newCost;
    }

    getPrice() {
        return this.price;
    }

    setPrice(newPrice){
        this.price = newPrice;
    }

    getStock() {
        return this.stock;
    }

    setStock(newStock){
        this.stock = newStock;
    }

    addProductToStock(number= 1){
        this.setStock(this.stock+number);
    }

    removeProductFromStock(number= 1){
        this.setStock(this.stock-number);
    }
}

export default class Shop {
    products = [];
    currentPromo;
    constructor(name, money, rent=100) {
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

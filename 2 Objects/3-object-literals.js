
let groceryListItem = {
    name: "Apples",
    quantity: 4,
    writeCode: function() {
        console.log(`${this.quantity} x ${this.name}`);
    }
};

groceryListItem.writeCode(); // 4 x Apples

const groceryItem = {
    name: "Apples",
    quantity: 4,
    display() {
        console.log(`${this.quantity} x ${this.name}`);
    }
};

groceryItem.display(); // 4 x Bananas
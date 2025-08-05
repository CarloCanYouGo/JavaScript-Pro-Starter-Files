// let programmer = {
//   name: 'Steven',
//   preferredLanguage: 'JavaScript',
//   writeCode: function() {
//     console.log(`${this.name} writes ${this.preferredLanguage} code.`);
//   },
//   drinksCoffee() {
//     console.log(`${this.name} drinks coffee.`);
//   }
// };

// //programmer.writeCode(); // Steven writes JavaScript code.

// function createProgrammer(name, preferredLanguage) {
//   return {
//     name,
//     preferredLanguage,
//     writeCode() {
//       console.log(`${this.name} writes ${this.preferredLanguage} code.`);
//     },
//     drinksCoffee() {
//       console.log(`${this.name} drinks coffee.`);
//     }
//   }
// }

// const newProgramer = createProgrammer('Alice', 'JavaScript');
// newProgramer.writeCode();

function createGroceryItem(name, quantity) {
  return {
    name,
    quantity,
    writecode() {
      console.log(`${this.quantity} x ${this.name}`);
    }
  };
}
const groceryItem = createGroceryItem('Bananas', 6);
groceryItem.writecode(); // 6 x Bananas
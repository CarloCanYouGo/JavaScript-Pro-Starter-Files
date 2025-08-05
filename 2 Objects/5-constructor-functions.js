//Lesson
function Programmer(name, preferredLanguage) {
  this.name = name;
  this.preferredLanguage = preferredLanguage;
  this.writeCode = function() {
    console.log(`${this.name} writes ${this.preferredLanguage} code.`);
  };
  this.drinksCoffee = function() {
    console.log(`${this.name} drinks coffee.`);
  };
}

const newProgramer = new Programmer('Alice', 'JavaScript');
newProgramer.writeCode(); // Alice writes JavaScript code.
newProgramer.drinksCoffee(); // Alice drinks coffee
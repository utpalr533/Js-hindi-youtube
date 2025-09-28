# Javascript and classes

## OBJECT ORIENTED PROGRAMMING (OOP)

## Object 
-Collection of properties and methods 
- toLowerCase 

## why we use OOP


## parts of OOP
OBject literal


- Constructor function 
- Prototypes
- Classes
- Instances(new, this)

## 4 pillars 
Abstraction
What is Abstraction?

Abstraction means hiding unnecessary implementation details and showing only the important features of an object.

In JavaScript, we don’t have true abstraction like Java or C# (with abstract classes), but we can simulate it using:

Classes with methods meant to be overridden

Encapsulation with private fields (#)

Interfaces (via TypeScript, not plain JS)

🔹 Example 1: Without Abstraction

Here we expose all details, even things the user doesn’t need:

class CoffeeMachine {
  addWater(amount) {
    console.log(`Added ${amount}ml of water`);
  }
  addBeans(amount) {
    console.log(`Added ${amount}g of coffee beans`);
  }
  startBrewing() {
    console.log("Brewing coffee...");
  }
}

const machine = new CoffeeMachine();
machine.addWater(200);
machine.addBeans(50);
machine.startBrewing(); // User has to know ALL steps


👉 The user needs to know too many details (water, beans, brewing).

🔹 Example 2: With Abstraction

We hide the details and expose only a simple method:

class CoffeeMachine {
  #addWater(amount) {
    console.log(`Added ${amount}ml of water`);
  }
  #addBeans(amount) {
    console.log(`Added ${amount}g of coffee beans`);
  }
  #startBrewing() {
    console.log("Brewing coffee...");
  }

  // Abstracted method for the user
  makeCoffee() {
    this.#addWater(200);
    this.#addBeans(50);
    this.#startBrewing();
    console.log("☕ Coffee is ready!");
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee(); // User just calls one method


👉 The user doesn’t care how coffee is made. They just call makeCoffee().

🔹 Example 3: Abstraction via Inheritance

We can also define common behavior in a parent class and let child classes provide details.

class Vehicle {
  startEngine() {
    throw new Error("startEngine() must be implemented in child class");
  }
}

class Car extends Vehicle {
  startEngine() {
    console.log("Car engine starts with a key 🔑");
  }
}

class Bike extends Vehicle {
  startEngine() {
    console.log("Bike engine starts with a button ⚡");
  }
}

const myCar = new Car();
myCar.startEngine(); // Car engine starts with a key

const myBike = new Bike();
myBike.startEngine(); // Bike engine starts with a button


👉 Here, Vehicle provides an abstract idea (startEngine), and subclasses implement it differently.

✅ In summary:

Abstraction = show what is necessary, hide what isn’t.

In JS, you achieve it using classes, private methods/fields, and inheritance.



Encapsulation

1. Encapsulation

👉 Definition: Wrapping up data (properties) and methods (functions) into a single unit (class), and restricting direct access to some of the object’s components.

This protects the data and keeps the code clean.

Achieved in JS using classes, getters/setters, and private fields (#).

Example:
class BankAccount {
  #balance = 0; // private property

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ₹${amount}`);
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ₹${amount}`);
    } else {
      console.log("Insufficient balance!");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
account.withdraw(300);
console.log(account.getBalance()); // 700
// account.#balance ❌ (not accessible directly)


✅ Encapsulation hides #balance from direct modification.


Inheritance
Definition: When one class (child) inherits properties and methods from another class (parent).

Promotes reusability.

Example:
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking 🐶`);
  }
}

const dog = new Dog("Buddy");
dog.eat();  // Inherited from Animal
dog.bark(); // Defined in Dog


✅ Dog inherits eat() from Animal.



Polymorphism 

Definition: "Many forms" → The ability of different classes to use the same method name but behave differently.

Achieved via method overriding or method overloading (simulated) in JS.

Example (Method Overriding):
class Animal {
  speak() {
    console.log("This animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks 🐕");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows 🐱");
  }
}

const animals = [new Dog(), new Cat()];
animals.forEach(animal => animal.speak());
// Dog barks 🐕
// Cat meows 🐱


✅ Same method name (speak) → Different behaviors.

🚀 Quick Recap:

Encapsulation → Hiding data, exposing only needed methods (#private fields, getters/setters).

Inheritance → Child class reuses code from parent (extends).

Polymorphism → Same method name, different implementations (overriding).
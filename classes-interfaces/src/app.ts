interface Greetable {
  name: string;

  greet(phrase: string): void;
}

// interface can be used as a contract a class can implement, and class has to adhere to
// every class that implements this interface has to have a name property and a greet method
// can implement more than 1 interface
// class Person implements Greetable, AnotherInterface {
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");

user1.greet("Hi there - I am");
console.log(user1);

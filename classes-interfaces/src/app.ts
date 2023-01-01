class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  // method in a class
  // 'this' in this case will always be called as an object from the Department class
  // eg, abc.describe(), if abc is not an object of the department class, it will throw an error
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

// create a new js object based on the blueprint
const accounting = new Department("Accounting");

// access a method in a class
accounting.describe();

// typescript sees that this structure is similiar to the Department class, and it would infer it.
const accountingCopy = { name: "DUMMY", describe: accounting.describe };

accountingCopy.describe();

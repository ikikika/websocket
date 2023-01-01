class Department {
  //   private readonly id: string;
  //   public name: string;

  // to protect this array so that we can control how it is accessed/modified
  private employees: string[] = [];

  // shorthand init, no need to define elements at the top, can define here
  // do not allow id to be overwritten. its good to be clear on the intention
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // method in a class
  // 'this' in this case will always be called as an object from the Department class
  // eg, abc.describe(), if abc is not an object of the department class, it will throw an error
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  // because employee is private, we define this function as the only way to add items to that array
  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// create a new js object based on the blueprint
const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// this will not work now after we make the employee array private
// accounting.employees[2] = 'Anna';

// access a method in a class
accounting.describe();

accounting.name = "NEW NAME";
accounting.printEmployeeInformation();

// typescript sees that this structure is similiar to the Department class, and it would infer it.
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();

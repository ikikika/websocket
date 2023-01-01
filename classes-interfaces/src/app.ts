class Department {
  //   private readonly id: string;
  //   public name: string;

  // to protect this array so that we can control how it is accessed/modified
  // if we use private, it cannot be modified by child classes
  protected employees: string[] = [];

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

// new class inheriting properties from old class
// if we dun define constructor, it will use constructor from old class
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // Whenever you add your own constructor in a class that inherits from another class, you have to add super in the inheriting class
    // Super here calls the constructor of the base class,
    // super takes the arguments of the parent class constructor
    // must call super first before doing anything with 'this' keyword
    super(id, "IT");
    this.admins = admins;
  }
}

// we can also create our accounting department as child of department and add out accounting specifc things
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

// create a new js object based on the blueprint
// const accounting = new Department("d1", "Accounting");

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrong...");

accounting.printReports();

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

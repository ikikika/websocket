class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

// create a new js object based on the blueprint
const accounting = new Department("Accounting");

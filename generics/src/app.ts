const names: Array<string> = []; // string[]
names[0].split(" ");

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  // this wont work as we defined return type number
  // data.split(" ");
});

// const names: Array<string> = []; // string[]
// names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // this wont work as we defined return type number
//   // data.split(" ");
// });

// need to define the generics within the angle brackets else TS wont know whats contained in objA and objB
// this is not specific enough for TS to infer that the return should be intersection of object and object, intersection of 2 unknown objects is jus another unknown objects
// function merge(objA: object, objB: object) {
// this way specifically tell TS that return is intersection of the 2 objects
// also constraints T and U to be any type
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj.age);

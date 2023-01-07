## Intersection types

- allow us to combine other types

## Type guards

- helps us with union types
- used to check if certain property or method exists before trying to use it
- approaches: use if statements with
  - typeof (other types)
  - in (objects)
  - instanceof (objects)

## Discriminated Union

- a pattern that makes implementing type guards easier

## Type casting

- tell TypeScript that some value is of a specific type where TypeScript is not able to detect it on it's own, but the dev knows

## Index properties

- define interface such that we dun need to know in advance which property names to use and how many properties we need

## Function overloads

- define multiple function signatures
- we can have multiple possible ways of calling function with different parameters to do something inside the function

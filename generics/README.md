## What

- A generic type is a type which is kind of connected with some other type and is really flexible regarding which exact type that other type is.
- eg, Array, inside array can contain other types
  - If TS knows that the array hold strings, TS can then allow us to perform string methods
- Another eg, promises

## Creating generic function

- enclosed in angle brackets
- pass extra information to TS so that TS can better infer the result type
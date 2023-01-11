## Decorator

- a function applied to something (eg a class) in a certain way
- TS recognise the @ symbol and point to the function after it, but not execute it
- a function that hook into the source code and either extend the function of it or annotate it with metadata
- a decorator is a pattern in programming in which you wrap something to change its behavior
- logic can be added to decorator, which will be executed automatically if called
- any 3rd party users can import decorator function and reuse the logic we defined
- angular uses decorator to define template

```
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}
```

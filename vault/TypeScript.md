---
id: TypeScript
title: TypeScript
desc: ''
updated: 1662663453450
created: 1662643727632
---

TypeScript compiles down to JavaScript.

Detects errors in code without running it.
It does this by checking types. 

TypeScript is a superset of javascript. 

Everything in javascript is valid in TypeScript

Declare a type of a variable. 
(This looks just like Swift.)
>let myVar: type = value

`let songName: string = "Green Grass";`

### Boolean
`let isDone: boolean = false;`

Compile by running: </br>
`tsc file_name.ts`


### Type Inference
TypeScript has type inference.
If you explicitly create a variable and set it equal to "hello," then TypeScript will infer it a string.
It is helpful to specify the type, because:
>When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.


### "Any" type
This defeats the purpose of TypeScript.
>TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors. </br>
When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

##xw# Function Definitions

```
function square(num: number) {
    return num * num;
}

function greet(person: string){
    return `Hi there, ${person}`
}
```

*To provide default value:* <br>

```
function greet(person: string = "stranger"){
    return `Hi there, ${person}`
}
```

### Inferring vs Specifying Return Types

The return value annotation below, ": string",  specifies the return type as string
```
function greet(person: string = "stranger"): string {
    return `Hi there, ${person}`
}
```

### Specifying void return types
```
function printIt(strToPrint: string): void{
    console.log(strToPrint)
}
```

### Never
"Never" is unique to TypeScript.
It is not void.
Indicates the function should never return anything. 
This might be a function that logs an error, or it might be a loop that should never stop.


### Objects
> In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.

```
interface Person {
  name: string;
  age: number;
}

```
```
type Person = {
  name: string;
  age: number;
};
```
```
function greet(person: Person) {
  return "Hello " + person.name;
}

```

> Much of the time, we’ll find ourselves dealing with objects that might have a property set. In those cases, we can mark those properties as optional by adding a question mark (?) to the end of their names.

```
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

``` 

### Type Alias


```
type Point = {
    x: number;
    y: number;
}

let coordinate: Point = {x: 32, y: 6};
```


## Intersection Types
This is interesting - I hadn't seen this idea before.
It's kind of like 'extends' in Java?

>interfaces allowed us to build up new types from other types by extending them. TypeScript provides another construct called intersection types that is mainly used to combine existing object types.

An intersection type is defined using the & operator.

```
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;
``` 
> Here, we’ve intersected Colorful and Circle to produce a new type that has all the members of Colorful and Circle.

### Data Structures

#### Array <br>
>TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:

`let numsList: number[] = [1, 2, 3];`

or

`let list: Array<number> = [1, 2, 3];`




---
id: TypeScript
title: TypeScript
desc: ''
updated: 1665427059263
created: 1662643727632
---

### *These are my notes as I learn TypeScript, and thus brush up on modern JavaScript.* 
<br>

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


### Union Types
> TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start combining them in interesting ways.

> The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

At first glance...I am not sure in what context this feature would be useful. Maybe I'll come across it somewhere.

```
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```


### Literal Type
const zero: number = 0;


### Some Examples
variable that can be a number or boolean
`let highScore: number | boolean;`


array that can hold numbers or strings, but not a mixture <br>
`let stuff: number[] | string[] = [];`


type that holds 4 possible values
```type SkillLevel = 
    "Beginner" |
    "Intermediate" |
    "Advanced" |
    "Expert";
```

```
type RGB = {
    r: number;
    g: number;
    b: number;
}

type HSL = {
    h: number;
    s: number;
    l: number;
}

// array called colors that can hold a mixture of RGB and HSL
const colors: (RGB | HSL)[] = [];
```


### Tuples
This is a TypeScript implementation. In JavaScript it transpiles to an array.
s
> Tuple can contain two values of different data types.

```
var empId: number = 1;
var empName: string = "Steve";        

// Tuple type variable 
var employee: [number, string] = [1, "Steve"];

```

> A tuple type variable can include multiple data types as shown below.

```
var user: [number, string, boolean, number, string];// declare tuple variable
```


> You can declare an array of tuple also.
```
var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
```

### Enums

```
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```


### Interfaces
They allow us to define the structure of objects. 

```
interface Point {
  readonly id: number; // readonly makes it so it cannot be changed
  x: number;
  y: number;
  z?: number; // ? makes this optional
  sayHello: () => string // this indicates the implementation of this interface must include the 'sayHello' method that returns a string and takes no parameters

  sayBye(): string; // another way to write - this indicates the implementation of this interface must include the 'sayBye' method that returns a string and takes no parameters

  changeNums(change: number): number; // this indicates the implementation of this interface must include the 'changeNums' method that returns a string and takes a parameter which is a number. The passed in param name does not need to be called 'change.'

}
```

---

### Aspects Related to Building Projects with TypeScript

#### as always, a TODO List

`mkdir project_name

cd project_name

tsc --init

tsc -w `

Now we want to be able to view this in the browser.

To make a live server:
- keep in mind - below is not a function of TypeScript - this is just a normal npm server...
- cd to the base directory of the project
- create an npm package file: `npm init -y`
- install lite server `npm install lite-server`
- setup a script in the newly created npm 'package.json' so that npm start runs lite server, like this:
- ![](/assets/images/2022-09-09-11-55-40.png)
- run `npm start`
- that should launch a browser
- when you make a change in your .ts files of the project, they will compile to .js files, and the server is notified, and the changes appear live


This returns a generic HTML element. TS doesn't know this a Button

As often when working with the DOM, it's difficult to know if "btn1" will actually exist
`const btn = document.getElementById("btn1")`

One approach is to make them optional:
```
btn?.addEventListener("click", function ()) {
    console.log("clicked");
}
```

---

Calling tsc 'watch' in the terminal will cause node to automatically transpile the .ts into .js on save. <br>

``` tsc -w ```
> tsc-watch starts a TypeScript compiler with --watch parameter, with the ability to react to compilation status. tsc-watch was created to allow an easy dev process with TypeScript. Commonly used to restart a node server, similar to nodemon but for TypeScript.

---

Putting a hash symbol # in front of a property, or method, makes it private to a class. 
****
There is some debate here, because the 'private' typescript removes 'private' when it is converted to javascript.

Javascript's way to do this is to use the hashtag in front of a parameter to make it private.

`#price: number = 0`

`private price: number = 0;`


---

## Loops

This looks the same as JavaScript to me
```
nums.forEach((element, index) => {
        let tmpSum = 0;
    })
```

However, since forEach is a function and not a loop, you can't use 'continue' or 'break' to break out of the loop.

If you may need to break the iteration, it's recommended you use something instead of forEach.

Unfortunately, it's also show that hand-rolling for loops often runs quicker than built-in array functions such as map, forEach, etc.


---

## Array Operations

### Slicing
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

Slice creates a shallow copy of the array.

**start** <br>
Zero-based index at which to start extraction.


**end** <br>
The index of the first element to **exclude** from the returned array. Slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3). Thanks, Mozilla.


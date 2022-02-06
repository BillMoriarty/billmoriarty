---
id: matrix-manipulation
title: Matrix Manipulation
desc: ''
updated: 1644009298424
created: 1643988598713
---

Place this idea in your mind: a matrix is a transformation of space. 

Transformation & Function : different terms for the same idea.
Let's think of a linear transformation as a function in a program, which takes in a vector and returns a vector. 
It helps to imagine an input vector *moving* to its output vector.
Then we can imagine each vector in the entire space moving in sync.

- side note...can I make an AR app to visualize these?

Linear Transformation
- all lines must remain lines
- - lines can't end up curved
- - it should keep grid lines parallel and evenly spaced
- the Origin must remain fixed in place

A linear transformation is *entirely* determined by where it moves the basis vectors in the space.

We write this in a 2 x 2 matrix.
Column 1 is where i hat lands.
Column 2 is where j hat lands. 

In 2D Space:
So, if we can describe the change to i hat and j hat, we can apply i hat & j hat's change to any vector and we'll know where that vector will land. And we can know where *every* other point will end up when the change is applied.

x(where i hat ended up), + y(where j hat ended up) ... gotta install latex here

Any other vector can be described as a linear combination of those basis vectors. 

> Every time you see a matrix, you can interpret it as a certain transformation of space. -3Blue1Brown

When we do want to do more than one operation to a matrix, this is a Composition

This can still be described using just 1 matrix. 
We can combine the 2 matrices that represent our individual operations into 1 matrix. 

If you change the order that you multiply the matrices, your points will end up in a different place. 
Matrix multiplication is not commutative, but it is associative. 

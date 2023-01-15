
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

And for 3 dimensions, use k hat, for a 3x3 matrix.

Determinant
How much a transformation scales the are of a matrix, is called the Determinant.
Cuts the area in half? The determinant is .5
Triples the area? The determinant is 3.
Space becomes a line or one point? The determinant is 0. 

Negative determinant?
Invert the orientation of space.
The absolute value of that determinant still tells you how the area of space has been scaled.

In 3D, the determinant changes the volume, instead of just the area.

If you have a negative determinant in 3D, some orientation has flipped.


Applying a transformation, A, then A inverse, gets you back to where you started. 
A inverse, * A = the matrix that corresponds to the transformation that does…nothing. This is also called the “identity transformation.”
[1,0
0,1]
If there is an inverse, you can use that to solve the system.

But, there will be no inverse if a transformation effectively removes a dimension. If a 2D becomes a line (“rank 1”), or 3D becomes a plane(“rank 2”).
The ‘rank’ means the number of dimensions in the output transformation.
Or, the numbers of dimensions in the column space.
Column space helps us understand if a solution even exists.


All the vectors that land on the origin (become null) are called “null space” or “kernel.”
This helps know what the set of all possible solutions could look like.

Below, a 3 x 2 matrix (3 rows and 2 columns), is an example of a transformation from a 2D space to a 3D space.
This says: 
- take i hat, and move it to 4,2,5.
- take j hat, and move it to 1,3,6
| 4   | 1   |
|-----|-----|
| 2   | 3   |
| 5   | 6   |

Alternately if we are transforming from 3D to 2D, the matrix would look like:
| 2   | 7   | 8   |
|-----|-----|-----|
| 4   | -3  | 9   |
- take i hat, and move it to 2,4.
- take j hat, and move it to 7,-3
- take k hat, and move it to 8,9


### The Importance Of Dot Products

[4] * [2]</br>
[1]	[-1]</br>
=(4 * 2) + (1 * -1)

“This computation has a really nice geometric interpretation.”
Summary: Dot product is a useful geometric tool for understanding projections, and for testing if vectors tend to point in the same direction.




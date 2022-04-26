---
id: Rigidbody
title: Rigidbody
desc: ''
updated: 1650632491683
created: 1644346568897
---
https://www.youtube.com/watch?v=WTGcs10Sj34

This allows a [[Unity.Game Object]] to
- fall with gravity 
- have mass
- have drag
- have velocity

The [[Unity.Game Object]] must also have a [[Unity.Collider]] attached.

### Mass
Affects how collisions are treated. They react less with a higher mass.

### Drag
Affects how quickly the object will slow down without other interactions. 
>think of it like air resistance.
The rate of loss of linear velocity.

### Angular Drag
How fast it will slow its rotation.

### Use Gravity
- click this to enable gravity
- this is a 3D vector
- Edit -> Projects Settings -> Gravity

### Is Kinematic
- whether or not a rigid body will react to physics
- if it Is Kinematic
- - this uses less compute
- - does not require the Physics Engine to reevaluate the entire scene
- you can move these objects with Transforms
- constraints
- - Freeze Position
- - Freeeze Rotation


At the start of a scene, the physics engine checks the state of all static objects.

If an object Is Kinematic
- it informs the game engine of its location
If na object is not Kinematic
- the game engine evaluates and dictates where the object should be 

Use the Interpolate setting to smooth jitter based on the prior frame
Use the Extrapolate setting to smooth jitter based on the predicted frame

---
id: Unsorted-Unity-Notes
title: Unsorted Unity Notes
desc: ''
updated: 1645589558557
created: 1644944601514
---

*These notes need to be edited & sorted*

What is a "complicated particle system?"


Unity Vs Unreal
- unity: larger community for helping learn
- unity: more documentation
- unreal: looks beautiful by default
- - has enabled by default
- Unity: is trying to stand out by making themselves the XR development suite


shader graph for altering the mesh
- [ ] what is meant here by shader?
- [ ] what is meant here by graph?
- [ ] what is meant here by mesh?


Unity Hub
- icons under each Unity install indicates what build modules are installed for that 

If you don't have "Add Modules" available, that is because you "located" that version of Unity instead of installing it


They *highly* recommend you go through the
"roll-a-ball" tutorial:
- [ ] https://learn.unity.com/project/roll-a-ball


Make full use of the Unity Community
- https://unity.com/community

New project
- first choice are Render Options
3D: this is the standard render pipeline
HDRP
- use this for Desktop experiences
Universal REnder pipeline
- use this in gerneal 


Camera
- audio listener

Select a game object
- type 'f'
- it zooms in to that object 


Shift + Option + Command + click & drag

Option + click & drag

New Game Object
- Unity will place the object at the focus area
- people mostly don't use transforms, they manipulate in the scene view


[[Unity.Mesh Renderer]]


[[Unity.Material]]


[[Unity.Texture]]


Global vs Local
global: what the world considers to be forward
local:



hold down Command to snap in 15 degree elements

---

Parent -> Child relationships

If the Game Object is a child of the Parent
And you edit the scale, rotation and position of the Parent, then the Child is moved proportionally.

But when you modify the Parent's rotation such as -90, the Child's rotation can still say 0, because that is its local rotation.

Pivot point is at the feet of a character.
Center position is usually near their torso.

How to snap Game Object to he plane
- hold down V




### Prefab Variants
A key concept
https://docs.unity3d.com/Manual/PrefabVariants.html




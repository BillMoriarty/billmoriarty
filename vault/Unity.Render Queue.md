---
id: Render-Queue
title: Render Queue
desc: ''
updated: 1646763875202
created: 1646763875202
---


Properties
from: https://docs.unity3d.com/ScriptReference/Rendering.RenderQueue.html

Background	This render queue is rendered before any others.

Geometry	Opaque geometry uses this queue.

AlphaTest	Alpha tested geometry uses this queue.

GeometryLast	Last render queue that is considered "opaque".

Transparent	This render queue is rendered after Geometry and AlphaTest, in 
back-to-front order.

Overlay	This render queue is meant for overlay effects.



You can use these in creative ways.

You can place a transparent objedct inbetween then camera and some opaque object.

Then set the render queue of the opaque object to be a higher value, such as 3001. 

This enable Unity to crop the portion of the opaque object 



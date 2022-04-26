---
id: sz2un22hz9thizmzyhdx1fh
title: Collision
desc: ''
updated: 1646163222881
created: 1646162986849
---

If we want a [[Unity.Game Object]] to react to something bumping into it:
- that object needs to have a [[Unity.Physics.Rigidbody]]
- the object bumping, or being bumped, needs to have an 'OnCollisionEnter' function


```
// called in 1 frame when collision first is detected
    // 
    private void OnCollisionEnter(Collision collision)
    {
        
    }
```

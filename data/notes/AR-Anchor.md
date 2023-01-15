
An [ARAnchor](https://developer.apple.com/documentation/arkit/aranchor) is continually updated by the iOS device as you move around to correct for any drift or miscalculation

So if you use ar anchors, your virtual content will stay much better in sync with the real world

It's a reference to the virtual world map.

It's important to notice that ARKit ARAnchors are different then RealityKit's [[Apple Augmented Reality Notes.Anchor Entity]]

A good explanation from [stack overflow](https://stackoverflow.com/questions/57593960/whats-the-difference-between-aranchor-and-anchorentity):
> The anchor in each of those examples are two different object types, the first is an ARAnchor, the second is an AnchorEntity. 
<br><br>
If you create an AnchorEntity like this: AnchorEntity(plane: .horizontal), then it will attach to the first horizontal ARAnchor which is automatically created with ARKit's plane detection. However if you instead create an AnchorEntity in this way: AnchorEntity(world: [0, 0, -1]), then it will position it at that [0, 0, -1] in world space, not using any ARAnchors.
<br><br>
You might want to manually add an ARAnchor to the session if you want something to be positioned at the same place across two devices using collaborative sessions, but at an arbitrary location, such as [0, 0, -1] on one of the device's world space.




> The only way to get the automatic grounding shadow in RealityKit is to use the “plane” AnchoringComponent.Target. If you use the “anchor” AnchoringComponent.target, you will not receive the automatic grounding shadow on your content, even if it is an ARPlaneAnchor. <br><br>
You can add your own grounding shadow by using a DirectionalLight with a Shadow and placing a plane beneath your model with an OcclusionMaterial, but you may not be able to achieve the same exact look as the automatic grounding shadows with this approach.<br><br>
-Greg Chiste<br>
DTS Engineer<br>
 Worldwide Developer Relations

---

---
id: VR-Hands
title: VR Hands
desc: ''
updated: 1648151035764
created: 1648150466009
---

## Notes from [Usman Mir](https://www.usmanmir.com)

### XR Interaction ToolKit Setup

1. Package Manager Install XR Interaction ToolKit
2. XR Interaction Tool Kit Package > Samples > Import Starter Assets (Optional Simulator for non VR Headset Users)
3. Project Window> Samples>XR Interaction Toolkit > 2.0.0 > Starter Assets then select the asset “XRI Default Left Controller” (as well as right) and in the Inspector click “Add to ActionBasedController default” at the top of the inspector window
4. Edit>Project Settings>Preset Manager then type in “Right” and “Left” to the left of the appropriate Preset input field
5. In the Hierarchy window add XR> XR Origin (Action Based)
6. Add an “Input Action Manager” Component to the XR Rig
7. Add to the action assets list the “XRI Default Input Actions” asset
8. Edit>Project Settings>XR Plug-in Management and enable desired platforms


### Misc.
- Add Grab Interactables and rigidbodies and colliders to objects you want to pick up
- You can replace Line and Ray Interactors from Hands with Direct Interactors to reach out and grab objects instead of pointing and clicking
- Add Visuals for Hands by adding something into the model prefab property of each Controller component on the hands


![](/assets/images/locomotion_1.jpg)

![](/assets/images/locomotion_2.jpg)

![](/assets/images/locomotion_3.jpg)

![](/assets/images/locomotion_4.jpg)
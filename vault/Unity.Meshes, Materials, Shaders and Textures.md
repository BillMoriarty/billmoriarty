---
id: Meshes-Materials-Shaders-Textures
title: 'Meshes, Materials, Shaders and Textures'
desc: ''
updated: 1646845477615
created: 1646845477615
---

From https://docs.unity3d.com/ru/2019.4/Manual/Shaders.html
> Rendering in Unity uses Meshes, Materials, Shaders and Textures. They have a close relationship.
- Meshes [[Unity.Mesh]] are the main graphics primitive of Unity. They define the shape of an object.
- Materials [[Unity.Material]] define how a surface should be rendered, by including references to the Textures it uses, tiling information, Color tints and more. The available options for a Material depend on which Shader the Material is using.
- Shaders [[Unity.Shader]] are small scripts that contain the mathematical calculations and algorithms for calculating the Color of each pixel rendered, based on the lighting input and the Material configuration.
- Textures [[Unity.Texture]] are bitmap images. A Material can contain references to textures, so that the Material’s Shader can use the textures while calculating the surface color of a GameObject. In addition to basic Color (Albedo) of a GameObject’s surface, Textures can represent many other aspects of a Material’s surface such as its reflectivity or roughness.

> - A Material specifies one specific Shader to use, and the Shader used determines which options are available in the Material. A Shader specifies one or more Texture variables that it expects to use, and the Material Inspector in Unity allows you to assign your own Texture Assets to these Texture variables.
- For most normal rendering (such as rendering characters, scenery, environments, solid and transparent GameObjects, hard and soft surfaces) the Standard Shader is usually the best choice. This is a highly customisable shader which is capable of rendering many types of surface in a highly realistic way.
- There are other situations where a different built-in Shader, or even a custom written shader might be appropriate (for example liquids, foliage, refractive glass, particle effects, cartoony, illustrative or other artistic effects, or other special effects like night vision, heat vision or x-ray vision).
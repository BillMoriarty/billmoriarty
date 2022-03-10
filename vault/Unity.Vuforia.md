---
id: vuforia
title: Vuforia
desc: ''
updated: 1646843165231
created: 1646331149609
---

This is an augmented reality library for Unity.

Vuforia goes straight to the hardware's camera. It only uses the camera.

PTC bought Vuforia from Qualcomm.

Player Settings
![](/assets/images/2022-03-09-11-09-04.png)

## Errors & How to Solve Them

`[ufw runUIApplicationMainWithArgc: argc argv: argv]; `

> For anyone else that runs into this error the solution was two-fold. 
- You have to uncheck "Strip Engine Code" in Unity under player settings > IOS. 
- Then in Xcode, you have to find (under either Swift or Apple Clang - code generation) a setting called 'Optimization Level' and set it to none.
https://forum.unity.com/threads/xcode-error-when-building-thread-1-exc_bad_access.802374/
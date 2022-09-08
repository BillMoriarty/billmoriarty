---
id: Normalize-Data
title: Normalize Data
desc: ''
updated: 1662644481070
created: 1646074111202
---

We often want to *normalize* our data so that the numbers are all between 0 and 1.
Why?
Because if you want to make a graph, or other cool picture, sometimes the tool you want to use doesn't accept very large or very small numbers.

So we need to shrink or grow our numbers to be within a range that the tool accepts.

This often, but not always, means changing the numbers relative to each other to be between zero and one.

Right not, I am making a solar system in Unity for VR.
I want the planets to orbit the sun with speeds relative to actual outer space speeds.

Looking on wikipedia, I find the orbital speed of the planets around the sun:


Then the formula for normalization says:
Whats the biggest number in your data?
What's the smallest number in your data?

Ok now, let's normalize each number in your data one at a time.

let max = the largest number in our data
let min = the smallest number in our data
let n = the number we want to normalize.

(n - min)  / (max - min) = our 'n' normalized

So repeat the above formula for every number in your data to get between 0 and 1. 

If you want to normalize this data between some other range. 
For instance, if you want to make some virtual reality planet [[Unity.Orbits]] around a sun, then you would want to scale these values between 0 and 360, for the degrees in a circle.

The additional step is

let desired_min = the smallest of the number range you want the data to have
let desired_max = the largest of the number range you want the data to have

 (n - min)  / (max - min) * (desired_max - desired_min) + desired_min = our 'n' normalized to our desired range

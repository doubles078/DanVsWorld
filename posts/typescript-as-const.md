---
title: 'Typescript As Const snippet'
subtitle: 'Powerful way to use As Const from Matt Pocock'
tag: 'tech 🤖'
date: '2023-10-15'
---

I recently watched an enlightening quick [Youtube video by Matt Pocock](https://www.youtube.com/watch?v=6M9aZzm-kEc) on what he considers Typescripts most underrated tool -- As Const. __as const__ does as it implies, sets a variable as a constant. For example

```tsx
// Produces a type error: Type '"light"' is not assignable to type '"dark"'
let DARK = 'dark' as const;
DARK = 'light';
```

Matt uses __as const__ to construct a handy string union type off of a non-mutable object. 

```tsx
const routes = {
    home: '/',
    about: 'about',
    contact: 'contact'
} as const

type RouteObjType = typeof routes;
// Gets the obj keys "home" | "about" | "contact"
type RouteKeyType = keyof RouteObjType;

// The magic 🧙‍♂️ of as const happens here, where Typescript  
// interprets the Route type as "/" | "about" | "contact", 
// rather than just a primitive string
type Route = RouteObjType[RouteKeyType];
```

He also touches on __Object.Freeze__ which freezes the object it is passed: *A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.*

However, unlike __as const__, __Object.Freeze__ won't prevent a user from doing deep changes in the object i.e.

```tsx
const routes = {
  home: '/',
  about: 'about',
  contact: 'contact',
  store: {
    shoes: 'shoes',
  },
} as const;

// TS error
routes.store.shoes = 'sneakers';

const routes = Object.freeze({
  home: '/',
  about: 'about',
  contact: 'contact',
  store: {
    shoes: 'shoes',
  },
});

// Error 
routes.home = 'home';
// No error
routes.store.shoes = 'sneakers';
```

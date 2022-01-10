---
title: 'Tricking Mapbox with synthetic events'
subtitle: 'Creating and dispatching custom DOM events'
tag: 'tech 🤖'
date: '2021-09-15'
---

![A screenshot of Mapbox with a label over it](/images/posts/tricking-mapbox-with-synthetic-events/mapbox-events.png 'A screenshot of a Codepen using Mapbox')

## The Problem

If you overlay HTML on top of a <canvas> or <iframe> element, that element will capture all of it's events, not passing any through to the <canvas> or <iframe> behind it. My team wanted users to be able to drag, pan, pinch and zoom on a Mapbox map (canvas) while hovered over overlayed <div> labels we created.

## Potential Solutions

**1. Map forwards gestures to overlayed <div>'s**
![A screenshot of Figma jamboard map to div brainstorm](/images/posts/tricking-mapbox-with-synthetic-events/map-label.png 'A screenshot of Figma jamboard')

We would remove all events from the <div> element using: **pointer-events: none**. Then, find the coordinates of the <div> within the Map/Canvas. Add event listeners on the map so that every time the mouse enters the <div>'s bounding box location, the relevant events would kick off. In our case, we made certain areas of the map opaque when hovered on a label.

\
The con of this solution were the expensive event listeners. Since we have to constantly track the position of the mouse and check if it was on our <div> labels, there was too much lag for this to be viable.

\
**2. The label captures hovers and clicks, while the map handles pan and zooms**
![A screenshot of Figma jamboard impossible brainstorm](/images/posts/tricking-mapbox-with-synthetic-events/impossible.png 'A screenshot of Figma jamboard')
It would be nice if we could have found a way to turn off some events, rather than all like with the _pointer-events: none_. However, from what we saw this was not possible.

## Our Solution

**The label forwards events to the map.**
![A screenshot of Figma jamboard label to map brainstorm](/images/posts/tricking-mapbox-with-synthetic-events/label-map.png 'A screenshot of Figma jamboard')

We create events within the label using the [Event Constructor](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event) then dispatch them ON the <canvas>. We weren't sure if this would work, since we were relying on the [Mapbox api](https://docs.mapbox.com/mapbox-gl-js/api/) to pickup and naturally handle these custom events... but it did! The magic 🧙 is in this small snippet.

```jsx
const canvas = document.querySelector('#map');
const label = document.querySelector('#label');

label.addEventListener('mousedown', e => {
  let options = {
    pageX: e.pageX,
    pageY: e.pageY,
    clientX: e.clientX,
    clientY: e.clientY,
  };

  canvas.dispatchEvent(new MouseEvent('mousedown', options));
});
```

Find both the map and label from the DOM, add new event listener for mouse down to the label, dispatch a mouse event with the relevant fields to the canvas and 💥, you have drag panning on the map while mousedowned on a <div> external from the <canvas>.

\
Our full playground is [in this clickable link to the CodePen - link](https://codepen.io/doubles078/pen/gORMLVa).

## Bonus Complexity

One fun little learning 👨‍🎓 involved the _wheel_ event. We needed to force it to be a **passive** event on the DOM, overriding the browser's native handling of zooming into the screen when a user pinches their trackpad. This way when a user pinches-to-zoom while over a label the map handles the zoom into itself.

```jsx
const canvas = document.querySelector('#map');
const label = document.querySelector('#label');

label.addEventListener(
  'wheel',
  e => {
    // Need this to prevent browsers native zooming
    e.preventDefault();
    const syntheticEvent = new WheelEvent('wheel', {
      deltaY: e.deltaY,
      deltaX: e.deltaX,
      deltaZ: e.deltaZ,
      clientX: e.clientX,
      clientY: e.clientY,
    });
    canvas.dispatchEvent(syntheticEvent);

    // The tricky passive option - not sure if way to set this in React event handlers
  },
  { passive: false },
);
```

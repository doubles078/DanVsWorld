---
title: 'Flexbox responsive patterns'
subtitle: 'Two properties of flexbox to understand'
tag: 'tech 🤖'
date: '2023-10-17'
---

A couple of flexbox design patterns from [Kevin Powell](https://www.youtube.com/watch?v=vQAvjof1oe4). My [Codepen](https://codepen.io/doubles078/pen/ExGBeGw?editors=1100) follow along.

## Flex basis

The [flex basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) *property sets the initial main size of a flex item.*  Each item set with a flex basis wants to reach it's defined size (100% in example below), but will shrink down to the correct size if it runs out of available space.

```html
  <div class="content flow">
    <h1>even columns</h1>
    <div class="even-columns">
      <div class="col">Lorem ipsum</div>
      <div class="col">Lorem ipsumLorem ipsum</div>
      <div class="col">Lorem ipsumLorem ipsumLorem ipsum</div>      
    </div>
  </div>
```

```css
.even-columns {
  display: flex;
  gap: 1rem;
}

.even-columns > * {
/* Makes the columns shrink to "equal" sizes as flex shrink is on by default. */
  flex-basis: 100%;
}
```

## Flex wrap

The [flex wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) *property sets whether flex items are forced onto one line or can wrap onto multiple lines.* With a flex grow of 1 (defaults to 0), the content will try to fit the maximum amount of col's onto a line at 10rem before wrapping. 

```html
    <div class="content flow">
    <h1>grid-ish</h1>
    <div class="grid-columns">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>      
      <div class="col"></div>      
      <div class="col"></div>      
    </div>
  </div>
```

```css
.grid-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.grid-columns > * {
  /* grow (defaults to 0), shrink, basis */
  flex: 1 1 10rem;
}
```
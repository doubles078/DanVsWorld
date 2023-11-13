---
title: 'Making an Old School Runescape bot'
subtitle: 'Using RobotJS and NodeJS to make a color bot'
tag: 'tech 🤖'
date: '2023-11-13'
---

I had a lot of fun going through this workshop by [Learn Code by Gaming](https://www.youtube.com/watch?v=Uw11Lb8ov88) on building an old school runescape bot. You end up with a NodeJS bot that uses [RobotJS](https://github.com/octalmage/robotjs) to search for hex colors on the screen, move the mouse around, then click on those colors. He uses [Ikov](https://ikov.io/) as a private server you won't get banned from for testing.

![OSRS bot in action screenshot](/images/posts/osrs-bot/osrsbot.png 'OSRS bot in action screenshot')

I wrote my version using some Typescript and very basic types. I also had to play around with the dimensions and screen cap algorithms, since I learned some of the differences between a macbook pros resolution vs screen density.

\
All-in-all it was a really fun and rewarding mini project. It was super cool to see my character chop and stack wood infinitely while I was walking around the house 🥳. I am going to continue doing these smaller projects, since they really capture a lot of the reasons I got into programming to begin with, that creative and exciting feeling of building something incredibly useful or fun. [Link to the github for the project](https://github.com/doubles078/osrs_bot).

## General gist of the script

- Figure out what color the items you are looking for on the screen are. Can use a screen cap tool, then open the image in GIMP or Photoshop then use the eye dropper.

```tsx
const TREE_HEX_COLORS = [
  '5f4322',
  '6b4b26',
  '52391d',
  '322311',
  '1a1309',
  '78552b',
];
```

- Take a screen capture of a certain area of your screen. Then search random pixels in that area until you find one that matches what you are looking for.

```tsx
export const findTree = () => {
  // Where the screen cap begins
  const x = 300;
  const y = 300;
  // Screen cap dimensions
  const width = 800;
  const height = 405;
  const number_of_pixels_to_sample = 1000;

  // Take a screen cap that is 800x405, that starts at
  // pixel 300x300 on your computer screen
  const image = robotjs.screen.capture(x, y, width, height);

  // Iterate over the pixels randomly x times (x being 1000 here)
  // until we find a matching pixel to our tree colors
  for (let i = 0; i < number_of_pixels_to_sample; i++) {
    const random_x = getRandomInt(width - 1);
    const random_y = getRandomInt(height - 1);
    const sample_color = image.colorAt(random_x, random_y);

    if (TREE_HEX_COLORS.includes(sample_color)) {
      const screen_x = random_x + x;
      const screen_y = random_y + y;
      console.log(
        'Found a 🌲 at: ',
        screen_x,
        screen_y,
        ' with color: ',
        sample_color,
      );
      // move mouse to coords
      robotjs.moveMouse(screen_x, screen_y);
      if (confirmTree()) {
        return { x: screen_x, y: screen_y };
      }
    }
  }

  console.log('Could not find a tree 🌳.');
  return false;
};
```

- Check if you are actually about to click on a tree by checking if the 'tree' text in the top left of the screen exists.

```tsx
export const confirmTree = () => {
  const THE_WORD_TREE_COLOR = '00ffff';

  // wait a bit to make sure you do not check the text before it is there
  sleep(300);

  // check the color of the action text
  const text_x = 100;
  const text_y = 73;
  const pixel_color = robotjs.getPixelColor(text_x, text_y);

  console.log('Yup, this is a tree.');
  return pixel_color === THE_WORD_TREE_COLOR;
};
```

- Cut the tree

```tsx
export const cutTree = (tree: TREE, sleep_ms: number) => {
  const { x, y } = tree;
  console.log('Trying to cut tree at x: ', x, ' y: ', y);
  robotjs.mouseClick();
  sleep(sleep_ms);
};
```

- Drop the logs you just cut

```tsx
export const dropInventoryItems = (color: string) => {
  // Distance to the right the mouse moves to click the drop menu
  const DROP_OFFSET = 70;
  const inventory = {
    x: 1291,
    y: 621,
  };

  let pixel_color = robotjs.getPixelColor(inventory.x, inventory.y);
  let waitCycle = 0;
  const waitCycleMax = 9;

  while (pixel_color !== color && waitCycle < waitCycleMax) {
    // wait longer to see if the action finishes
    sleep(3000);
    // when tree/asset/item dissapears, double check that pixels color
    pixel_color = robotjs.getPixelColor(inventory.x, inventory.y);

    // dont wait too long
    waitCycle++;
  }
  // Distance away to click the drop controls
  if (pixel_color.toLocaleLowerCase() === color.toLocaleLowerCase()) {
    console.log('Dropping thing from inventory spot 1.');
    robotjs.moveMouse(inventory.x, inventory.y);
    robotjs.mouseClick('right');
    sleep(300);
    robotjs.moveMouse(inventory.x, inventory.y + DROP_OFFSET);
    robotjs.mouseClick();
    sleep(3000);
  }
};
```

And that is it! The tree will just keep spawning or your character will keep rotating the camera until they find more trees.

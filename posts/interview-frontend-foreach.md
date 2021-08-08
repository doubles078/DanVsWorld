---
title: 'Frontend Interview Retrospective'
subtitle: 'Working to be more functional'
tag: 'tech 🤖'
date: '2021-08-01'
---

![A random picture of a computer screen with code on it](/images/posts/interview-frontend-foreach/optimized-coding.jpg 'Computer screen with code on it')

One of my goals in becoming a better developer is trying to think more functionally. Recently, I did a take home challenge for a new software engineering role as a mostly frontend dev. One of the interviewers asked me why I wrote the following piece of code and how I could have been more functional with it.

```javascript
let arrayOfUsersFreeTimes = [];

// create an array of all user free times
userSchedules.forEach(schedule => {
  arrayOfUsersFreeTimes.push(
    findFreeTimes(start, end, durationInMinutes, schedule),
  );
});
```

He asked why I was looping over with a foreach and pushing to an array rather than using map, which was meant for this task. I realized, under pressure, my mind naturally went to foreach's (and maybe a for loop or two...).

\
The next day I watched a great video just to refresh my mind a bit on what it means to think more functionally.

\
[JSConf YouTube video on functional programming](https://www.youtube.com/watch?v=e-5obm1G_FY)

\
I was inspired and looked through some production code at work -- refactoring similar instances with slick Map and Filter array methods. The code immediately read so much cleaner.

```javascript
let arrayOfUsersFreeTimes = userSchedules.map(schedule => {
    return findFreeTimes(start, end, durationInMinutes, schedule),
});
```

Just getting a hang on using the proper array methods is not exactly my goal moving foward though. I would really start to think more functionally in general when I approach problems:

- Not mutating state
- Writing more pure functions
- Utilizing higher order functions

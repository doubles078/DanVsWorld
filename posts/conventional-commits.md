---
title: 'An Effort in Conventional Commits'
subtitle: 'How I started writing better commit messages'
tag: 'tech 🤖'
date: '2021-08-08'
---

![A screenshot of Conventional Commits logo](/images/posts/conventional-commits/conv-commits.png 'A screenshot of Conventional Commits logo')

My first ever professional software developer 360 peer review went pretty well. The reviews were overwhelmingly positive - especially considering it was my first year as a dev. At the end, it came time for my manager (and a senior front end dev) to give me some constructive feedback. That feedback? "You could write better commit messages."

My mind immediately jumped to... "hey, I write commit messages in line with the rest of the team and no one has ever brought this up as an issue, what gives?!?" While the first half may have been true, this obviously did not make bad practice a good standard. I sucked up my pride and checked my last commit message.

> added in some stuff
>
> - Dan Donohue 2018 commit message

Yep, I needed work 😆. That's where conventional commits came in. Turns out, another dev received similar feedback as me, so, as a team, we did some research and turned to [Conventional Commits](https://www.conventionalcommits.org/): **a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.**

\
We used [Husky](https://www.npmjs.com/package/husky) to add git hooks so every time we tried to add a commit message, it would "lint" it to see if it met the correct specifications. Not only did I see immediate improvement in my commit messages, but everything felt much more organized. There have been plenty of times in the past 3 years since that fateful 360 review where I have had to look through old commits for reference. The standarization of casing, message sizes and types made it that much easier to find what I needed.

> refactor: updating how errors are handled and cleaning enrollment variables
>
> - Dan Donohue 2020 better commit messages

\
Recently, I read another nice refresher article on Medium called [Art of Writing a Good Commit Message](https://dev.to/wordssaysalot/art-of-writing-a-good-commit-message-56o7). I tend to use feat/fix/chore for 99% of my message types. Ritesh had a nice list of some of the others I will have to try out in the future.

- feat - a new feature
- fix - a bug fix
- docs - changes in documentation
- style - everything related to styling
- refactor - code changes that neither fixes a bug or adds a feature
- test - everything related to testing
- chore - updating build tasks, package manager configs, etc

Moving forward I want to work on breaking my commit messages into a "title" and a "body" rather than truncating a short message (since Husky has a message size limit I was making my messages too short), as well as utilizing specific commit types as to what I am working on.

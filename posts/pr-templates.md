---
title: 'Pull request templates'
subtitle: 'Giving PRs a bit more context'
tag: 'tech 🤖'
date: '2022-01-10'
---

One of my favorite little Marie-Kondo/Clean Cody tidbits I have really latched onto since joining [Robin](https://robinpowered.com/) is their use of [pull request templates in our Github repo](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository). All it is, is a little file name **pull_request_template.md** that goes inside a **.github** directory in your project. It really didn't take that long to get use to - and my PR descriptions went from maybe couple sentences (or just one...) of vague description - to generally well formatted lists, images, gifs and context on how to interpret and test the PR. Seems like an obvious addition to a project in hindisght, yet I still have not added one to this blog's repo... 🤦

### Example File

```md
## What's new

<!-- [short summary of changes and why they were made] -->

<!-- [any screenshots if applicable]
|         Old          |         New          |
| :------------------: | :------------------: |
| [old screenshot/gif] | [new screenshot/gif] |
-->

## Implementation Details

<!-- [go into detail on specific implementation or trickiness that the review should know about, if applicable] -->

## Testing

<!-- [explain how to test] -->

## References, Dependencies, and Things Left TODO

<!--
 - [ ] [link to pull requests that this depends on](#)
 - [ ] something that's left todo.
-->
```

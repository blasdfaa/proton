**[WATCH DEMO](https://v-zdorovcev.github.io/proton/)**

Run `yarn install` to have dev dependencies installed.

After having published the app to your remote repo `gh-pages` branch
make sure that your remote repo settings on GitHub provide for `gh-pages branch` to be a source for GitHub Pages.


## Enjoy

> Commands below employ `yarn`. `npm` can be employed instead.

`yarn start` ==> have your app served at `http://localhost:1234/`

`yarn build-dev` ==> have your project built (unminified) under `dist/`

`yarn build` ==> have your project built (minified) under `dist/`

> `prebuild-dev` and `prebuild` clean `dist/` up and are invoked automatically

`yarn push-gh-pages` ==> have whatever is built under `dist/` published with github pages

NB! Have your git clean before publishing (i.e. any changes commited). 
Do not change anything until publishing completes as the publishing tool manipulates the tree.

You won't see any local `gh-pages` branch after publishing completes. You don't need it either.

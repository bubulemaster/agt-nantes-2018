# Agile Tour Nantes 2018 Website

## About

This repository contain web site of Agile Tour Nantes 2018.

This project is build using:
 * [Preact](https://preactjs.com)
 * [Grillade CSS](https://knacss.com/grillade/)
 * [Fort Awesome](https://github.com/FortAwesome)

## How it's build

This site is build around webcomponent that you can found in `src/components`:
 * `app` is main application that conatain all components. This is the main padding-left
 * `banner` is the first section, the landing page
 * `buy` is section that contain howto buy a ticket
 * `footer` is the footer of web page
 * `map` is section with google map static image in background
 * `speaker` is the part with part or all speaker (see below to more information)
 * `sponsor` is the sponsor showcase
 * `timeline` is subpart of `banner` page. It's specifically for Agt Nantes 2018
 * `whatis` is where you explain what is your event
 * `credits` is where you add mention for photo or other copyright
 * `becomesponsor` is page to be come a sponsor
 * `extrapage` common component use by credits and becomesponsor components

## Speakers section

In `src/components/speaker` folder, you can found `speakers-list.js` file:

```javascript
export default [
  {
    name: 'Alexandre Boutin',
    subtitle: 'AgileToYou',
    cssclass: 'alexandreBoutin'
  }
]
```

this is list of speaker with `name`, `subtitle` (in our case firm name) and `image`.

To benefit of `webpack` optimization, image is not a simple link. It's javascript import. All images are stored in `src/components/speaker/images/speakers`

## Sponsors section

In `src/components/sponsor` folder, you can found `sponsors-list.js` file:

```javascript
export default [
  {
    cssclass: 'gfi'
  },
  {
    cssclass: 'imt'
  }
]
```

this is list of CSS class to be responsive.

## CLI Commands

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production with minification without map and ssr file
yarn run prod

# test the production build locally
yarn run serve
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Docker

To more easy use, you can use [Docker](https://www.docker.com) in `docker` folder. Run `./build.sh` to build image. Run `./run.sh` to run container.

If you unix UID is `1000`, you can do `su node` in container. If not, you can remove comment in `Dockerfile` to add your user with you UID to map container's user and your local's user.

## License

Project is published under the [MIT license](LICENSE.txt). Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)

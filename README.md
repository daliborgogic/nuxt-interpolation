# nuxt-interpolation

> [Nuxt.js](https://github.com/nuxt/nuxt.js/) module as directive for binding every link to catch the click event, and if it's a relative link router will push. For improved security `rel="noopener"` will be added automatically if target is `_blank`

> :warning: For Nuxt 3, see [here](https://github.dev/daliborgogic/interpolation)

## Setup

### Install the module
```
npm install nuxt-interpolation
# or
yarn add nuxt-interpolation
```

### Register the module
```javascript
{
  modules: [
    'nuxt-interpolation',
  ]
}
```

## Usage

```html
<div v-html="content" v-interpolation></div>
```

## License

[MIT](https://opensource.org/licenses/MIT)



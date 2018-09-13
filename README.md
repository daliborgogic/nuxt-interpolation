# interpolation

> [Nuxt.js](https://github.com/nuxt/nuxt.js/) directive for binding every link to catch the click event, and if it's a relative link router will push. For improved security `rel="noopener"` will be added automatically if target is `_blank`

## Setup

- Add ```nuxt-interpolation``` as dependency
- Add ```nuxt-interpolation``` to modules section of ```nuxt.config.js```

```javascript
{
  modules: [
    ['nuxt-interpolation']
  ]
}
```

## Usage

```html
<div v-interpolation v-html="content"></div>
```

## License

[MIT](https://opensource.org/licenses/MIT)



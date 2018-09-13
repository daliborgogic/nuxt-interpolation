# interpolation

> Directive for binding every link to catch the click event, and if it's a relative link  ```router.push```

## Setup

- Add ```daliborgogic/interploation``` as dependency
- Add ```daliborgogic/interploation``` to plugins section of ```nuxt.config.js```

```javascript
{
  plugins: ['daliborgogic/interpolation']
}
```

## Usage

```html
<div v-interpolation v-html="content"></div>
```

## License

[MIT](https://opensource.org/licenses/MIT)



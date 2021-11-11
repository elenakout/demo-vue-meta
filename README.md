# demo-vue-meta

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```html
<meta name="title" content="demo-vue-meta">
  <meta name="description" content="This is a manual demo for the tags">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://4a68389c.demo-vue-meta.pages.dev/">
  <meta property="og:title" content="demo-vue-meta">
  <meta property="og:description" content="This is a manual demo for the tags">
  <meta property="og:image"
    content="https://i1.wp.com/www.burning-glass.com/wp-content/uploads/coding_400x267-1.jpg?resize=400%2C267&ssl=1">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://4a68389c.demo-vue-meta.pages.dev/">
  <meta property="twitter:title" content="demo-vue-meta">
  <meta property="twitter:description" content="This is a manual demo for the tags">
  <meta property="twitter:image"
    content="https://i1.wp.com/www.burning-glass.com/wp-content/uploads/coding_400x267-1.jpg?resize=400%2C267&ssl=1">
```

```json
metaInfo() {
    return {
      title: 'This is a demo project',
      meta: [
        {
          name: 'description',
          content: 'This is a test for testing the meta data',
        },
        {
          property: 'og:title',
          content: 'This is a demo project',
        },
        {
          property: 'og:url',
          content: 'https://372b5435.demo-vue-meta.pages.dev/',
        },
        { property: 'og:site_name', content: 'Demo' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:image',
          content:
            'https://i1.wp.com/www.burning-glass.com/wp-content/uploads/coding_400x267-1.jpg?resize=400%2C267&ssl=1',
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        {
          property: 'twitter:url',
          content: 'https://372b5435.demo-vue-meta.pages.dev/',
        },
        { property: 'twitter:title', content: 'This is a demo project' },
        {
          property: 'twitter:description',
          content: 'This is a test for testing the meta data',
        },
        {
          property: 'twitter:image',
          content:
            'https://i1.wp.com/www.burning-glass.com/wp-content/uploads/coding_400x267-1.jpg?resize=400%2C267&ssl=1',
        },
        { name: 'robots', content: 'index,follow' },
      ],
    };
  },
  ```

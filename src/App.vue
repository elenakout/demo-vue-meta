<script>
export default {
  name: 'App',
  // metaInfo() {
  //   return {
  //     title: 'This is a demo project',
  //     meta: [
  //       {
  //         name: 'description',
  //         content: 'This is a test for testing the meta data',
  //       },
  //       {
  //         property: 'og:title',
  //         content: 'This is a demo project',
  //       },
  //       {
  //         property: 'og:url',
  //         content: 'https://372b5435.demo-vue-meta.pages.dev/',
  //       },
  //       { property: 'og:site_name', content: 'Demo' },
  //       { property: 'og:type', content: 'website' },
  //       {
  //         property: 'og:image',
  //         content:
  //           'https://i1.wp.com/www.burning-glass.com/wp-content/uploads/coding_400x267-1.jpg?resize=400%2C267&ssl=1',
  //       },
  //       { property: 'twitter:card', content: 'summary_large_image' },
  //       {
  //         property: 'twitter:url',
  //         content: 'https://372b5435.demo-vue-meta.pages.dev/',
  //       },
  //       { property: 'twitter:title', content: 'This is a demo project' },
  //       {
  //         property: 'twitter:description',
  //         content: 'This is a test for testing the meta data',
  //       },
  //       {
  //         property: 'twitter:image',
  //         content:
  //           'https://i1.wp.com/www.burning-glass.com/wp-content/uploads/coding_400x267-1.jpg?resize=400%2C267&ssl=1',
  //       },
  //       { name: 'robots', content: 'index,follow' },
  //     ],
  //   };
  // },
};
</script>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

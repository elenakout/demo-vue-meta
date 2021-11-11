const siteName = 'My demo site';
const image = 'https://i1.wp.com/www.burning-glass.com/wp-content/uploads/coding_400x267-1.jpg?resize=400%2C267&ssl=1';
// let errorImage = 'https://some-domain.com/404-error-image.jpg';
const twitterHandler = '@handler';
const twitterCard = 'summary';

const titleDescriptionMetas = {
  title: {
    home: 'Coolest home page title here',
    about: 'What this site is all about',
  },
  description: {
    home: 'Page descriptions need to be around the 70 string length limit',
    about: 'About Page description herength (70 words)',
  },
};

const PageData = [
  {
    pageName: 'Home',
    title: titleDescriptionMetas.title.home,
    tags: [
      {
        name: 'description',
        content: titleDescriptionMetas.description.home,
      },
      {
        name: 'og:image',
        content: image,
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:title',
        content: titleDescriptionMetas.title.home,
      },
      {
        name: 'og:site_name',
        content: siteName,
      },
      {
        name: 'og:url',
        content: '',
      },
      {
        name: 'twitter:card',
        content: twitterCard,
      },
      {
        name: 'twitter:site',
        content: twitterHandler,
      },
      {
        name: 'twitter:creator',
        content: twitterHandler,
      },
      {
        name: 'twitter:title',
        content: titleDescriptionMetas.title.home,
      },
      {
        name: 'twitter:description',
        content: titleDescriptionMetas.description.home,
      },
      {
        name: 'twitter:image',
        content: image,
      },
    ],
  },
  {
    pageName: 'About',
    title: titleDescriptionMetas.title.about,
    tags: [
      {
        name: 'description',
        content: titleDescriptionMetas.description.about
      },
      {
        name: 'og:image',
        content: image
      },
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:title',
        content: titleDescriptionMetas.title.about
      },
      {
        name: 'og:site_name',
        content: siteName
      },
      {
        name: 'og:url',
        content: ''
      },
      {
        name: 'twitter:card',
        content: twitterCard
      },
      {
        name: 'twitter:site',
        content: twitterHandler
      },
      {
        name: 'twitter:creator',
        content: twitterHandler
      },
      {
        name: 'twitter:title',
        content: titleDescriptionMetas.title.about
      },
      {
        name: 'twitter:description',
        content: titleDescriptionMetas.description.avoutb
      },
      {
        name: 'twitter:image',
        content: image
      },
    ],
  },
];

const assignMetas = (pageName, path = window.location.href,
  injectDynamicContent = false, pageData = null) => {
  if (!injectDynamicContent) { // static pages
    const exist = PageData.filter((x) => x.pageName === pageName);
    if (exist.length > 0) {
      document.title = exist[0].title;

      // remove stale metas
      Array.from(document.querySelectorAll('[data-vue-meta-controlled]')).map((el) => el.parentNode.removeChild(el));

      exist[0].tags.map((tagDef) => {
        const tag = document.createElement('meta');
        let urlHelperVal = false; // will help us search for 'og:url'
        Object.keys(tagDef).forEach((key) => {
          tag.setAttribute(key, urlHelperVal ? path : tagDef[key]);
          urlHelperVal = tagDef[key] === 'og:url';
        });
        tag.setAttribute('data-vue-meta-controlled', '');
        return tag;
      }).forEach((tag) => document.head.appendChild(tag));
    }
  } else { // dynamic pages (e.g blog post page)
    document.title = pageData.title;

    // remove stale metas
    Array.from(document.querySelectorAll('[data-vue-meta-controlled]')).map((el) => el.parentNode.removeChild(el));

    pageData.tags.map((tagDef) => {
      const tag = document.createElement('meta');
      let urlHelperVal = false; // will help us search for 'og:url'
      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, urlHelperVal ? path : tagDef[key]);
        urlHelperVal = tagDef[key] === 'og:url';
      });
      tag.setAttribute('data-vue-meta-controlled', '');
      return tag;
    }).forEach((tag) => document.head.appendChild(tag));
  }
};

export default assignMetas;

module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          'gatsby-remark-images',
          'gatsby-remark-unwrap-images',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'dojo2',
        accessToken: process.env.PRISMIC_API,
        // lang: "zh-hk",
        schemas: {
          category: require('./src/schemas/category.json'),
          hero_links: require('./src/schemas/category.json'),
          homepage: require('./src/schemas/homepage.json'),
          post: require('./src/schemas/post.json'),
          project: require('./src/schemas/project.json'),
          type: require('./src/schemas/type.json'),
        },
        linkResolver: () => (post) => `/${post.uid}`,
        // htmlSerializer: () => prismicHtmlSerializer,
      },
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};

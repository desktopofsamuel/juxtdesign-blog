const urljoin = require('url-join');
const config = require('./static/SiteConfig');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(config.siteUrl, config.pathPrefix)}/favicon.png`,
      author: config.userName,
      copyright: config.copyright,
    },
  },
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/default.tsx'),
        },
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
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KMZKK6Q',
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
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // 'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) => {
          let pages = [];
          allSitePage.edges.map((edge) => {
            pages.push({
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            });
          });
          return pages;
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-advanced-sitemap`,
    //   options: {
    //     // 1 query for each data type
    //     query: `
    //       {
    //         allMdx {
    //           edges {
    //             node {
    //               fields {
    //                 slug
    //               }
    //               id
    //               frontmatter {
    //                 title
    //               }
    //             }
    //           }
    //         }
    //       }`,
    //     // The filepath and name to Index Sitemap. Defaults to '/sitemap.xml'.
    //     output: '/sitemap.xml',
    //     mapping: {
    //       allMdx: {
    //         sitemap: `page`,
    //       },
    //     },
    //     // Each data type can be mapped to a predefined sitemap
    //     // Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
    //     // The default sitemap - if none is passed - will be pages
    //     // allSitePage: {
    //     //   sitemap: `page`,
    //     //   // Add a query level prefix to slugs, Don't get confused with global path prefix from Gatsby
    //     //   // This will add a prefix to this perticular sitemap only
    //     //   prefix: 'page/',
    //     //   // Custom Serializer
    //     // },
    //     // allGhostTag: {
    //     //     sitemap: `tags`,
    //     // },
    //     // allGhostAuthor: {
    //     //     sitemap: `authors`,
    //     // },
    //     // allGhostPage: {
    //     //     sitemap: `pages`,
    //     // },
    //     // },
    //     exclude: [
    //       `/dev-404-page`,
    //       `/404`,
    //       `/404.html`,
    //       `/offline-plugin-app-shell-fallback`,
    //     ],
    //     createLinkInHead: false, // optional: create a link in the `<head>` of your site
    //     addUncaughtPages: false, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
    //   },
    // },
  ],
};

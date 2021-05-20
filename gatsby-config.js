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
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
            },
          },
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
        defer: true,
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
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMdx = ref.query.allMdx;
          ret.generator = 'GatsbyJS Advanced Starter';
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                copyright
                author  
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.fields.date,
                url: `${site.siteMetadata.rssMetadata.site_url}/posts${edge.node.fields.slug}/`,
                guid: `${site.siteMetadata.rssMetadata.site_url}/posts${edge.node.fields.slug}/`,
                author: site.siteMetadata.rssMetadata.author,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })),
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [fields___date] },
                filter: {frontmatter: { draft: { ne: true }}, fileAbsolutePath: {regex: "/blog/"}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields {
                      slug
                      date
                    }
                    frontmatter {
                      title
                      date
                      category
                      tags
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: config.siteRssTitle,
          },
          // {
          //   serialize: ({ query: { site, allMdx } }) =>
          //     allMdx.edges.map((edge) => ({
          //       ...edge.node.frontmatter,
          //       description: edge.node.excerpt,
          //       date: edge.node.fields.date,
          //       url:
          //         site.siteMetadata.rssMetadata.site_url +
          //         edge.node.fields.slug,
          //       guid:
          //         site.siteMetadata.rssMetadata.site_url +
          //         edge.node.fields.slug,
          //       author: site.siteMetadata.rssMetadata.userName,
          //       custom_elements: [
          //         {
          //           "content:encoded":
          //             edge.node.html +
          //             `<a href="` +
          //             edge.node.frontmatter.url +
          //             `" target="_blank" rel="noopener">Read More</a>`,
          //         },
          //       ],
          //     })),
          //   query: `
          //   {
          //     allMdx(
          //       limit: 1000,
          //       sort: { order: DESC, fields: [fields___date] },
          //       filter: {frontmatter: { draft: { ne: true }}, fileAbsolutePath: {regex: "/digest/"}}
          //     ) {
          //       edges {
          //         node {
          //           excerpt
          //           html
          //           timeToRead
          //           fields {
          //             slug
          //             date
          //           }
          //           frontmatter {
          //             title
          //             cover
          //             date
          //             category
          //             tags
          //             url
          //           }
          //         }
          //       }
          //     }
          //   }
          //   `,
          //   output: "/digest-rss.xml",
          //   title: "Digest of " + config.siteRssTitle,
          // },
        ],
      },
    },
  ],
};

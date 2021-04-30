const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const kebabCase = require('lodash.kebabcase');
const dayjs = require('dayjs');
const siteConfig = require('./static/SiteConfig');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  let slug;
  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug'))
        slug = `/${kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
        const date = dayjs(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({ node, name: 'date', value: date.toISOString() });
      }
    }
    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'template', value: source });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve('src/templates/post.tsx');
  const tagPage = path.resolve('src/templates/tag.jsx');
  const categoryPage = path.resolve('src/templates/category.jsx');
  // const listingPage = path.resolve('./src/templates/listing.jsx');
  // const landingPage = path.resolve('./src/templates/landing.jsx');

  // Get a full list of markdown posts
  const markdownQueryResult = await graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              category
              date
            }
          }
        }
      }
      allPrismicCategory {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const tagSet = new Set();
  const categorySet = new Set();
  const PrismicCategorySet = markdownQueryResult.data.allPrismicCategory.edges;
  const postsEdges = markdownQueryResult.data.allMdx.edges;

  // Sort posts
  postsEdges.sort((postA, postB) => {
    const dateA = dayjs(postA.node.frontmatter.date, siteConfig.dateFromFormat);

    const dateB = dayjs(postB.node.frontmatter.date, siteConfig.dateFromFormat);

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  // Paging
  // const { postsPerPage } = siteConfig;
  // if (postsPerPage) {
  //   const pageCount = Math.ceil(postsEdges.length / postsPerPage);

  //   [...Array(pageCount)].forEach((_val, pageNum) => {
  //     createPage({
  //       path: pageNum === 0 ? `/` : `/${pageNum + 1}/`,
  //       component: listingPage,
  //       context: {
  //         limit: postsPerPage,
  //         skip: pageNum * postsPerPage,
  //         pageCount,
  //         currentPageNum: pageNum + 1,
  //       },
  //     });
  //   });
  // } else {
  //   // Load the landing page instead
  //   createPage({
  //     path: `/`,
  //     component: landingPage,
  //   });
  // }

  // Post page creating
  postsEdges.forEach((edge, index) => {
    // Generate a list of tags
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    // Generate a list of categories
    if (edge.node.frontmatter.category) {
      categorySet.add(edge.node.frontmatter.category);
    }

    // Create post pages
    const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];
    // let postType = "blog";
    // const regex = /\/digest\//;

    // if (edge.node.fileAbsolutePath.match(regex)) {
    //   postType = "digest";
    // }

    createPage({
      path: `/posts${edge.node.fields.slug}/`,
      component: postPage,
      context: {
        slug: edge.node.fields.slug,
        nexttitle: nextEdge.node.frontmatter.title,
        nextslug: `/posts${nextEdge.node.fields.slug}/`,
        prevtitle: prevEdge.node.frontmatter.title,
        prevslug: `/posts${prevEdge.node.fields.slug}/`,
      },
    });
  });

  //  Create tag pages for blog tags
  tagSet.forEach((tag) => {
    createPage({
      path: `/tags/${kebabCase(tag)}/`,
      component: tagPage,
      context: {
        tag,
        slug: `/tags/${kebabCase(tag)}/`,
      },
    });
  });

  // Create category pages
  categorySet.forEach((category) => {
    createPage({
      path: `/categories/${kebabCase(category)}/`,
      component: categoryPage,
      context: { category, slug: `/categories/${kebabCase(category)}/` },
    });
  });

  // Create category pages for Prismic Tags
  PrismicCategorySet.forEach((edge) => {
    createPage({
      path: `/tags/${kebabCase(edge.node.uid)}/`,
      component: tagPage,
      context: {
        tag: edge.node.uid,
        slug: `/tags/${kebabCase(edge.node.uid)}/`,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

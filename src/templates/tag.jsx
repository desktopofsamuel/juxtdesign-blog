import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import startCase from 'lodash.startcase';
import Layout from '@/components/common/Layout';
import Container from '@/components/common/Container';
import AppList from '@/components/AppList';
import config from '../../static/SiteConfig';
// import PostListing from "../components/PostListing/PostListing";

// import SEO from "../components/SEO/SEO";

const Row = styled('section', {
  padding: '1rem 0',
});

const AppGridRow = styled('section', {
  display: 'grid',
  gridTemplate: 'auto/repeat(12, 1fr)',
  gridRowGap: '$3',
  gridColumnGap: '$3',

  '@md': {
    display: 'block',
  },
});

const Header = styled('div', {
  padding: '$6 0',

  '@md': {
    padding: '$4 0',
  },
});

const Heading = styled('h1', {
  fontFamily: '$sans',
  fontWeight: '$regular',
  fontSize: '$5',
});

const Subtitle = styled('p', {
  fontSize: '$4',
});

const SubHeading = styled('small', {
  marginBottom: '$2',
  color: '$blue500',
});

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const StartCase = startCase(tag);
  const blogEdges = data.blog.edges;
  const appEdges = data.app.edges;
  const description = data.category ? data.category.data.description : null;

  return (
    <Layout>
      <Container>
        {/* <SEO
          title={`Posts tagged as "${StartCase}" | ${config.siteTitle}`}
          description={description}
        /> */}
        <Header>
          <SubHeading>Topic</SubHeading>
          <Heading>{StartCase}</Heading>
          <Subtitle>{description}</Subtitle>
        </Header>
        <hr />
        <Row>
          {!!blogEdges[0] && <SubHeading>Articles</SubHeading>}
          {/* <PostListing postEdges={blogEdges} /> */}
        </Row>
        <Row>
          {!!appEdges[0] && <SubHeading>Apps</SubHeading>}
          <AppGridRow>
            <AppList posts={appEdges} />
          </AppGridRow>
        </Row>
      </Container>
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    category: prismicCategory(uid: { eq: $tag }) {
      data {
        name
        keywords
        description
        image {
          fluid {
            src
          }
        }
      }
    }
    app: allPrismicPost(
      sort: { fields: data___date, order: DESC }
      filter: {
        data: { categories: { elemMatch: { category: { uid: { eq: $tag } } } } }
      }
    ) {
      edges {
        node {
          uid
          data {
            feature {
              url
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
            title {
              text
            }
            url {
              url
            }
            body {
              ... on PrismicPostBodyText {
                slice_type
                id
                primary {
                  text {
                    html
                  }
                }
              }
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  ... on PrismicCategory {
                    uid
                    id
                    data {
                      name
                    }
                  }
                }
              }
            }
            types {
              document {
                ... on PrismicType {
                  id
                  data {
                    name
                    icon {
                      fluid {
                        ...GatsbyPrismicImageFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    blog: allMdx(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            featurePhoto {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            date
          }
        }
      }
    }
  }
`;

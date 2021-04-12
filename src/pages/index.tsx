import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Title from '@/components/Title';
import Header from '@/components/common/Header/Header';
import Container from '@/components/common/Container';
import Footer from '@/components/common/Footer';
import Layout from '@/components/common/Layout';
import AppList from '@/components/AppList';
import CategoryList from '@/components/CategoryList';
import { Subheading } from '@/components/common/TextStyles';
import BlogList from '@/components/BlogList';

type IndexPageProps = {
  data: {
    category: {
      edges: {
        node: {
          uid: string;
          data: {
            name: string;
          };
        };
      };
    };
    app: {
      edges: object;
    };
    blog: {
      edges: object;
    };
  };
};

const Row = styled('div', {
  display: 'grid',
  gridTemplate: 'auto/repeat(12, 1fr)',
  gridGap: '4rem',

  '@md': {
    display: 'block',
  },
});

const AppListWrapper = styled('div', {
  gridGap: '$3',
  gridColumn: 'span 9',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '@md': {
    display: 'block',
  },
});

const Block = styled('div', {});

const Landing = ({ data }: IndexPageProps) => {
  const { app, category, blog } = data;

  return (
    <Layout>
      <Container>
        <Row>
          <Block css={{ gridColumn: 'span 3' }}>
            <Subheading>Categories</Subheading>
            <CategoryList categories={category.edges} />
          </Block>
          {console.log(app.edges)}
          <AppListWrapper>
            <AppList posts={app.edges} />
          </AppListWrapper>

          <BlogList posts={blog.edges} />
          {console.log(blog.edges)}
        </Row>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Landing;

export const pageQuery = graphql`
  query IndexQuery {
    category: allPrismicCategory(sort: { order: ASC, fields: data___name }) {
      edges {
        node {
          uid
          data {
            name
          }
        }
      }
    }
    app: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      limit: 12
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
    blog: allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          timeToRead
          excerpt
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY", locale: "en")
            category
            tags
            featurePhoto {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          fields {
            slug
            date
            template
          }
          headings {
            depth
            value
          }
          tableOfContents
        }
      }
    }
  }
`;

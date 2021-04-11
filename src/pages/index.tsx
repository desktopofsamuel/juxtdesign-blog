import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Title from '@/components/Title';
import Header from '@/components/common/Header/Header';
import Container from '@/components/common/Container';
import Footer from '@/components/common/Footer';
import Layout from '@/components/common/Layout';
import AppList from '@/components/AppList';
import CategoryList from '@/components/CategoryList';

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
  };
};

const Landing = ({ data }: IndexPageProps) => {
  const { app, category } = data;

  return (
    <Layout>
      <Container>
        <Title />
        <CategoryList categories={category.edges} />
        <AppList posts={app.edges} />
        <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
        <p>
          Follow me on Twitter (
          <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
        </p>
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
  }
`;

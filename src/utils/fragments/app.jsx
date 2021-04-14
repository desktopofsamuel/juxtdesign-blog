import { graphql } from 'gatsby';

export const postFragment = graphql`
  fragment app on PrismicPost {
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
`;

export default postFragment;

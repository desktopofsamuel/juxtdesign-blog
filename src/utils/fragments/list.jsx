import { graphql } from 'gatsby';

export const listFragment = graphql`
  fragment list on Mdx {
    fields {
      slug
      date
    }
    timeToRead
    frontmatter {
      title
      date
      category
      tags
      feature
      featurePhoto {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
    excerpt
  }
`;

export default listFragment;

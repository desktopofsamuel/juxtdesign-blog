import { graphql } from 'gatsby';

export const listFragment = graphql`
  fragment list on Mdx {
    fields {
      slug
      date
      template
    }
    timeToRead
    frontmatter {
      title
      tags
      date
      url
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

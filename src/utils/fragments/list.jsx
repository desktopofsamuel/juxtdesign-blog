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
      date(formatString: "MMM DD, YYYY", locale: "en")
      category
      tags
      feature
      featurePhoto {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      url
    }
    excerpt
  }
`;

export default listFragment;

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
      date(fromNow: true)
      category
      tags
      feature
      featurePhoto {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 800, quality: 80)
        }
      }
      template
      url
    }
    excerpt
  }
`;

export default listFragment;

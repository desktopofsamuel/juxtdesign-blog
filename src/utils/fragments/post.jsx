import { graphql } from 'gatsby';

export const postFragment = graphql`
  fragment post on Mdx {
    body
    timeToRead
    excerpt(pruneLength: 250)
    frontmatter {
      title
      date(formatString: "MMM DD, YYYY", locale: "en")
      category
      tags
      featurePhoto {
        publicURL
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
`;

export default postFragment;

import { useStaticQuery, graphql } from 'gatsby';

const useTagsList = () => {
  const { allPrismicPost } = useStaticQuery(
    graphql`
      query TagsListQuery {
        allPrismicPost {
          group(field: data___categories___category___uid) {
            totalCount
            fieldValue
          }
        }
      }
    `,
  );

  return allPrismicPost.group;
};

export default useTagsList;

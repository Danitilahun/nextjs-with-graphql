export const typeDefs = `#graphql;
type Novel {
    id: ID!
    title: String
    image: String
    createdAt: String
    updatedAt: String
    authors: [Author]
  }


  type Author {
    id: ID!
    name: String
    novelId: String
  };


`;

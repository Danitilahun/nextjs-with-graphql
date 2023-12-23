import { gql } from "@apollo/client";

export const ADD_NOVEL = gql`
  mutation AddNovel($image: String, $title: String) {
    addNovel(image: $image, title: $title) {
      authors {
        id
        name
        novelId
      }
      createdAt
      id
      image
      title
      updatedAt
    }
  }
`;

export const DELETE_NOVEL = gql`
  mutation deleteNovel($id: ID!) {
    deleteNovel(id: $id) {
      id
      title
      image
    }
  }
`;

export const UPDATE_NOVEL = gql`
  mutation UpdateNovel($id: ID!, $title: String, $image: String) {
    updateNovel(id: $id, title: $title, image: $image) {
      id
      image
      title
    }
  }
`;

"use client";

import { ADD_AUTHOR, DELETE_AUTHOR, UPDATE_NOVEL } from "@/graphql/mutation";
import { GET_NOVEL } from "@/graphql/queries";
import { INovel } from "@/typings";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

const Novel = ({ params: { id } }: Props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  const { data, loading, error } = useQuery(GET_NOVEL, {
    variables: { id },
  });

  const novel: INovel = data?.novel;

  const [addAuthor] = useMutation(ADD_AUTHOR, {
    variables: { novelId: id, name },
    refetchQueries: [{ query: GET_NOVEL, variables: { id } }],
  });

  const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
    refetchQueries: [{ query: GET_NOVEL, variables: { id } }],
  });

  const [updateNovel] = useMutation(UPDATE_NOVEL, {
    variables: { id: id, title: title, image: url },
    refetchQueries: [{ query: GET_NOVEL, variables: { id } }],
  });

  if (loading)
    return (
      <p className="text-white flex items-center justify-center">
        Loading ....
      </p>
    );
  if (error)
    return (
      <p className="text-white flex items-center justify-center">
        Oops! Something went wrong ....
      </p>
    );

  return <article className="max-w-5xl bg-red"></article>;
};

export default Novel;

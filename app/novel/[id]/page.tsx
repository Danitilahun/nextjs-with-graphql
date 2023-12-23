"use client";

import { GET_NOVEL } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
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

  return <></>;
};

export default Novel;

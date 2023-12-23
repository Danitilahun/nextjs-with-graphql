"use client";

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

  return <></>;
};

export default Novel;

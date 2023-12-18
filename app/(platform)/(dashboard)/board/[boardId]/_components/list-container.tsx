"use client";

import { ListWithCard } from "@/types";

import { ListForm } from "./list-form";

interface ListContainerProps {
  data: ListWithCard[];
  boardId: string;
}

export const ListContainer = (props: ListContainerProps) => {
  const { data, boardId } = props;

  return (
    <ol>
      <ListForm />
    </ol>
  );
};

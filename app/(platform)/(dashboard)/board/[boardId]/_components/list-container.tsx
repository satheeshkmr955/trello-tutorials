"use client";

import { useEffect, useState } from "react";

import { ListWithCard } from "@/types";

import { ListForm } from "./list-form";
import { ListItem } from "./list-item";

interface ListContainerProps {
  data: ListWithCard[];
  boardId: string;
}

export const ListContainer = (props: ListContainerProps) => {
  const { data, boardId } = props;
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  return (
    <ol className="flex gap-x-3 h-full">
      {orderedData.map((list, index) => {
        return <ListItem key={list.id} index={index} data={list} />;
      })}
      <ListForm />
    </ol>
  );
};

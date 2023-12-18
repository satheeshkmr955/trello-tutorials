"use client";

import { MoreHorizontalIcon, XIcon } from "lucide-react";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface BoardOptionsProps {
  id: string;
}

export const BoardOptions = (props: BoardOptionsProps) => {
  const { id } = props;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant={"transparent"}>
          <MoreHorizontalIcon className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
          <div className="text-sm font-medium text-center text-neutral-600 pb-4">
            Board action
          </div>
          <PopoverClose asChild>
            <Button
              className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-700"
              variant={"ghost"}
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </PopoverClose>
          <Button
            variant={"ghost"}
            onClick={() => {}}
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          >
            Delete this board
          </Button>
        </PopoverContent>
      </PopoverContent>
    </Popover>
  );
};

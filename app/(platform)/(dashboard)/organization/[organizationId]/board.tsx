import { deleteBoard } from "@/actions/delete-board";
import { FormDelete } from "./form-delete";

interface BoardProps {
  title: string;
  id: string;
}

export const Board = (props: BoardProps) => {
  const { title, id } = props;

  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title: {title}</p>
      <FormDelete />
    </form>
  );
};

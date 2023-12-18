"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { InputType, ReturnType } from "./types";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";
import { DeleteBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id } = data;

  try {
    await db.board.delete({
      where: {
        orgId,
        id,
      },
    });
  } catch (error) {
    return {
      error: "Failed to delete.",
    };
  }

  revalidatePath(`/organization/${orgId}`);
  redirect(`/organization/${orgId}`);
};

export const deleteBoard = createSafeAction(DeleteBoard, handler);

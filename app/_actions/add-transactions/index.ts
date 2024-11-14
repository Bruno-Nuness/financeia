"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionType,
  TransationCategory,
  TransationPaymentMethod,
} from "@prisma/client";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface addTransactionParams {
  name: string;
  amount: number;
  category: TransationCategory;
  paymentMethod: TransationPaymentMethod;
  date: Date;
  type: TransactionType;
}

export const addTransaction = async (params: addTransactionParams) => {
  addTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized.");
  }

  await db.transaction.create({
    data: { ...params, userId },
  });

  revalidatePath("/transactions");
};

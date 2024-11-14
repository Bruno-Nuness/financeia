"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionType,
  TransationCategory,
  TransationPaymentMethod,
} from "@prisma/client";
import { UpsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  category: TransationCategory;
  paymentMethod: TransationPaymentMethod;
  date: Date;
  type: TransactionType;
}

export const UpsertTransaction = async (params: UpsertTransactionParams) => {
  UpsertTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized.");
  }

  await db.transaction.upsert({
    where: {
      id: params.id,
    },
    update: { ...params, userId },
    create: { ...params, userId },
  });

  revalidatePath("/transactions");
};

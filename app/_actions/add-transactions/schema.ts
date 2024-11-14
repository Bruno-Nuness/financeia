import {
  TransactionType,
  TransationCategory,
  TransationPaymentMethod,
} from "@prisma/client";
import { z } from "zod";

export const addTransactionSchema = z.object({
  name: z.string().trim().min(1),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransationCategory),
  paymentMethod: z.nativeEnum(TransationPaymentMethod),
  date: z.date(),
});

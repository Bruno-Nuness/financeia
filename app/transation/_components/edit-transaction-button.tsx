"use client";
import { useState } from "react";

import { PencilIcon } from "lucide-react";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Button } from "@/app/_components/ui/button";
import { Transaction } from "@prisma/client";

interface EdtiTransactionButtonProps {
  transaction: Transaction;
}

const EditTransactionButton = ({ transaction }: EdtiTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>

      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        transactionId={transaction.id}
        deafaultValues={{ ...transaction, amount: Number(transaction.amount) }}
      />
    </>
  );
};

export default EditTransactionButton;

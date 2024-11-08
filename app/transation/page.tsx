import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactinsColumns } from "./_columns";

const Transations = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full font-bold">
          Adiconar transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactinsColumns} data={transactions} />
    </div>
  );
};

export default Transations;

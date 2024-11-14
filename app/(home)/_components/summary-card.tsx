import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { WalletIcon } from "lucide-react";

const SummaryCard = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <WalletIcon size={16} />
          <p className="text-white opacity-70">Saldo</p>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">R$2.7000</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCard;

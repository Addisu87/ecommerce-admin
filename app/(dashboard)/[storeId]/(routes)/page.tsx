import { Suspense } from "react";
import { CreditCard, DollarSign, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { formatter } from "@/lib/utils";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { getTotalRevenue } from "@/actions/get-total-revenue";
import { getSalesCount } from "@/actions/get-sales-count";
import { getStockCount } from "@/actions/get-stock-count";
import Overview from "@/components/overview";
import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { lusitana } from "@/components/ui/fonts";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const totalRevenue = await getTotalRevenue(params.storeId);
  const salesCount = await getSalesCount(params.storeId);
  const stockCount = await getStockCount(params.storeId);
  const graphRevenue = await getGraphRevenue(params.storeId);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-4">
        <Heading title="Dashboard" description="Overview of your storeId" />
        <Separator />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-start">
              <DollarSign className="h-5 w-5 text-gray-700" />
              <CardTitle className="ml-2 text-sm font-medium">
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
              {formatter.format(totalRevenue)}
            </CardContent>
          </Card>

          <Card className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-start">
              <CreditCard className="h-5 w-5 text-gray-700" />
              <CardTitle className="ml-2 text-sm font-medium">Sales</CardTitle>
            </CardHeader>
            <CardContent
              className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
              +{salesCount}
            </CardContent>
          </Card>

          <Card className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-start">
              <Package className="h-5 w-5 text-gray-700" />
              <CardTitle className="ml-2 text-sm font-medium">
                Products In Stock
              </CardTitle>
            </CardHeader>
            <CardContent
              className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
              {stockCount}
            </CardContent>
          </Card>
        </div>
      </div>
      <Card className="rounded-xl shadow-sm w-11/12 mx-auto bg-gray-50 p-2">
        <CardHeader>
          <CardTitle className="ml-2 text-xl font-semibold">OverView</CardTitle>
        </CardHeader>
        <CardContent className="pl-2 text-lg">
          <Overview data={graphRevenue} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;

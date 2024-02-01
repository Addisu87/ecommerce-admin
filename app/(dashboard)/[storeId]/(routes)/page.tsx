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

  const showStats = [
    {
      id: 1,
      icon: <DollarSign />,
      title: "Total Revenue",
      content: formatter.format(totalRevenue),
    },
    {
      id: 2,
      icon: <CreditCard />,
      title: "Sales",
      content: salesCount,
    },
    {
      id: 3,
      icon: <Package />,
      title: "Products In Stock",
      content: stockCount,
    },
  ];

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-2 p-8 pt-4">
        <Heading title="Dashboard" description="Overview of your storeId" />
        <Separator />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showStats.map((stat) => (
            <Card key={stat.id} className="rounded-xl bg-gray-50 p-2 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-2 justify-start">
                <span className="h-4 w-4 text-gray-700">{stat.icon}</span>
                <CardTitle className="ml-2 text-sm font-medium">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent
                className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
              >
                {stat.content}
              </CardContent>
            </Card>
          ))}
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

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";

const DashboardLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  try {
    const store = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!store) {
      redirect("/");
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }

  return (
    <div className="px-2">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;

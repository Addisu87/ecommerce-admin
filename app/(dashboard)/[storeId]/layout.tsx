import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";

export const revalidate = 0;

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
    <>
      <Navbar />
      <div className="flex h-screen border-collapse overflow-hidden">
        <SideBar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1">
          {children}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;

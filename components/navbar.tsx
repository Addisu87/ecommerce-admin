import { UserButton, auth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Boxes } from "lucide-react";
import { redirect } from "next/navigation";

import MobileSidebar from "@/components/mobile-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import prismadb from "@/lib/prismadb";
import StoreSwitcher from "@/components/store-switcher";
import Link from "next/link";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <Link
          href={"/"}
          className="hidden items-center justify-between gap-2 md:flex"
        >
          <Boxes className="h-6 w-6" />
          <h1 className="text-lg font-semibold">e-Commerce Admin</h1>
        </Link>

        <div className={cn("block md:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <StoreSwitcher items={stores} />
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  HomeIcon,
  ListOrdered,
  Notebook,
  Palette,
  PencilRuler,
  Settings,
  ShoppingBasket,
  Split,
} from "lucide-react";

export const MainNav = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Overview",
      icon: HomeIcon,
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `${params.storeId}/billboards`,
      label: "Billboards",
      icon: Notebook,
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `${params.storeId}/categories`,
      label: "Categories",
      icon: Split,
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `${params.storeId}/sizes`,
      label: "Sizes",
      icon: PencilRuler,
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `${params.storeId}/colors`,
      label: "Colors",
      icon: Palette,
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `${params.storeId}/products`,
      label: "Products",
      icon: ShoppingBasket,
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `${params.storeId}/orders`,
      label: "Orders",
      icon: ListOrdered,
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `${params.storeId}/settings`,
      label: "Settings",
      icon: Settings,
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-2 lg:space-x-4", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex h-[32px] grow items-center justify-center gap-2 rounded-md text-sm font-medium bg-gray-50 p-3 transition-colors hover:text-primary md:flex-none md:justify-start md:p-2 md:px-3",
            route.active
              ? "text-black dark:text-white dark:bg-gray-800"
              : "text-muted-foreground"
          )}
        >
          <route.icon className="w-4" />
          <p className="hidden md:block"> {route.label}</p>
        </Link>
      ))}
    </nav>
  );
};

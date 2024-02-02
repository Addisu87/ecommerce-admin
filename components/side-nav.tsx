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

import { buttonVariants } from "./ui/button";

export const SideNav = ({
  className,
  isOpen,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement> & { isOpen: boolean }) => {
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
    <nav className={cn("space-y-2", className)} {...props}>
      {routes.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "group relative flex h-12 justify-start",
            item.active
              ? "font-bold hover:bg-muted dark:text-white dark:bg-gray-800"
              : "text-muted-foreground",
            isOpen && "group-hover:opacity-100"
          )}
        >
          <item.icon className={cn("h-5 w-5")} />
          {isOpen && (
            <span
              className={cn(
                "absolute left-12 text-base duration-200",
                className
              )}
            >
              {item.label}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
};

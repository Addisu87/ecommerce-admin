"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";

import { useSidebar } from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";
import { SideNav } from "./side-nav";

interface SidebarProps {
  className?: string;
}

const SideBar: React.FC<SidebarProps> = ({ className }) => {
  const { isOpen, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => {
      setStatus(false);
    }, 500);
  };

  return (
    <nav
      className={cn(
        `relative hidden h-screen border-r pt-20 md:block`,
        status && "duration-500",
        isOpen ? "w-56" : "w-[78px]",
        className
      )}
    >
      <ChevronLeft
        className={cn(
          "absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          !isOpen && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <SideNav
              isOpen={isOpen}
              className="transition-all duration-300 group-hover:z-2 group-hover:ml-3 group-hover:rounded group-hover:p-2 group-hover:opacity-30"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;

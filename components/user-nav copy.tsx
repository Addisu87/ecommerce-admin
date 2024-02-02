// Import necessary Clerk components and hooks
import { useUser } from "@clerk/nextjs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { UserAvatar } from "./user-avatar";

export function UserNav() {
  // Use Clerk's useUser hook to get authenticated user information
  const { user } = useUser();

  // Handle sign out using Clerk's signOut function
  const handleSignOut = async () => {
    await fetch("/api/auth/signout", {
      method: "POST",
    });
    // Redirect to the sign-out page
    window.location.href = "/auth/signout";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {/* Ensure that 'user' is passed as a prop to UserAvatar */}
        <UserAvatar
        // user={{
        //   name: user?.fullName ?? null,
        //   imageUrl: user?.imageUrl ?? null,
        // }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-4 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user?.fullName && <p className="font-medium">{user.fullName}</p>}
            {/* {user?.primaryEmailAddress && (
              <p className="w-[200px] truncate text-sm text-zinc-700">
                {user?.email}
              </p>
            )} */}
            <p>shadcn@example.com</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button onClick={handleSignOut} variant="outline" className="w-full">
            <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

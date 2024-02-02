// Import necessary Clerk components and hooks
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User as UserIcon } from "lucide-react";
import { type AvatarProps } from "@radix-ui/react-avatar";

interface UserAvatarProps extends AvatarProps {}

export function UserAvatar({ ...props }: UserAvatarProps) {
  // Use Clerk's useUser hook to get authenticated user information
  const { user } = useUser();

  return (
    <Avatar {...props}>
      {user ? (
        // If user is authenticated, show user's image or fallback icon
        user.imageUrl ? (
          <AvatarImage src={user.imageUrl} alt="User Picture" />
        ) : (
          <AvatarFallback>
            <span className="sr-only">{user.fullName}</span>
            <UserIcon className="h-4 w-4" />
          </AvatarFallback>
        )
      ) : (
        // If user is not authenticated, you can provide a default fallback
        <AvatarFallback>
          <UserIcon className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}

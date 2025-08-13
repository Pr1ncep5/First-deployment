import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { authClient, useSession } from "../lib/auth-client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export default function Header() {
  const session = useSession();
  const [, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      navigate({
        to: "/",
      });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <header className="flex sticky top-0 bg-primary h-16 shrink-0 items-center gap-2 border-b px-4 z-1000">
      <div>
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <Button asChild variant="outline">
                <Link to="/about">
                  About
                </Link>
              </Button>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Button asChild variant="outline">
                <Link to="/test">
                  Test
                </Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex-grow" />

      {session && session.data?.user ? (
        <DropdownMenu onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage
                src={session.data.user.image || undefined}
                alt={session.data.user.email}
              />
              <AvatarFallback>
                {session.data.user.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="z-1100">
            <DropdownMenuLabel>
              <p>{session.data.user.name}</p>
              <span className="text-muted-foreground truncate text-xs">
                {session.data.user.email}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link to="/about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
    </header>
  );
}




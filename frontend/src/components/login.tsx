import { useState } from "react";
import { authClient } from "../lib/auth-client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export function LoginCard() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await (authClient as any).signIn.magicLink({
        email,
        name,
        callbackURL: "/",
      });

      if (error) {
        toast.error("Authentication Failed", {
          description: error.message || "Could not send magic link",
        });
        console.error("Auth error details:", error);
      } else {
        toast.success("Magic link sent!");
      }
    } catch (err) {
      toast.error("Network Error", {
        description: "Failed to connect to authentication server",
      });
      console.error("Network error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-[350px] mx-auto mt-20 border-primary">
      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>
          Enter your email and name to sign in with a magic link
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <Button
              className="cursor-pointer"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Magic Link"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}



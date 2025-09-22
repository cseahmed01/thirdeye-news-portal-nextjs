"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LogoutButton({ className = "" }) {
  const { logout, isAuthenticated } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/signin");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Button onClick={handleLogout} variant="outline" className={className}>
      লগআউট
    </Button>
  );
}

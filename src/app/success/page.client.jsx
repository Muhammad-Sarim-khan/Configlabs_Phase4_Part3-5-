'use client';
export const dynamic = "force-dynamic";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const userId = searchParams.get("userId");
  const router = useRouter();

  useEffect(() => {
    if (sessionId && userId) {
      fetch("/api/save-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, userId }),
      }).then(() => {
        router.replace("/orders"); // redirect to order history
      });
    }
  }, [sessionId, userId]);

  return <p className="p-8 text-center">Processing your order...</p>;
}

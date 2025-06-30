'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function SuccessPage() {
  const router = useRouter();

  const [sessionId, setSessionId] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSessionId(params.get("session_id"));
    setUserId(params.get("userId"));
  }, []);

  useEffect(() => {
    if (sessionId && userId) {
      fetch("/api/save-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, userId }),
      }).then(() => {
        router.replace("/orders");
      });
    }
  }, [sessionId, userId, router]);

  return <p className="p-8 text-center">Processing your order...</p>;
}

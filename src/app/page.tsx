"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [searchResults, setSsearchResults] = useState<{
    results: string[];
    duration: number;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!input) setSsearchResults(undefined);
      const res = await fetch(`/api/search?q=${input}`);
    };
    fetchData();
  }, [input]);
  return (
    <main className="h-screen w-screen grainy">
      <div className="flex flex-col gap-6 items-center pt-32 duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5">
        <h1 className="text-5xl tracking-tight font-bold">SpeedSearch ⚡</h1>
        <p className="text-zinc-600 text-lg max-w-prose text-center">
          A high-performance API built with Hono, Next.js and Cloudflare. <br />{" "}
          Type a query below and get your results in miliseconds.
        </p>
        <input
          type="text"
          value={input}
          className="text-zinc-900"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </main>
  );
}

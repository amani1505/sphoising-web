"use client";

import "./globals.css";

export default function GlobalError({ error, retry }: { error: unknown; retry: () => void }) {
  console.error(error);

  return (
    <html lang="en">
      <body className="grid min-h-dvh place-items-center bg-white p-(--gutter) font-sans text-ink">
        <title>Something went wrong | SPH Group</title>
        <main className="max-w-xl">
          <h1 className="text-fluid-4xl leading-none font-extrabold tracking-tight">The site didn&apos;t load</h1>
          <p className="mt-4 text-fluid-lg text-ink/70">Something went wrong on our side. Try again in a moment.</p>
          <button
            type="button"
            onClick={() => retry()}
            className="mt-8 min-h-11 rounded-full bg-deep px-6 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}

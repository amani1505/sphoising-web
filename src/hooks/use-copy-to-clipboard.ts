"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const RESET_MS = 2000;

/** Copies text and reports `copied` for two seconds so the UI can confirm it. */
export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), RESET_MS);
      return true;
    } catch {
      // Clipboard can be blocked (insecure context, permissions); the visible value is still selectable.
      return false;
    }
  }, []);

  return { copied, copy };
}

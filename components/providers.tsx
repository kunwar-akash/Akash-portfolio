"use client";

import { Toaster } from "react-hot-toast";

export function Providers() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        className:
          "!bg-background !text-foreground !border !border-border !shadow-lg !text-sm",
        duration: 4000,
      }}
    />
  );
}

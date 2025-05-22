"use client";

import React from "react";
import "@/styles/globals.css";
import useLenis from "@/hooks/Lenis";

export default function RootLayout({ children }) {
  useLenis();

  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

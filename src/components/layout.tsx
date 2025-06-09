"use client";
import React from "react";
import Navbar from "./navbar";

import { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    
    </>
  );
}

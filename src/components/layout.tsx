"use client";
import React, { useState } from "react";
import Navbar from "./navbar/page";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

<Navbar/>
        
  );
}

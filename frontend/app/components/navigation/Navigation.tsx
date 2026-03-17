"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return <nav className="flex justify-between items-center space-x-2"></nav>;
}

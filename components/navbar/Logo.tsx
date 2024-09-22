import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaTents } from "react-icons/fa6";
function Logo() {
  return (
    <Button size={"icon"} asChild>
      <Link href={"/"}>
        <FaTents className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;

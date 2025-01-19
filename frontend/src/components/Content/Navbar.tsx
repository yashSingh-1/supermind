import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignedOut, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="w-full h-fit p-5 flex justify-between">
      <div className="text-xl font-mono">TriggerMind</div>
      <div>
        <SignedOut>
          <Button asChild className="bg-white">
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;

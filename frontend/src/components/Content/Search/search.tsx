"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";
import SuggestionBox from "../SuggestionBox/SuggestionBox";
import Link from "next/link";
import { usePaths } from "@/hooks/use-nav";

const SearchBar = () => {
  const path = usePaths();
  return (
    <div className="w-full">
      <div
        className="flex overflow-hidden gap-x-2 border-2
    border-[#3352CC] rounded-full pl-4 pr-1 py-1 items-center flex-1 mx-[100px]"
      >
        <SearchIcon color="#3352CC" />
        <Input
          placeholder="Type the Category, you want to Analyse Ads for!"
          className="border-none outline-none ring-0 focus:ring-0 flex-1"
        />
        <Link href={"/dashboard/home/analyse"}>
        <Button className="rounded-full bg-blue-600 flex items-end text-white hover:bg-blue-900">
          Analyse
        </Button>
        </Link>
      </div>
      <div className="flex justify-center">
      {/* <SuggestionBox /> */}
      {path.pathname.split("/")[3] === "analyse" ? null : <SuggestionBox />}
      </div>
    </div>
  );
};

export default SearchBar;

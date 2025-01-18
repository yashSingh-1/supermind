import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div
      className="flex overflow-hidden gap-x-2 border-2
    border-[#3352CC] rounded-full px-4 py-1 items-center flex-1"
    >
      <SearchIcon color="#3352CC" />
      <Input
        placeholder="Search by name, email or Status"
        className="border-none outline-none ring-0 focus:ring-0 flex-1"
      />
    </div>
  );
};

export default SearchBar;

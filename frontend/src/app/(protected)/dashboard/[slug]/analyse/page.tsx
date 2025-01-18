import Loader from "@/components/Content/Loader";
import SearchBar from "@/components/Content/Search/search";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <Loader state={false} className="flex flex-col justify-center items-center min-h-[600px]">
          <p>All the heavy duty stuff</p>
        </Loader>
      </div>

      {/* Fixed SearchBar */}
      <div className="sticky bottom-0 mb-10 shadow-md">
        <SearchBar />
      </div>
    </div>
  );
};

export default page;

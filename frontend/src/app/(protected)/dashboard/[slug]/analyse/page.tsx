"use client"

import AnalyseCard from "@/components/Content/AnalyseCard/AnalyseCard";
import Loader from "@/components/Content/Loader";
import SearchBar from "@/components/Content/Search/search";
import { usePaths } from "@/hooks/use-nav";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = ({prompt}: any) => {
  const [response, setResponse] = useState<any>();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <Loader
          state={false}
          className="flex flex-col justify-center items-center min-h-[600px]"
        >
          {
            response
          }
          <div>
          {/* {dataOfKeyword.high_performing_hooks[0]} */}
          </div>
          <AnalyseCard
            high_performing_hooks={[
              { hook: "ride it bitch", description: "Some thig and something" },
              { hook: "something something", description: "paranormal something"}
            ]}
            CTAs={[{ CTA: "sometging ", description: "get that thang on you" }]}
            trends={[
              {
                trend: "somethign really good",
                description: "perform it well homes",
              },
            ]}
            effective_solutions={[
              {
                solution: "effectively doing well",
                description: "termination placeholder",
              },
            ]}
            pain_points={[
              {
                pain_point: "Kathnamdbcusdv sjdghcuydyucv",
                description: "jhsvcusdbas kjauyguyc, buxvsah",
              },
            ]}
          />
        </Loader>
      </div>

      {/* Fixed SearchBar */}
      <div className="  bottom-0 mb-10 shadow-md sticky w-full">
        <SearchBar />
      </div>
    </div>
  );
};

export default page;

"use client";

import AnalyseCard from "@/components/Content/AnalyseCard/AnalyseCard";
import Loader from "@/components/Content/Loader";
import SearchBar from "@/components/Content/Search/search";
import { Button } from "@/components/ui/button";
import { usePaths } from "@/hooks/use-nav";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = ({ prompt }: any) => {
  const [response, setResponse] = useState<
    { companyId: string; prompt: string }[]
  >([]);

  const fetchHistory = async () => {
    const id = localStorage.getItem("companyid");

    console.log(id)

    if (!id) {
      return;
    }

    const res = await fetch(
      `https://postpulse.ronakpaul.com/get-history?companyid=${id}`
    );
    const data = await res.json();

    setResponse(data.response);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scrollable Content */}
      {
        response ? 
        <div className="flex-1 overflow-y-auto">
        <Loader
          state={false}
          className="flex flex-col justify-center items-center min-h-[600px]"
        >
          <div className="text-xl text-blue-600">Your History</div>

          <div>{/* {dataOfKeyword.high_performing_hooks[0]} */}</div>
          <div className="px-4 pt-10 w-full">

              {response.map((res) => (
                <p
                  key={res.prompt}
                  className=" w-full p-3 rounded-md border "
                >
                  {res.prompt}
                </p>
              ))
            }
          </div>
        </Loader>
      </div> : <div>
        You have no previous history
      </div>
      }

      {/* Fixed SearchBar */}
      <div className="flex justify-center mb-10 shadow-md sticky w-full">
        {/* <SearchBar /> */}
        <Link href={"/dashboard/home"}>
          <Button className="flex justify-center w-[500px]">
            Analyse more Ads
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;

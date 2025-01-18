"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import SuggestionBox from "../SuggestionBox/SuggestionBox";
import Link from "next/link";
import { usePaths } from "@/hooks/use-nav";
import { useRouter } from "next/navigation";
import AnalyseCard from "../AnalyseCard/AnalyseCard";
import { analyzeCategory } from "@/server/chatData";
import { CardDemo } from "../DescCard/DescCard";
import { client } from "@/lib/prisma";

const SearchBar = () => {
  const path = usePaths();
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<any>();
  const router = useRouter();

  const handleChange = (event: any) => {
    setPrompt(event.target.value); // Update state with input value
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("hitted");

    if (!prompt.trim()) {
      // setError("Please enter a category to analyze!");
      return;
    }

    // setIsLoading(true);
    // setError(null);

    try {
      const res = await fetch("http://localhost:8081/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      // console.log("Res: ", res.json)

      // const prismaAdd = await client.keywordPrompt.create({
      //   data: {
      //     keyword: prompt
      //   }
      // })

      // console.log("Prisma: ", prismaAdd);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      const parsedData = data.response;
      console.log(parsedData);

      // if(parsedData){
      //   router.push("/dashboard/home/analyse")
      // }

      setResponse(parsedData);
    } catch (error) {
      console.error("Error:", error);
      // setError(error instanceof Error ? error.message : "Failed to analyze category");
    } finally {
      // setIsLoading(false);
    }
  };

  console.log("here is the response : ", response);

  return (
    <div className="flex flex-col ">
      {response ? (
        <div className="top-0">
          <span className=" text-2xl">
            Analysis regarding
            <span className="text-blue-600 text-2xl mx-2">{prompt}</span>
          </span>
          <div className="text-white w-full my-5 border-b-2 rounded-sm p-4">
            <span className="font-bold">High Performing hooks</span>
            <div className=" grid grid-cols-3">
              {response?.high_performing_hooks.map((item: any) => (
                <div className="grid grid-cols-2 lg:grid-cols-3 mt-2">
                  <CardDemo name={item.answer} description={item.description} />
                </div>
              ))}
            </div>
          </div>
          <div className="text-white w-full my-5 border-b-2 rounded-sm p-4">
            <span className="font-bold">Call to Action</span>
            <div className=" grid grid-cols-3">
              {response?.CTAs.map((item: any) => (
                <div className="grid grid-cols-3 lg:grid-cols-3 mt-2">
                  <CardDemo name={item.answer} description={item.description} />
                </div>
              ))}
            </div>
          </div>
          <div className="text-white w-full my-5 border-b-2 rounded-sm p-4">
            <span className="font-bold">Trends</span>
            <div className=" grid grid-cols-3">
              {response?.trends.map((item: any) => (
                <div className="grid grid-cols-3 lg:grid-cols-3 mt-2">
                  <CardDemo name={item.answer} description={item.description} />
                </div>
              ))}
            </div>
          </div>
          <div className="text-white w-full my-5 border-b-2 rounded-sm p-4">
            <span className="font-bold">Solutions</span>
            <div className=" grid grid-cols-3">
              {response?.effective_solutions.map((item: any) => (
                <div className="grid grid-cols-3 lg:grid-cols-3 mt-2">
                  <CardDemo name={item.answer} description={item.description} />
                </div>
              ))}
            </div>
          </div>
          <div className="text-white w-full my-5 border-b-2 rounded-sm p-4">
            <span className="font-bold">Pain Points</span>
            <div className=" grid grid-cols-3">
              {response?.pain_points.map((item: any) => (
                <div className="grid grid-cols-3 lg:grid-cols-3 mt-2">
                  <CardDemo name={item.answer} description={item.description} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="w-full">
        <div
          className="flex overflow-hidden gap-x-2 border-2
    border-[#3352CC] rounded-full pl-4 pr-1 py-1 items-center flex-1 "
        >
          <SearchIcon color="#3352CC" />
          <Input
            placeholder="Type the Category, you want to Analyse Ads for!"
            className="border-none outline-none ring-0 focus:ring-0 flex-1"
            type="text"
            value={prompt}
            onChange={handleChange}
          />
          <Link
            href={{
              pathname: "/dashboard/home/analyse",
            }}
          >
            <Button
              className="rounded-full bg-blue-600 flex items-end text-white hover:bg-blue-900"
              onClick={(e) => handleSubmit(e)}
            >
              Analyse
            </Button>
          </Link>
        </div>
        <div className="flex justify-center">
          {/* <SuggestionBox /> */}
          {path.pathname.split("/")[3] === "analyse" ? null : <SuggestionBox />}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

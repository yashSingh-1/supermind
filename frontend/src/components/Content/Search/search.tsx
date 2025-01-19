"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import SuggestionBox from "../SuggestionBox/SuggestionBox";
import Link from "next/link";
import { usePaths } from "@/hooks/use-nav";
import { useRouter } from "next/navigation";
import { analyzeCategory } from "@/server/chatData";
import { CardDemo } from "../DescCard/DescCard";
import { client } from "@/lib/prisma";
import { cn } from "@/lib/utils";
import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId({ length: 7 });

const SearchBar = () => {
  const path = usePaths();
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<any>();
  const router = useRouter();
  const [companyId, setCompanyId] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("companyid");
    if (!id) {
      const randomID = uid.rnd();

      localStorage.setItem("companyid", randomID);
      setCompanyId(randomID);
    } else {
      setCompanyId(id);
    }
  }, []);

  const handleChange = (event: any) => {
    setPrompt(event.target.value); // Update state with input value
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();
    console.log("hitted");

    if (!prompt.trim()) {
      // setError("Please enter a category to analyze!");
      return;
    }

    // setIsLoading(true);
    // setError(null);

    try {
      const res = await fetch("https://postpulse.ronakpaul.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, companyId }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      const parsedData = data.response;
      console.log(parsedData);

      if (parsedData) {
        await fetch("https://postpulse.ronakpaul.com/save-history", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            history: [
              {
                companyId: companyId,
                prompt: prompt,
              },
            ],
          }),
        });
        setLoading(false);
      }

      setResponse(parsedData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log("here is the response : ", response);

  return (
    <div className="flex flex-col ">
      {
        response ?
        <div className="top-0">
        <span className=" text-2xl">
          Analysis regarding
          <span className="text-blue-600 text-2xl mx-2">{prompt}</span>
        </span>
        <div className="text-white w-full my-5 border-b-2 rounded-sm p-4">
          <span className="font-bold">High Performing hooks</span>
          <div className=" grid grid-cols-3">
            {response?.high_performing_hooks.map((item: any, index:any) => (
              <div className="grid grid-cols-2 lg:grid-cols-3 mt-2" key={index}>
                <CardDemo name={item.answer} description={item.description} />
              </div>
            ))}
          </div>
        </div>
        <div className="text-white w-full my-5 border-b-2 rounded-sm p-4">
          <span className="font-bold">Call to Action</span>
          <div className=" grid grid-cols-3">
            {response?.CTAs.map(( item: any, index:any) => (
              <div className="grid grid-cols-3 lg:grid-cols-3 mt-2" key={index}>
                <CardDemo name={item.answer} description={item.description} />
              </div>
            ))}
          </div>
        </div>
        <div className="text-white w-full my-5 border-b-2 rounded-sm p-4">
          <span className="font-bold">Trends</span>
          <div className=" grid grid-cols-3">
            {response?.trends.map((item: any, index:any) => (
              <div className="grid grid-cols-3 lg:grid-cols-3 mt-2" key={index}>
                <CardDemo name={item.answer} description={item.description} />
              </div>
            ))}
          </div>
        </div>
        <div className="text-white w-full my-5 border-b-2 rounded-sm p-4">
          <span className="font-bold">Solutions</span>
          <div className=" grid grid-cols-3">
            {response?.effective_solutions.map((item: any, index:any) => (
              <div className="grid grid-cols-3 lg:grid-cols-3 mt-2" key={index}>
                <CardDemo name={item.answer} description={item.description} />
              </div>
            ))}
          </div>
        </div>
        <div className="text-white w-full my-5 border-b-2 rounded-sm p-4">
          <span className="font-bold">Pain Points</span>
          <div className=" grid grid-cols-3">
            {response?.pain_points.map((item: any, index:any) => (
              <div className="grid grid-cols-3 lg:grid-cols-3 mt-2" key={index}>
                <CardDemo name={item.answer} description={item.description} />
              </div>
            ))}
          </div>
        </div>
      </div>: null
      }
      {loading ? (
        <div role="status" className="flex justify-center items-start">
          <svg
            aria-hidden="true"
            className="w-[50px] h-[50px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : null}

      <div
        className={cn(
          "w-[900px]",
          response ? "mt-[50px] w-full" : "mt-[200px]"
        )}
      >
        <div
          className="flex overflow-hidden gap-x-2 border-2
    border-[#3352CC] rounded-full pl-4 pr-1 py-1 items-center flex-1 "
        >
          <SearchIcon color="#3352CC" />
          <input
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
          {path.pathname.split("/")[3] === "analyse" ? null : <div onClick={(e) => handleSubmit}>
            {/* <SuggestionBox /> */}
            </div>}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, Link } from "lucide-react";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  const [response, setResponse] = useState<
    | {
        heading: string;
        subheading: string;
        description: string;
        keywords: string[];
      }
    | undefined
  >(undefined);
  const [prompt, setPrompt] = useState<string>("");

  const generateNow = async () => {
    if (!prompt) {
      return;
    }

    try {
      const res = await fetch("https://postpulse.ronakpaul.com/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      console.log("data from generation", data.response);
      setResponse(data.response);
    } catch (e) {}
  };

  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="text-white">
        {response ? (
          <div className="mb-5">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{response.heading}</CardTitle>
                <CardDescription className="text-xl">{response.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex text-lg">
                <span className="mr-2">Subheading: </span>
                <p>{response.subheading}</p>
              </CardContent>
              <CardFooter>
                <p className="border-r">
                  Keywords to use:
                </p>
                <p className="grid grid-cols-6">{response.keywords.map((words) => (
                  <div className="rounded-md flex justify-center text-xs items-center m-auto border p-2 mx-2 my-1 bg-transparent">
                    {words}
                  </div>
                ))}</p>
              </CardFooter>
            </Card>
          </div>
        ) : null}
      </div>
      {
        response ? null :
        <div className="md:w-[700px]">
        <div
          className="flex overflow-hidden gap-x-2 border-2
    border-[#3352CC] rounded-full pl-4 pr-1 py-1 items-center flex-1 "
        >
          <SearchIcon color="#3352CC" />
          <input
            placeholder="What do you wanna create an Ad for!"
            className="border-none outline-none ring-0 focus:ring-0 flex-1"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <Button
            onClick={generateNow}
            className="rounded-full bg-blue-600 flex items-end text-white hover:bg-blue-900"
          >
            Generate
          </Button>
        </div>
      </div>
      }
    </div>
  );
};

export default page;

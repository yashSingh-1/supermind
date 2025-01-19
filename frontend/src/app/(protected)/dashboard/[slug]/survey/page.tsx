"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [formUrl, setFormUrl] = useState("");

  const showForm = () => {

    const id = localStorage.getItem("companyid")

    const url = `/form?companyid=${id}`;

    setFormUrl(url);
  };



  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Button onClick={showForm}>Create a form for the user!</Button>
      {formUrl ? (
        <div className="flex p-2 mt-2 gap-x-2">
          <div className="border border-white rounded-md px-4 justify-center items-center py-1">
            {formUrl}
          </div>
          <Link href={formUrl}>
          <Button>
            Take a look!
          </Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default page;

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {
  high_performing_hooks: {
    hook: string;
    description: string;
  }[];
  CTAs: {
    CTA: string;
    description: string;
  }[];
  trends: {
    trend: string;
    description: string;
  }[];
  effective_solutions: {
    solution: string;
    description: string;
  }[];
  pain_points: {
    pain_point: string;
    description: string;
  }[];
};

const AnalyseCard = ({
  high_performing_hooks,
  CTAs,
  trends,
  effective_solutions,
  pain_points,
}: Props) => {
  return (
    <div className="flex flex-col m-2 p-3 ">
      <div id="hpf" className="py-2 border-b">
        {high_performing_hooks.map((item) => (
          <div key={item.hook}>
            <div className="text-lg">{item.hook}</div>
            <div className="text-base">{item.description}</div>
          </div>
        ))}
      </div>
      <div id="cta" className="py-2 border-b">
        {CTAs.map((item) => (
          <div key={item.CTA}>
            <div>{item.CTA}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
      <div id="trends" className="py-2 border-b">
        {trends.map((item) => (
          <div key={item.trend}>
            <div>{item.trend}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
      <div id="es" className="py-2 border-b">
        {effective_solutions.map((item) => (
          <div key={item.solution}>
            <div>{item.solution}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
      <div id="hpf" className="py-2 border-b">
        {pain_points.map((item) => (
          <div key={item.pain_point}>
            <div>{item.pain_point}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
      <div className="pt-2 flex justify-end">
        <Link href={"/dashboard/home/generation"}>
        <Button className="w-fit">
            Generate Customized Ads for me
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default AnalyseCard;

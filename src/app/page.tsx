"use client";

import { Song } from "@/components/Song";
import { bands, setlist } from "@/data/setlist";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState(0);

  return (
    <main className="flex justify-center relative">
      <div className="w-[30rem] h-fit min-h-screen flex flex-col static">
        <div className="h-full w-screen bg-poster bg-[size:100%] bg-repeat-y absolute inset-0 bg-fixed" />
        <div className="h-full w-screen absolute flex">
          <div className="w-[30rem] h-full bg-black opacity-70 z-0" />
        </div>
        <div className="relative z-30 text-white font-suite font-light">
          <div className="flex w-full justify-around text-2xl">
            {bands.map((name, idx) => (
              <div
                className={`w-32 text-center cursor-pointer transition-all border-b-2 duration-500 mt-6 ${
                  tab === idx ? "border-white" : "border-transparent"
                }`}
                onClick={() => setTab(idx)}
                key={name}
              >
                {name}
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col px-6 mt-6 space-y-2 mb-28">
            {setlist[tab].map((data, idx) => (
              <Song data={data} idx={idx} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

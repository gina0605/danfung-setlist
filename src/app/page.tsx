"use client";

import { useState } from "react";

type song = {
  title: string;
  composer: string;
};

const bands = ["단풍", "더블에이뮤직"];

const setlist: song[][] = [
  [
    { title: "한낮", composer: "쏜애플" },
    { title: "Plug In Baby", composer: "Muse" },
    { title: "낯선 열대", composer: "쏜애플" },
    { title: "로마네스크", composer: "쏜애플" },
    { title: "KICK BACK", composer: "Yonezu Kenshi" },
    { title: "Urban Lifestyle", composer: "데이브레이크" },
    { title: "Bad Liar", composer: "Imagine Dragons" },
    { title: "기억을 걷는 시간", composer: "넬" },
  ],
  [
    { title: "Where the Streets Have No Name", composer: "U2" },
    { title: "I Knew You Were Trouble", composer: "Taylor Swift" },
    { title: "Make Me Wanna Die", composer: "The Pretty Reckless" },
    { title: "얼음요새", composer: "터치드" },
    { title: "사랑하긴 했었나요", composer: "잔나비" },
    { title: "빗속에서", composer: "YB" },
    { title: "금지된 사랑", composer: "김경호" },
    { title: "LETTER", composer: "유다빈밴드" },
    { title: "Betelgeuse", composer: "Yuuri" },
    { title: "Blue", composer: "터치드" },
    { title: "popo", composer: "백예린" },
    { title: "サムライハート(Some Like it Hot)", composer: "SPYAIR" },
    { title: "9", composer: "Silica Gel" },
    { title: "good 4 u", composer: "Olivia Rodrigo" },
    { title: "Alive", composer: "터치드" },
    { title: "Sk8er Boi", composer: "Avril Lavigne" },
  ],
];

export default function Home() {
  const [tab, setTab] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black w-screen h-screen">
      <div className="w-full h-full bg-poster min-h-screen bg-cover flex justify-center">
        <div className="w-[30rem] h-full relative flex flex-col">
          <div className="w-full h-full absolute inset-0 bg-black opacity-70 z-0" />
          <div className="relative z-30 text-white font-suite font-light">
            <div className="flex w-full justify-around text-2xl">
              {bands.map((name, idx) => (
                <div
                  className={`w-32 text-center cursor-pointer transition-all border-b-2 duration-500 mt-6 ${
                    tab === idx ? "border-white" : "border-transparent"
                  }`}
                  onClick={() => setTab(idx)}
                >
                  {name}
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col text-base md:text-lg px-6 mt-6 space-y-2">
              {setlist[tab].map(({ title, composer }, idx) => (
                <div className="flex">
                  <p className="w-8">{String(idx + 1).padStart(2, "0")}.</p>
                  <p>
                    {title} - {composer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

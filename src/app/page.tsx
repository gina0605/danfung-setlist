"use client";

import { Song } from "@/components/Song";
import { song } from "@/types";
import { useState } from "react";

const bands = ["단풍", "더블에이뮤직"];

const setlist: song[][] = [
  [
    {
      title: "한낮",
      composer: "쏜애플",
      session: "V 임한비 G 박조현 한석희 B 신원직 D 송석빈",
    },
    {
      title: "Plug In Baby",
      composer: "Muse",
      session: "V 김창덕 G 이재만 한석희 B 신원직 K 여창민 D 송석빈",
    },
    {
      title: "낯선 열대",
      composer: "쏜애플",
      session: "V 남유주 G 이주미 이재만 B 송석빈 D 임유진",
    },
    {
      title: "로마네스크",
      composer: "쏜애플",
      session: "V 최현서 G 한석희 이주미 B 송석빈 K 여창민 D 임유진",
    },
    {
      title: "KICK BACK",
      composer: "Yonezu Kenshi",
      session: "V 남유주 G 박조현 B 신원직 K 여창민 김세은 D 임유진",
    },
    {
      title: "Urban Lifestyle",
      composer: "데이브레이크",
      session: "V 임한비 G 이주미 B 신원직 K 여창민 김세은 D 임유진",
    },
    {
      title: "Bad Liar",
      composer: "Imagine Dragons",
      session: "V 김창덕 G 박조현 이재만 B 신원직 K 김세은 여창민 D 임유진",
    },
    {
      title: "기억을 걷는 시간",
      composer: "넬",
      session: "V 최현서 G 이재만 한석희 B 송석빈 K 김세은 여창민 D 임유진",
    },
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
    <main className="flex min-h-fit h-screen flex-col items-center justify-between bg-black w-screen">
      <div className="w-full h-full bg-poster bg-cover bg-repeat-y bg-top min-h-screen flex justify-center">
        <div className="w-[30rem] h-full relative flex flex-col">
          <div className="w-full h-full min-h-screen absolute inset-0 bg-black opacity-70 z-0" />
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
            <div className="flex w-full flex-col px-6 mt-6 space-y-2 mb-4">
              {setlist[tab].map((data, idx) => (
                <Song data={data} idx={idx} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

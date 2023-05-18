type song = {
  title: string;
  composer: string;
};

export default function Home() {
  const danfung: song[] = [
    { title: "한낮", composer: "쏜애플" },
    { title: "Plug In Baby", composer: "Muse" },
    { title: "낯선 열대", composer: "쏜애플" },
    { title: "로마네스크", composer: "쏜애플" },
    { title: "KICK BACK", composer: "Yonezu Kenshi" },
    { title: "Urban Lifestyle", composer: "데이브레이크" },
    { title: "Bad Liar", composer: "Imagine Dragons" },
    { title: "기억을 걷는 시간", composer: "넬" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black w-screen h-screen">
      <div className="w-full h-full bg-poster min-h-screen bg-cover p-6 flex justify-center">
        <div className="w-[30rem] h-full relative flex flex-col">
          <div className="w-full h-full rounded-3xl absolute inset-0 bg-black opacity-70 z-0" />
          <div className="relative z-30 text-white font-suite font-light">
            <div className="flex w-full justify-around text-2xl">
              <p>단풍</p>
              <p>더블에이뮤직</p>
            </div>
            <div className="flex w-full flex-col text-lg px-6 mt-6 space-y-2">
              {danfung.map(({ title, composer }, idx) => (
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

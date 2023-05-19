import { song } from "@/types";
import { useState } from "react";

export interface SongProps {
  idx: number;
  data: song;
}

export const Song = ({ idx, data }: SongProps) => {
  const { title, composer, session } = data;
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={`flex text-base md:text-lg ${
          session ? "cursor-pointer" : ""
        }`}
        onClick={() => setOpen((x) => !x)}
      >
        <p className="w-8">{String(idx + 1).padStart(2, "0")}.</p>
        <p>
          {title} - {composer}
        </p>
      </div>
      {session && (
        <div
          className={`pl-8 transition-all duration-500 text-sm ${
            open ? " h-5 py-1 text-white" : "h-0 text-transparent"
          }`}
        >
          {open ? session : ""}
        </div>
      )}
    </div>
  );
};

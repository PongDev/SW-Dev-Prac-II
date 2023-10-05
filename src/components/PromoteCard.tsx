"use client";

import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e: Event) => {
    e.preventDefault();
  });

  return (
    <div className="flex flex-row justify-center m-5">
      <div className="w-[40%]">
        <VideoPlayer src="/video/getvaccine.mp4" isPlaying={playing} />
      </div>
      <div className="w-[20%] flex flex-col justify-between">
        <div className="m-2 mx-5">Get your vaccine today.</div>
        <button
          className="w-fit rounded-2xl bg-orange-400 px-7 py-2 m-2 mx-5 text-slate-800 font-semibold hover:bg-amber-400 hover:text-slate-900"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}

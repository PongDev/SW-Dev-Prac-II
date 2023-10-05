"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer({
  src,
  isPlaying,
}: {
  src: string;
  isPlaying: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);
  return <video src={src} ref={videoRef} controls loop muted />;
}

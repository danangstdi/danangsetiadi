"use client";

import { useRef, useState } from "react";
import { Play, Pause, SkipEnd } from "react-bootstrap-icons";

export default function VideoPlayer({ videos }) {
  const videoRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleNext = () => {
    const nextIndex = (current + 1) % videos.length;
    setCurrent(nextIndex);
    setIsPlaying(false);
  };

  const handleVideoEnded = () => {
    handleNext(); // Auto next when video ends
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <video
        ref={videoRef}
        key={videos[current]} // force reload when video source changes
        src={videos[current]}
        controls={false}
        onEnded={handleVideoEnded}
        className="w-full rounded-xl shadow-lg mb-4"
      />

      <div className="flex justify-center gap-4">
        <button
          onClick={handlePlay}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          <Play />
        </button>
        <button
          onClick={handlePause}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          <Pause />
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          <SkipEnd />
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Memutar video {current + 1} dari {videos.length}
      </p>
    </div>
  );
}

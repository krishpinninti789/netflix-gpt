"use client";

import { useState } from "react";

type VideoBackgroundProps = {
  videoKey: string;
};

const VideoBackground = ({ videoKey }: VideoBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden mt-8 rounded-xl border-2 border-gray-700">
      <iframe
        className="
          absolute
          left-1/2
          top-1/2
          h-[56.25vw]
          min-h-full
          w-[177.78vh]
          min-w-full
          -translate-x-1/2
          -translate-y-1/2
          scale-110
        "
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}&rel=0&modestbranding=1`}
        title="Movie trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;

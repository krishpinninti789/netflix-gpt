type VideoTitleProps = {
  title: string;
  overview: string;
};

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center">
      <div className="ml-8 mt-20 max-w-xl md:ml-16">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-6xl">
          {title}
        </h1>

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/90 md:text-lg">
          {overview}
        </p>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/80 cursor-pointer"
          >
            ▶ Play
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-md bg-gray-500/70 px-6 py-3 font-semibold text-white transition hover:bg-gray-500/50 cursor-pointer"
          >
            ⓘ More Info
          </button>
        </div>
        <div className="absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-black to-transparent" />
      </div>
    </div>
  );
};

export default VideoTitle;

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <Image
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ae999ff9-5858-4638-b0f2-8abcf9fb6a08/web/IN-en-20260831-TRIFECTA-perspective_8fd44dcf-63ea-4547-8e1e-e5fc7e03883d_large.jpg"
        alt="Cinematic background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-xl text-center">
          {/* Error code */}
          <p className="mb-2 text-7xl font-black tracking-widest text-red-600 sm:text-8xl">
            404
          </p>

          {/* Heading */}
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
            Lost in the stream?
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-md text-base leading-7 text-gray-300 sm:text-lg">
            Looks like this page took a wrong turn. The content you&apos;re
            looking for doesn&apos;t exist or may have been moved.
          </p>

          {/* Button */}
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
          >
            Return Home
          </Link>

          {/* Small message */}
          <p className="mt-6 text-sm text-gray-500">Error Code: NFX-404</p>
        </div>
      </div>
    </main>
  );
}

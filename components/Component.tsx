import Link from "next/link";
import React from "react";

function FilmIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center" prefetch={false}>
          <FilmIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Cine</span>
        </Link>
        <Link
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Start Watching Now
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Discover the Best Movies
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Cine is your gateway to the world of cinema. Explore our vast collection of movies and start watching
                  now.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Explore Our Catalog
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  From blockbusters to indie gems, we've got something for everyone. Start your journey today.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-6 sm:flex-row sm:justify-between py-6 w-full shrink-0 items-start px-4 md:px-6 border-t">
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-8">
          <div className="space-y-2">
            <h4 className="text-sm font-bold">About</h4>
            <nav className="grid gap-2">
              <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                Our Story
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                Mission
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                Team
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold">Developer</h4>
            <nav className="grid gap-2">
              <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                API Documentation
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                SDK Downloads
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                Community
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold">Socials</h4>
            <nav className="grid gap-2">
              <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                Twitter
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                Facebook
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                Instagram
              </Link>
            </nav>
          </div>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">© 2024 Cine. All rights reserved.</div>
      </footer>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/onyx.svg"
          alt="onyxmotionpictures logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            The Moment of Realization: {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              29 Days
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Daily previews of all 21 tracks will be rolling out soon!
            Look for them on socials @onyxmotionpictures on everything.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://discord.gg/onyxmotionpictures"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/discord.svg"
              alt="discord logomark"
              width={20}
              height={20}
            />
            discord →
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://youtube.com/@onyxmotionpictures"
            target="_blank"
            rel="noopener noreferrer"
          >
            youtube →
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://tiktok.com/@onyxmotionpictures"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/tiktok.svg"
            alt="tiktok icon"
            width={16}
            height={16}
          />
          tiktok →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://instagram.com/onyxmotionpictures"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/instagram.svg"
            alt="instagram icon"
            width={16}
            height={16}
          />
          instagram →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://soundcloud.com/onyxmotionpictures"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/soundcloud.svg"
            alt="soundcloud icon"
            width={16}
            height={16}
          />
          soundcloud →
        </a>
      </footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { MemeStrip } from "@/components/meme-strip";
import { TrenchMark } from "@/components/trench-mark";
import { Waitlist } from "@/components/waitlist";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-x-hidden bg-bg text-fg">
      <div className="trench-grid pointer-events-none absolute inset-0" />
      <div className="trench-noise pointer-events-none absolute inset-0 z-10" />

      <div className="relative z-20 flex min-h-dvh flex-col">
        <section className="hero-enter flex flex-1 flex-col items-center justify-center px-5 pt-8 pb-5 text-center sm:pt-10 sm:pb-6">
          <TrenchMark />

          <h1 className="mt-6 flex flex-col items-center sm:mt-7">
            <span className="headline font-medium text-fg uppercase">
              Trench for fun
            </span>
            <span className="headline-or mt-1.5 mb-1.5 font-medium text-muted uppercase sm:mt-2.5 sm:mb-2.5">
              or
            </span>
            <span className="headline font-medium text-fg uppercase">
              Trench for pain
            </span>
          </h1>

          <p className="mt-5 max-w-sm text-sm leading-relaxed tracking-wide text-muted sm:mt-6">
            B20 launchpad on Base. Coming soon.
          </p>

          <div className="mt-6 sm:mt-7">
            <Waitlist />
          </div>
        </section>

        <section className="shrink-0 pb-4 sm:pb-5">
          <MemeStrip />
        </section>

        <footer className="shrink-0 px-5 pb-10 text-center sm:pb-9">
          <p className="tracking-footer text-2xs text-subtle uppercase">
            Trench · Base · Coming soon
          </p>
        </footer>
      </div>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30">
        <div className="trench-streak-glow mx-16 mb-px h-3.5 blur-md" />
        <div className="trench-streak h-px w-full" />
      </div>
    </main>
  );
}

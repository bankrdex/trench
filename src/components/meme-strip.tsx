import { cn } from "@/lib/utils";

type Overlay = "bottom" | "center" | "few" | "doors" | "summer";

type Meme = {
  id: string;
  src: string | null;
  alt: string;
  caption: string;
  overlay: Overlay;
};

const MEMES: Meme[] = [
  {
    id: "trench",
    src: "/memes/wojak-trench.jpg",
    alt: "Wojak in a dirt trench staring at a green candle",
    caption: "staring at a green candle",
    overlay: "bottom",
  },
  {
    id: "based",
    src: "/memes/based.jpg",
    alt: "A Base-blue square on a concrete wall",
    caption: "we stay based",
    overlay: "center",
  },
  {
    id: "red",
    src: "/memes/red-candle.jpg",
    alt: "A red candle with a sad face in a trench",
    caption: "down bad in the trench",
    overlay: "bottom",
  },
  {
    id: "laptop",
    src: "/memes/laptop-wojak.jpg",
    alt: "Wojak at a laptop at 3am",
    caption: "just one more launch",
    overlay: "bottom",
  },
  {
    id: "few",
    src: null,
    alt: "The word few on black",
    caption: "few",
    overlay: "few",
  },
  {
    id: "chart",
    src: "/memes/vertical-chart.jpg",
    alt: "A chart going vertical while someone watches calmly",
    caption: "this is fine",
    overlay: "bottom",
  },
  {
    id: "summer",
    src: "/memes/onchain-summer.jpg",
    alt: "A Coinbase-blue summer horizon",
    caption: "onchain summer never ended",
    overlay: "summer",
  },
  {
    id: "doors",
    src: "/memes/two-doors.jpg",
    alt: "Two bunker doors, one ice-blue and one amber",
    caption: "FUN / PAIN",
    overlay: "doors",
  },
];

function MemeCard({ meme, eager }: { meme: Meme; eager?: boolean }) {
  return (
    <figure className="meme-card relative overflow-hidden rounded-xl bg-bg-elevated shadow-tile">
      {meme.src ? (
        <img
          src={meme.src}
          alt={meme.alt}
          width={720}
          height={960}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          className="absolute inset-0 size-full object-cover brightness-90 contrast-105 saturate-75"
        />
      ) : (
        <div className="absolute inset-0 bg-bg" />
      )}

      <div
        className="trench-noise pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        aria-hidden="true"
      />

      {meme.overlay === "bottom" && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-bg/90 via-bg/40 to-transparent px-2.5 pt-8 pb-2">
          <p className="meme-caption text-xs leading-snug font-medium tracking-wide text-fg/92">
            {meme.caption}
          </p>
        </figcaption>
      )}

      {meme.overlay === "center" && (
        <figcaption className="absolute inset-0 flex items-center justify-center bg-base-blue/25 px-3">
          <p className="meme-caption text-center text-base leading-tight font-semibold tracking-wide text-fg uppercase">
            we stay
            <br />
            based
          </p>
        </figcaption>
      )}

      {meme.overlay === "summer" && (
        <figcaption className="absolute inset-0 flex items-center justify-center bg-base-blue/20 px-3">
          <p className="meme-caption max-w-32 text-center text-sm leading-snug font-medium tracking-wider text-fg uppercase">
            onchain summer never ended
          </p>
        </figcaption>
      )}

      {meme.overlay === "few" && (
        <figcaption className="absolute inset-0 flex items-center justify-center bg-bg">
          <p className="text-2xs font-medium tracking-widest text-fg">{meme.caption}</p>
        </figcaption>
      )}

      {meme.overlay === "doors" && (
        <figcaption className="absolute inset-0 flex items-end justify-between px-2.5 pb-2.5">
          <span className="meme-caption tracking-footer text-2xs font-medium text-accent uppercase">
            fun
          </span>
          <span className="meme-caption tracking-footer text-2xs font-medium text-amber uppercase">
            pain
          </span>
        </figcaption>
      )}
    </figure>
  );
}

export function MemeStrip() {
  const loop = [...MEMES, ...MEMES];

  return (
    <div className="meme-viewport w-full overflow-hidden py-1" aria-label="Base trench memes">
      <div
        className={cn(
          "meme-track grid grid-flow-col grid-rows-2 auto-cols-max gap-2 pr-2",
          "sm:gap-2.5 md:grid-rows-1 md:gap-3",
        )}
      >
        {loop.map((meme, i) => {
          const isDup = i >= MEMES.length;
          return (
            <div
              key={`${meme.id}-${i}`}
              className={isDup ? "meme-dup" : undefined}
              aria-hidden={isDup || undefined}
            >
              <MemeCard meme={meme} eager={!isDup && i < 4} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

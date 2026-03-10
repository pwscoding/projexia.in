"use client";

const companies = [
  "PixelForge",
  "BrightPath",
  "Elevate Co",
  "NovaBuild",
  "ArcStack",
  "FluxMedia",
  "CoreShift",
  "VoltLabs",
];

export function LogoTicker() {
  const logos = [...companies, ...companies];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by 500+ agencies worldwide
        </p>

        <div
          className="relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-8 sm:gap-12 lg:gap-16 ticker-track w-max">
            {logos.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-3 shrink-0"
              >
                <div className="size-8 sm:size-9 rounded-lg bg-foreground/5 border border-border flex items-center justify-center text-xs font-bold text-muted-foreground">
                  {name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

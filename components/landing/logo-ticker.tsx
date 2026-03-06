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
  // Duplicate for seamless loop
  const logos = [...companies, ...companies];

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm text-muted-foreground mb-10">
          Trusted by innovative agencies worldwide
        </p>

        {/* Fade edges */}
        <div
          className="relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-12 ticker-track w-max">
            {logos.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-3 shrink-0"
              >
                <div className="size-10 rounded-lg bg-muted/40 border border-border/50 flex items-center justify-center text-xs font-bold text-muted-foreground">
                  {name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
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

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Projexia – Project Management for Modern Agencies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #4f46e5 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Projexia
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255, 255, 255, 0.8)",
              marginTop: 20,
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            Project Management for Modern Agencies
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 40,
            }}
          >
            {["Projects", "Portal", "Invoicing", "Time Tracking", "Reports"].map(
              (label) => (
                <div
                  key={label}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 999,
                    background: "rgba(255, 255, 255, 0.15)",
                    color: "white",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  {label}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

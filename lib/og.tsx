import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { person } from "./content";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `${person.name} — HR & People Management Professional, Lagos`;

// Shared renderer for the Open Graph and Twitter cards
export async function renderOg() {
  const [regular, italic, photo] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/fraunces-regular.woff")),
    readFile(join(process.cwd(), "assets/fonts/fraunces-italic.woff")),
    readFile(join(process.cwd(), "public/images/oluwatosin-dada-portrait.jpg")),
  ]);
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "radial-gradient(circle at 78% 45%, #173a28 0%, #0a1712 60%)",
          color: "#f5f7f4",
          fontFamily: "Fraunces",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 0 56px 64px",
            width: 780,
          }}
        >
          <div style={{ display: "flex", fontSize: 20, letterSpacing: 4, color: "#86bb9b", textTransform: "uppercase" }}>
            HR · People Management · Lagos
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.86 }}>
            <div style={{ fontSize: 132, letterSpacing: -5 }}>{person.firstName}</div>
            <div style={{ fontSize: 132, letterSpacing: -5, fontStyle: "italic", color: "#86bb9b" }}>
              {person.lastName}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 34, fontStyle: "italic", color: "#b9cbbe" }}>
            {person.positioning}
          </div>
        </div>
        <div style={{ display: "flex", width: 420, height: 630, position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={420} height={630} alt="" style={{ objectFit: "cover" }} />
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Fraunces", data: regular, style: "normal", weight: 400 },
        { name: "Fraunces", data: italic, style: "italic", weight: 400 },
      ],
    }
  );
}

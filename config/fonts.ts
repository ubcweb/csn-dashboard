import { Fira_Code as FontMono } from "next/font/google";
import localFont from "next/font/local";

// Local font Rink with all weights (no italics)
export const fontRink = localFont({
  src: [
    {
      path: "../public/fonts/Rink/WOFF2/Rink-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Rink/WOFF2/Rink-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Rink/WOFF2/Rink-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Rink/WOFF2/Rink-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Rink/WOFF2/Rink-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Rink/WOFF2/Rink-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Rink/WOFF2/Rink-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Rink/WOFF2/Rink-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Rink/WOFF2/Rink-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-Rink",
  display: "swap",
});

export const fontHelvena = localFont({
  src: [
    {
      path: "../public/fonts/Helvena/WOFF2/Helvena-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvena/WOFF2/Helvena-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvena/WOFF2/Helvena-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvena/WOFF2/Helvena-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvena/WOFF2/Helvena-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvena/WOFF2/Helvena-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvena/WOFF2/Helvena-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Helvena/WOFF2/Helvena-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-helvena",
  display: "swap",
});

// Keep the mono font
export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
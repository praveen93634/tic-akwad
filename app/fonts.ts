import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "../public/fonts/fonnts.com-Suisse_Intl_Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/fonnts.com-Suisse_Intl_Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-suisse",
});

//Next imports
import { Poppins } from "next/font/google";

//css Imports
import "./globals.css";
import NavBar from "./components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Memory Lane",
  description: "A simple blog webpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

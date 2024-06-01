import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./Components/SideNav";
import Main from "./Components/Main";
import AppProvider from "./Context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
        <SideNav/>
        {children}
        </AppProvider>
        </body>
    </html>
  );
}

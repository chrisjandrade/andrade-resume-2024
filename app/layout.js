import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import { store } from './store';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "www.chrisandrade.me",
  description: "Chris Andrade Resume - 2024 made with React + NextJs + Redux Toolkit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

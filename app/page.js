import Sidebar from "./sidebar/Sidebar";

export default function Home() {
  return (
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;1,300&amp;display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&amp;family=Roboto+Condensed:ital,wght@0,400;1,300&amp;display=swap" rel="stylesheet" />
      <Sidebar />
    </main>
  );
}

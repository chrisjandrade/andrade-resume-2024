import Content from "components/content/Content";
import Sidebar from "components/sidebar/Sidebar";
import { Providers } from "./Providers";
import { Loading } from "./components/loading/Loading";

export default function Home() {
  return (
    <Providers>
      <main>
        <Loading />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;1,300&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&amp;family=Roboto+Condensed:ital,wght@0,400;1,300&amp;display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <Sidebar />
        <Content />
      </main>
    </Providers>
  );
}

//  Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "styles/globals.css";
//  Next.js modules
import { AppProps } from "next/app";
//  Custom modules
import BackDrop from "components/BackDrop";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BackDrop>
      <Component {...pageProps} />
    </BackDrop>
  );
}

export default MyApp;

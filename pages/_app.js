import { CookiesProvider } from "react-cookie";
import "../styles/globals.css"

 
 
function MyApp({ Component, pageProps }) {
  //sessionStorage.setItem("start", "started");
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}

export default MyApp;

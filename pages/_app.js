import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  //sessionStorage.setItem("start", "started");
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

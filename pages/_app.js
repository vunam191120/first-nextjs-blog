import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <h2>This is footer</h2> */}
    </>
  );
}

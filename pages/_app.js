import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;


function GlobalStyle() {
  return (
    <style global jsx> {`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }

      .waves {
        position: absolute;
        border-radius: 50%;
        filter: blur(1px);
        box-shadow: var(--wave-shadow);
      }
      @keyframes shockwaves {
        0% {
          transform: scale(0.8);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: scale(4);
          opacity: 0;
        }
      }
      :root {
        --wave-shadow: inset 10px 10px 14px #9D5C63, inset -10px -10px 14px #00FDDC,
          6px 6px 8px #EA638C, -6px -6px 8px #7B2D26;
      }
      /* ./App fit Height */ 
    `} </style>
  );
}

function app({ Component, pageProps }) {
  return (
      <>
          <GlobalStyle />
          <Component {...pageProps} />
      </>
  );
}

export default app;
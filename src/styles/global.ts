import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", 'Nunito Sans', "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 16px;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
    height: 100%;
  }

  :root {
    --primary-ghost: #F5F8F9;
    --primary-main-blip: #2CC3D5;
    --secondary-true: #4DCB7B;
    --neutral-onix: #1A2437;
    --neutral-city: #56616E;        
    --neutral-wave: #D2DFE6;  
    --neutral-desk: #607B99;
    --neutral-rooftop: #738192;
    --extended-smurf: #55CFFF;
    --extended-petroleum: #2A6880;
    --extended-carrot: #FA7E25;
    --extended-watermelon: #F66689;
    --extended-melon: #F1E733;
    --extended-grape: #B766F6;
    --extended-sea: #517BF2;

  }

  .my-40 { margin: 40px 0; }
  .mb-16 { margin-bottom: 16px; }
`;

export default GlobalStyles;

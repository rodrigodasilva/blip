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

  a {
    text-decoration: none;
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
    --neutral-cloud: #8CA0B3;
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
  .mb-8 { margin-bottom: 8px; }
  .mr-8 { margin-right: 8px; }
  .mx-auto { margin: 0 auto; }

  .block {display: block; }
  .flex	{ display: flex; }

  .flex-row	{ flex-direction: row; }
  .flex-col	{ flex-direction: column; }

  .flex-wrap { flex-wrap: wrap; }

  .content-center	{ align-content: center; }
  .content-start	{ align-content: flex-start; }
  .content-end	{ align-content: flex-end; }

  .justify-start	{ justify-content: flex-start; }
  .justify-end	{ justify-content: flex-end; }  
  .justify-center	{ justify-content: center; }
  .justify-between	{ justify-content: space-between; }

  .items-start	{ align-items: flex-start; }
  .items-end	{ align-items: flex-end; }

  .items-center	{ align-items: center; }  
  .self-center	{ align-self: center; }

  .w-full	{ width: 100%; }
`;

export default GlobalStyles;

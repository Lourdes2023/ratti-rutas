import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 
 :root {
  --color-back-body: #D4D0D0;
  --color-back-seccion:#78695A;
  --color-back-seccionlight:#f3f4f6;
  --color-shadow: rgba(102, 108, 113, 0.498) 0px 0px 5rem inset,
      rgba(102, 108, 113, 0.498) 0px 0px 2rem inset;
  --color-title-Grad1: linear-gradient(to right,#e6d3ba, #b9a889,#8e5741, #b8574f  );
  --color-secondary: #620F1E;
  --color-button-cart:#494D52;
  --color-muted-text: #666666;
  --color-darkgray-contact:#626870 ;
  --color-buttonEm-bg: linear-gradient(to right, #6b8c68,#73b266);
  --color-buttonEm-bg-hover: linear-gradient(to bottom, #73b266, #6b8c68);
  --color--back--category: linear-gradient(45deg,#626870, #494D52);
  --color-text-hero: #ffffff;
  --color-text-dark: #505854;
  --color-button-text: #ffffff;
  --color-button-hover: #c1bdb9;
  --color-button-hoverCart:#b8574f;
  --color-border:#f1efd4 ;
  --color-contact-hover: #5CE1E6;
  --color-text-contact:  #f1efd4;
  --color-backg-contact: #5c413f;
}

/* Estilos generales */
body {
  font-family: "Fira Sans", sans-serif;
  margin: 0;
  padding: 0;
  background: var(--color-back-body);
  overflow-x: hidden;
  
}
html {
  scroll-behavior: smooth;
}

a {
    text-decoration: none;
    color:white ;
}
a:visited {
    color: white;
}
li {
    list-style: none;
 }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
 --color-back-body: #f8f5f1;
 --color-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
 --color-back-Header: #f8f5f1;
--color-Logo-text: #5a1a1a;
--color-title-Grad1: linear-gradient(25deg, #999999,#666666);
--primary-color: #800000;
--secondary-color: #999999;
--background-color: #ffffff;
--box-shadow-color: 0 4px 8px rgba(0, 0, 0, 0.1);
--box-shadow-hover-color: 0 8px 16px rgba(0, 0, 0, 0.2);
--color-primary-bordo: #66112B;
--color-secondary-p: #ffffff;
--color-secondary-red: #5a1a1a;
--color-button-cart: #800000;
--color-muted-text: #666666;
--color-Categories: #5a1a1a;
--color-darkgray-contact: #666666;
--color--title-seccion: #999999;
--color-buttonLogin-bg: linear-gradient(to right, #800000, #5a1a1a);
--color-buttonEm-bg: linear-gradient(to right, #f8f9fa, #999999);
--color-buttonLogin-bg-hover: linear-gradient(to right, #5a1a1a, #800000);
--color-buttonEm-bg-hover: linear-gradient(to bottom, #f8f9fa, #666666);
--color--back-products: linear-gradient(to right, #999999, #666666);
--color-backg-contact: #666666;
--color--back-category: linear-gradient(to right, #999999, #f8f9fa);
--color-back-About: linear-gradient(24deg, #f8f9fa, #cccccc);
--color-back-Services: linear-gradient(45deg, #999999, #f8f9fa);
--color-text-hero: #800000;
--color-text-dark: #505854;
--color-button-text: #ffffff;
--color-button-hover: #f8f9fa;
--color-button-hoverCart: #5a1a1a;
--color-border-blue: #cccccc;
--color-border-button: #5a1a1a;
--color-text-contact: #f1efd4;
--color-contact-hover: #5CE1E6;
--accent : #800000;
}
/* Estilos generales */
body {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
  background: var(--color-back-body);
  overflow-x: hidden;

}
html {
  scroll-behavior: smooth;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", serif;
}

a {
    text-decoration: none;
    color: #8d8d8d;
}
a:visited {
    color: #8d8d8d;
}
li {
    list-style: none;
 }

`;

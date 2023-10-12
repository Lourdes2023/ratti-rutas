import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --color-back-body: #f5f7fa;
  --color-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  --color-back-Header: #2a333c;
  --color-Logo-text: #620F1E;
  --color-title-Grad1: linear-gradient(25deg, #a0aec0, #4a5568);
  --primary-color: #4a5568;
    --secondary-color: #718096;
    --background-color: #ffffff;
    --box-shadow-color:0 4px 8px rgba(0, 0, 0, 0.1);
    --box-shadow-hover-color: 0 8px 16px rgba(0, 0, 0, 0.2);
  --color-primary-blue: #0077b6;
  --color-secondary-blue: #219ebc;
  --color-secondary-red: #b80c09;
  --color-secondary-green: #4caf50;
  --color-button-cart: #4a5568;
  --color-muted-text: #666666;
  --color-Categories: #3a0a07;
  --color-darkgray-contact: #626870;
  --color--title-seccion: #718096;
  --color-buttonLogin-bg: linear-gradient(to right, #0077b6, #219ebc);
  --color-buttonEm-bg: linear-gradient(to right, #f5f7fa, #a0aec0);
  --color-buttonLogin-bg-hover: linear-gradient(to right, #219ebc, #0077b6);
  --color-buttonEm-bg-hover: linear-gradient(to bottom, #f5f7fa, #4a5568);
  --color--back-products: linear-gradient(to right, #a0aec0, #4a5568);
  --color-backg-contact: #4a5568;
  --color--back-category: linear-gradient(to right, #a0aec0, #ececec);
  --color-back-About: linear-gradient(24deg, #f5f7fa, #e4e7eb);
  --color-back-Services: linear-gradient(45deg, #a0aec0, #f5f7fa);
  --color-text-hero: #4A5568;
  --color-text-dark: #505854;
  --color-button-text: #ffffff;
  --color-button-hover: #f5f7fa;
  --color-button-hoverCart: #b8574f;
  --color-border-blue: #e4e7eb;
  --color-border-button: #933333;
  --color-text-contact: #f1efd4;
  --color-contact-hover: #5CE1E6;
  --accent : #F2CC8F;
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

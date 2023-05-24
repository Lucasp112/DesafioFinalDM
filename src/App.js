import { createGlobalStyle } from "styled-components";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import NavBar from "./components/nav/NavBar";
import Carouselcomponent from "./components/carousel/Carousel";
import Filmes from "./components/filmes/filmes";

const GlobalStyle = createGlobalStyle`
*{margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
font-family: 'Open Sans', sans-serif;

body{
  background-color: black;
      
}
}
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <NavBar />
      <Carouselcomponent />
      <Filmes />
    </>
  );
}

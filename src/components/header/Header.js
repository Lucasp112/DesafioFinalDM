import styled, { keyframes } from "styled-components";
import Logo from "../assets/Grupo 569.svg";
import { useState } from "react";

const Container = styled.header`
  width: 100%;
  height: 10vh;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: rgba(108, 122, 137 /1);
  backdrop-filter: blur(35px);
`;

const DivHeader = styled.div`
  width: 20%;
  height: 6vh;
  display: flex;
  position: relative;
  left: 70px;
  align-items: center;
  justify-content: space-around;

  button {
    background-color: gray;
    border-radius: 35px;
    width: 48%;
    height: 100%;
    color: white;
    text-align: center;
    font-size: 17px;
    font-weight: 500;
  }
`;

const NavHeader = styled.nav`
  width: 20%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ul {
    color: white;
    width: 50%;
    display: flex;
    justify-content: space-around;
  }

  input {
    display: ${(props) => props.modo};
    animation: caixa 3s ease-in-out 1 normal both;

    @keyframes caixa {
      0% {
        width: 0%;
      }

      50% {
        width: 15%;
      }

      100% {
        width: 30%;
      }
    }
  }


button{
  width: 45px;
  height: 25px;
  background-color: white;
  color: black;
  border:  solid white 1px;

  :hover{
    cursor: pointer;
    background-color: black;
    color: white;
}
`;

export default function Header() {
  const [mode, setMode] = useState(false);

  return (
    <Container>
      <img src={Logo} alt="" />
      <DivHeader>
        <button>Series</button>
        <button>Filmes</button>
      </DivHeader>
      <NavHeader>
        <input modo={mode === false ? "none" : "initial"} />
        <button
          onClick={() => {
            setMode(!mode);
          }}
        >
          Enter
        </button>
        <ul>
          <li>Filtro</li>
          <li>Login</li>
        </ul>
      </NavHeader>
    </Container>
  );
}

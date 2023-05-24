import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

const NavContainer = styled.nav`
  width: 100%;
  height: 10vh;
  padding: 50px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const UlBox = styled.ul`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    font-size: 1.1rem;
    font-weight: 500;
    :hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: 1.3s;
    }
  }
`;

const InputStyle = styled.div`
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
  button {
    width: 45px;
    height: 25px;
    background-color: black;
    color: #ffffff;
    border: solid white 1px;

    :hover {
      cursor: pointer;
      background-color: white;
      color: black;
    }
  }
`;

export default function NavBar() {
  const [mode, setMode] = useState(false);

  return (
    <NavContainer>
      <UlBox>
        <li>Popular</li>
        <li>Drama</li>
        <li>Ação</li>
        <li>Aventura</li>
        <li>Comédia</li>
        <li>Crime</li>
        <li>Fantasia</li>
        <li>Família</li>
      </UlBox>
      <InputStyle>
        <input modo={mode === false ? "none" : "initial"} />
        <button
          onClick={() => {
            setMode(!mode);
          }}
        >
          Enter
        </button>
      </InputStyle>
    </NavContainer>
  );
}

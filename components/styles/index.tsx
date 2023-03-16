import styled from "styled-components";

export const Flex = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  display: flex;
  align-content: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const Input = styled.input`
  border-radius: 10px;
  color: #000000;
  margin-top: 2%;
  display: flex;
  height: 5vh;
  min-width: 30rem;
  font-family: "Poppins";
`;

export const Button = styled.button`
  background: #edd8d8;
  border: none;
  margin-left: 10px;
  align-items: center;
  border-radius: 10px;
  color: #000000;
  cursor: pointer;
  margin-top: 2%;
  display: flex;
  font-family: "Poppins";
  min-height: 37px;
`;

export const Typography = styled.h1`
  color: #000000;
  font-size: xx-large;
  font-family: "Poppins";
`;

export const OneContent = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  align-items: center;
  display: flex;
  transform: translateY(-175px);
  align-content: center;
  z-index: 12;
`;

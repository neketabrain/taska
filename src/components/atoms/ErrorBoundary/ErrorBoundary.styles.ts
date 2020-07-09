import styled from "styled-components";

import { Box } from "../Box";
import { Icons } from "../Icons";

export const Container = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 50%;
  padding: 16px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const Picture = styled.picture`
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: center;
  width: 200px;
`;

export const SadCatIcon = styled(Icons.SadCat)`
  height: 200px;
  width: 200px;
`;

export const Text = styled.h1`
  font-family: "Open Sans", sans-serif;
  text-align: center;
`;

export const Button = styled.a`
  align-items: center;
  background-color: #34c759;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  height: 50px;
  justify-content: center;
  outline: 0;
  padding: 0;
  position: relative;
  text-decoration: none;
  width: 180px;

  :hover {
    background-color: #2abd4f;
  }

  :active {
    background-color: #3ed163;
  }

  :focus {
    box-shadow: 0 0 0 3px rgba(52, 199, 89, 0.3);
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    width: 100%;
  }
`;

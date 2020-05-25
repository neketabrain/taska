import styled from "styled-components";

const TextField = styled.input`
  position: relative;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }): string => theme.colors.inputBg};
  box-sizing: border-box;
  border: 1px solid ${({ theme }): string => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }): string => theme.colors.text};
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  padding: 0 16px;
  outline: 0;

  :focus {
    border-color: ${({ theme }): string => theme.colors.primary};
    background-color: ${({ theme }): string => theme.colors.bg};
  }

  :disabled {
    cursor: not-allowed;
    color: ${({ theme }): string => theme.colors.textDisabled};
  }

  :hover :not(:focus) :not(:disabled) {
    border-color: ${({ theme }): string => theme.colors.borderHover};
  }
`;

export default TextField;

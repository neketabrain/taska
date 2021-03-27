import styled from 'styled-components';

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  margin: 0;
`;

export default Text;

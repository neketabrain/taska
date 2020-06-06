import styled from "styled-components";

import { H1, Card, TextField, Loader } from "src/components";

export const Wrapper = styled.main`
  position: relative;
  width: 100%;
  display: flex;
`;

export const Title = styled(H1)`
  margin-bottom: 32px;
`;

export const PrimarySection = styled.section`
  position: relative;
  max-width: 460px;
  width: 100%;
`;

export const SecondarySection = styled(PrimarySection)`
  max-width: 350px;
`;

export const ListContainer = styled(Card)`
  padding: 24px 0;
  height: calc(100% - 88px - 16px);
  display: flex;
  margin-top: 16px;
`;

export const ListLoader = styled(Loader)`
  margin: auto;
`;

export const FilterContainer = styled(Card)`
  padding: 0;
`;

export const FilterInput = styled(TextField)`
  border: none;
  padding: 15px 24px;
  font-weight: 600;
  max-height: 50px;
`;

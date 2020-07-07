import styled from "styled-components";

import { Card, DatePicker, H1, Loader, TextField } from "src/components";

export const Wrapper = styled.main`
  display: flex;
  position: relative;
  width: 100%;
`;

export const Title = styled(H1)`
  margin-bottom: 32px;
`;

export const PrimarySection = styled.section`
  max-width: 460px;
  position: relative;
  width: 100%;
`;

export const SecondarySection = styled(PrimarySection)`
  margin-right: 16px;
  max-width: 350px;
`;

export const ListContainer = styled(Card)`
  display: flex;
  height: calc(100% - 88px - 16px);
  margin-top: 16px;
  padding: 24px 0;
`;

export const ListLoader = styled(Loader)`
  margin: auto;
`;

export const FilterContainer = styled(Card)`
  padding: 0;
`;

export const FilterInput = styled(TextField)`
  border: none;
  font-weight: 600;
  max-height: 50px;
  padding: 15px 24px;
  border-radius: 14px;
`;

export const DateInput = styled(DatePicker)`
  border-radius: 14px;

  .react-datepicker__close-icon {
    height: 48px;
    right: 24px;
  }
`;

import React, { useCallback, FC } from "react";
import { useTranslation } from "react-i18next";

import { InputOnChangeEvent } from "src/types";

import {
  CheckButtonContainer,
  CheckCircleFilledIcon,
  CheckCircleIcon,
  Label,
  NativeCheckbox,
} from "./CheckButton.styles";
import { CheckButtonProps } from "./CheckButton.types";

const CheckButton: FC<CheckButtonProps> = (props) => {
  const { className, onChange, ...rest } = props;

  const { t } = useTranslation("accessibility");

  const handleChange = useCallback(
    (event: InputOnChangeEvent) => {
      event.persist();
      event.stopPropagation();
      onChange(event.target.checked);
    },
    [onChange]
  );

  const handleClick = useCallback((event) => {
    event.stopPropagation();
  }, []);

  return (
    <CheckButtonContainer className={className}>
      <Label>
        <NativeCheckbox
          aria-label={t("checkButton")}
          name="check"
          onChange={handleChange}
          onClick={handleClick}
          type="checkbox"
          {...rest}
        />

        <CheckCircleFilledIcon onClick={handleClick} />
        <CheckCircleIcon onClick={handleClick} />
      </Label>
    </CheckButtonContainer>
  );
};

export default CheckButton;

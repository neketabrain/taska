import React, { Component, ReactNode } from "react";
import { Translation } from "react-i18next";

import {
  Button,
  Container,
  Picture,
  SadCatIcon,
  Text,
} from "./ErrorBoundary.styles";
import { ErrorBoundaryState } from "./ErrorBoundary.types";

class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = { error: "", hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error: error.toString(), hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Container>
          <Picture>
            <SadCatIcon />
          </Picture>

          <Translation ns="common">
            {(t): JSX.Element => <Text>{t("errorBoundary.text")}</Text>}
          </Translation>

          <Translation ns="common">
            {(t): JSX.Element => (
              <Button href="/">{t("errorBoundary.button")}</Button>
            )}
          </Translation>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

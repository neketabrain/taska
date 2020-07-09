import anchorme from "anchorme";
import React, { useCallback, useMemo, FC } from "react";

import { Link } from "./LinkDetector.styles";

const LinkDetector: FC = (props) => {
  const { children } = props;
  const text = children as string;

  const parse = useCallback(() => {
    const matches = anchorme.list(text);
    if (matches.length < 1) return text;

    const elements = [];
    let lastIndex = 0;

    matches.forEach((match, index) => {
      if (match.start > lastIndex) {
        elements.push(text.substring(lastIndex, match.start));
      }

      elements.push(
        <Link
          href={match.string}
          key={index}
          rel="noopener noreferrer"
          target="_blank"
        >
          {match.string}
        </Link>
      );

      lastIndex = match.end;
    });

    if (text.length > lastIndex) {
      elements.push(text.substring(lastIndex));
    }

    return elements.length > 1 ? elements : elements[0];
  }, [text]);

  const parsedText = useMemo(() => parse(), [parse]);

  return <>{parsedText}</>;
};

export default LinkDetector;

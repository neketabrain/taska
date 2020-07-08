import {
  InputOnChangeEvent,
  InputValue,
  OnChangeEvent,
  TextAreaOnChangeEvent,
} from "src/types";

const isTextAreaEvent = (
  event: InputOnChangeEvent | TextAreaOnChangeEvent
): event is TextAreaOnChangeEvent =>
  !("checked" in event.target || "files" in event.target);

export const reduceByType = (
  event: OnChangeEvent
): Record<string, InputValue> => {
  const { name, type, value } = event.target;

  if (isTextAreaEvent(event)) {
    return { [name]: value };
  }

  const { checked, files } = event.target;
  switch (type) {
    case "checkbox": {
      return { [name]: checked || false };
    }

    case "file": {
      return { [name]: files || null };
    }

    default: {
      return { [name]: value || "" };
    }
  }
};

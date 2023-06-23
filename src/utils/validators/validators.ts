export const required = (value: string) =>
  value ? undefined : "field is required";

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  return value && value.length > maxLength
    ? `max length is ${maxLength} symbols`
    : undefined;
};

export const minLengthCreator = (minLength: number) => (value: string) => {
  return value && value.length < minLength
    ? `min length is ${minLength} symbols`
    : undefined;
};

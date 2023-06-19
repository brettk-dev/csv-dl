type Column<T extends Record<string, unknown>> = {
  key: keyof T;
  title: string;
  value?: <T>(value: T) => unknown;
};

export default Column;

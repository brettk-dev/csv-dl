import Column from "./Column";

type Config<T extends Record<string, unknown>> = {
  data: T[];
  columns: Column<T>[];
  fileName: string;
  separator: string;
};

export default Config;

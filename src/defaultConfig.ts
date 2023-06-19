import Config from "./types/Config";

const defaultConfig: Config<Record<string, unknown>> = {
  data: [],
  columns: [],
  fileName: "data.csv",
  separator: ",",
};

export default defaultConfig;

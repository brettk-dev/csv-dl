import defaultConfig from "./defaultConfig";
import fixFileName from "./funcs/fixFileName";
import recordToCsv from "./funcs/recordToCsv";
import Config from "./types/Config";

const downloadCsv = <T extends Record<string, unknown>>(
  userConfig: Partial<Config<T>>
): void => {
  const config: Config<T> = Object.assign({}, defaultConfig, userConfig);
  config.fileName = fixFileName(config.fileName);

  const csvText = recordToCsv(config);
  const csvBlob = new Blob([csvText], { type: "text/csv", endings: "native" });
  const csvUrl = URL.createObjectURL(csvBlob);

  const linkEl = document.createElement("a");
  linkEl.download = config.fileName;
  linkEl.href = csvUrl;
  linkEl.target = "_blank";
  linkEl.click();
};

export default downloadCsv;

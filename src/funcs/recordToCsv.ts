import Config from "../types/Config";

export const fixCsvValue = <T>(value: T) =>
  value == null ? '""' : '"' + `${value}`.replaceAll('"', '""') + '"';

const recordToCsv = <T extends Record<string, unknown>>(
  config: Config<T>
): string => {
  const headerCsv = config.columns
    .map((col) => fixCsvValue(col.title))
    .join(config.separator);

  const bodyCsv = config.data
    .map((item) =>
      config.columns
        .map((col) => {
          const rawValue = item[col.key];
          return fixCsvValue(
            col.value == null
              ? item[col.key]
              : col.value<typeof rawValue>(rawValue)
          );
        })
        .join(config.separator)
    )
    .join("\n");

  const csvOut = `${headerCsv}\n${bodyCsv}`;

  return csvOut;
};

export default recordToCsv;

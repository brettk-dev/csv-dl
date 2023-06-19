const fixFileName = (fileName: string): string => {
  if (fileName.endsWith(".csv")) return fileName;
  return `${fileName}.csv`;
};

export default fixFileName;

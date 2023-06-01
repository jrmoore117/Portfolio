import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

const usePlaceholder = async (file: string) => {
  const src = file.replace("./public", "");
  const buffer = await fs.readFile(file);

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export default usePlaceholder;

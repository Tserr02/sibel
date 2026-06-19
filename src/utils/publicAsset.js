export const publicAsset = (path) => {
  if (!path || /^(https?:|data:|\/)/.test(path)) {
    return path;
  }

  const cleanPath = path.replace(/^\.\//, "");
  return `${process.env.PUBLIC_URL || ""}/${cleanPath}`;
};

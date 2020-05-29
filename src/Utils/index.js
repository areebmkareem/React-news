export const truncateString = (str, num, shouldTruncate) => {
  if (!shouldTruncate || str.length <= num) return str;
  return str.slice(0, num) + '...';
};

export function generateId(prefix) {
  // eslint-disable-next-line no-bitwise
  return `${prefix}-${(~~(Math.random() * 1e8)).toString(16)}`;
}

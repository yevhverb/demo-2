export function toUpperCaseFirstChar(string) {
  return isNaN(string) ? string[0].toUpperCase() + string.slice(1) : string;
}

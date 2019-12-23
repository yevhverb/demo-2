export function calcAgeMonth(ms) {
  return Math.ceil((new Date().getTime() - new Date(ms).getTime()) / 2592000000);
}

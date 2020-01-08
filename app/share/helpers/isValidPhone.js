export function isValidPhone(phone) {
  return phone.match(/^(\+380|0)[0-9]{9}/g);
}

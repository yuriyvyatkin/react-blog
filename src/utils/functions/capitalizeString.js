export default function capitalizeString(string) {
  if (string.length === 0) {
    return string;
  }

  const firstChar = string.charAt(0);
  const capitalizedChar = firstChar.toUpperCase();

  return capitalizedChar + string.slice(1);
}

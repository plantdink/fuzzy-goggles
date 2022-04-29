export function displayPercentage(number = 0) {
  const displayNumber = number / 10;
  return displayNumber;
}

export function hsDisplay(number = 0) {
  const displayNumber = number / 100;
  return displayNumber;
}

export function millisecondsToSeconds(number = 0) {
  const displayNumber = ((number % 60000) / 1000).toFixed(2);
  return displayNumber;
}

export function humanReadableNumber(num = 0, lang = null) {
  if (!num) return;
  const locale = lang || 'en'; // removed || document.documentElement.lang
  const number = parseFloat(num, 10);
  return number.toLocaleString(locale);
}

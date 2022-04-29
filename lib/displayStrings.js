export function lowerCaseFirstLetter(string) {
  const lowerCaseString = string.toLowerCase();
  const titleString = lowerCaseString.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase()
  );
  const noWhiteSpaceString = titleString.replaceAll(/\s/g, '');
  const finalLink =
    noWhiteSpaceString.charAt(0).toLowerCase() + noWhiteSpaceString.slice(1);
  return finalLink;
}

export function titleCase(string) {
  return string
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export function stringToParagraphs(string) {
  const sentences = string.split(/(?<=\.)/g);
  return sentences.map((sentence, index) => <p key={index}>{sentence}</p>);
}

export function lowerCaseLink(string) {
  const stringToEdit = string[0].toLowerCase() + string.slice(1) || string;
  return stringToEdit;
}

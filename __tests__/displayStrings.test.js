import { render } from '@testing-library/react';
import {
  lowerCaseFirstLetter,
  stringToParagraphs,
  titleCase,
} from '../lib/displayStrings';

// this is used to change strings from the database into links for use inside dynamic link generators
describe('lowerCaseFirstLetter function', () => {
  it('takes a string with spaces, concatenates it and returns it with the first letter changed to a lower case', () => {
    expect(lowerCaseFirstLetter('This Will Be Changed')).toEqual(
      'thisWillBeChanged'
    );
  });
  it('takes a string without spaces, concatenates it and returns it with the first letter changed to a lower case', () => {
    expect(lowerCaseFirstLetter('Itemtitlewithoutspaces')).toEqual(
      'itemtitlewithoutspaces'
    );
  });
  it('takes a string, concatenates it and returns it with the first letter changed to a lower case', () => {
    expect(lowerCaseFirstLetter('ItemTitleWithoutSpaces')).toEqual(
      'itemtitlewithoutspaces'
    );
  });
});

// this will turn a string into a Title Case String for display to the user
describe('titleCase function', () => {
  it('title cases a string by capitalising the first letter of each word', () => {
    expect(titleCase('This will be title cased')).toEqual(
      'This Will Be Title Cased'
    );
  });
  it('title cases a string by capitalising the first letter of each word', () => {
    expect(titleCase('this will be title cased')).toEqual(
      'This Will Be Title Cased'
    );
  });
  it('title cases a string by capitalising the first letter of each word', () => {
    expect(titleCase('thIS wilL be tiTle cAsed')).toEqual(
      'This Will Be Title Cased'
    );
  });
});

// descriptions in the database are stored as a single, long string. stringToParagraphs will split them into individual paragraphs on a whitespace after a full stop.
// describe('stringToParagraphs function', () => {
//   it('splits a single long string into individual paragraphs', () => {
//     expect();
//   });
// });

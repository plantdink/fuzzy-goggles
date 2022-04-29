// items in the database are stored with community accepted abbreviations that need to be converted to human understandable phrases before being displayed to the user
import { deAbbreviate } from '../lib/abbreviationsDictionary';

describe('deAbbreviates OOC correctly', () => {
  it('changes OOC to Damage to Targets out of Cover', () => {
    expect(deAbbreviate('OOC')).toEqual('Damage to Targets out of Cover');
  });
  it('changes DTH to Damage to Health correctly', () => {
    expect(deAbbreviate('DTH')).toEqual('Damage to Health');
  });
  it('changes DTA to Damage to Armour correctly', () => {
    expect(deAbbreviate('DTA')).toEqual('Damage to Armour');
  });
  it('changes CHC to Critical Hit Chance correctly', () => {
    expect(deAbbreviate('CHC')).toEqual('Critical Hit Chance');
  });
  it('changes CHD to Critical Hit Damage', () => {
    expect(deAbbreviate('CHD')).toEqual('Critical Hit Damage');
  });
  it('changes HSD to Head Shot Damage correctly', () => {
    expect(deAbbreviate('HSD')).toEqual('Head Shot Damage');
  });
});

// values returned form the database SHOULD be uppercase
describe('deAbbreviates ooc correctly', () => {
  it('returns an empty string when it receives a lower case abbreviation', () => {
    expect(deAbbreviate('ooc')).toEqual('');
  });
});

// should return an error when it receives an empty abbreviation
describe('deAbbreviate an empty string', () => {
  it('receives an empty string', () => {
    expect(deAbbreviate('')).toEqual('');
  });
});

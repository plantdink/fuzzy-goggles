export function deAbbreviate(abbreviation) {
  let fullTerm = '';
  if (abbreviation === 'OOC') fullTerm = 'Damage to Targets out of Cover';
  if (abbreviation === 'DTH') fullTerm = 'Damage to Health';
  if (abbreviation === 'DTA') fullTerm = 'Damage to Armour';
  if (abbreviation === 'CHC') fullTerm = 'Critical Hit Chance';
  if (abbreviation === 'CHD') fullTerm = 'Critical Hit Damage';
  if (abbreviation === 'HSD') fullTerm = 'Head Shot Damage';
  return fullTerm;
}

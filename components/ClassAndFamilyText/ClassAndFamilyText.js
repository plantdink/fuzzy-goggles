import { titleCase } from '../../lib/displayStrings';

export default function ClassAndFamilyText({ weapon }) {
  return (
    <p>
      {titleCase(weapon.class)} {weapon.family}
    </p>
  );
}

import Link from 'next/link';
import { ListStyles, ListItem, ListTitle } from '../styles/ListStyles';
import { exoticArmourIcon, exoticWeaponIcon } from '../ItemIcons';

export default function Exotics() {
  return (
    <>
      <ListStyles>
        <ListItem>
          <img src={exoticArmourIcon} alt="Exotic Armour Icon" />
          <ListTitle>
            <Link href="/exotics/exoticArmourPieces">Exotic Armour</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={exoticWeaponIcon} alt="Exotic Weapon icon" />
          <ListTitle>
            <Link href="/exotics/exoticWeapons">Exotic Weapons</Link>
          </ListTitle>
        </ListItem>
      </ListStyles>
    </>
  );
}

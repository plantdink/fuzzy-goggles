import Link from 'next/link';
import { ListStyles, ListItem, ListTitle } from '../styles/ListStyles';
import { armourTalentImage, weaponTalentImage } from '../ItemIcons';

export default function Talents() {
  return (
    <>
      <ListStyles>
        <ListItem>
          <img src={armourTalentImage} alt="Generic armour piece" />
          <ListTitle>
            <Link href="/talents/armourTalents">Armour Talents</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={weaponTalentImage} alt="Generic weapon" />
          <ListTitle>
            <Link href="/talents/weaponTalents">Weapon Talents</Link>
          </ListTitle>
        </ListItem>
      </ListStyles>
    </>
  );
}

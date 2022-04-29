import Link from 'next/link';
import { ListStyles, ListItem, ListTitle } from '../styles/ListStyles';
import {
  arIcon,
  lmgIcon,
  mmrIcon,
  rifleIcon,
  pistolIcon,
  shotgunIcon,
  smgIcon,
  namedIcon,
  exoticIcon,
} from '../ItemIcons';

export default function Weapons() {
  return (
    <>
      <ListStyles>
        <ListItem>
          <img src={arIcon} alt="Assault Rifle" />
          <ListTitle>
            <Link href="/weapons/assaultRifles">Assault Rifles</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={lmgIcon} alt="Light Machine Gun" />
          <ListTitle>
            <Link href="/weapons/lightMachineGuns">Light Machine Guns</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={mmrIcon} alt="Marksman Rifle" />
          <ListTitle>
            <Link href="/weapons/marksmanRifles">Marksman Rifles</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={rifleIcon} alt="Rifle" />
          <ListTitle>
            <Link href="/weapons/rifles">Rifles</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={pistolIcon} alt="Pistol" />
          <ListTitle>
            <Link href="/weapons/pistols">Pistols</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={shotgunIcon} alt="Shotgun" />
          <ListTitle>
            <Link href="/weapons/shotguns">Shotguns</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={smgIcon} alt="Submachine Gun" />
          <ListTitle>
            <Link href="/weapons/subMachineGuns">Submachine Guns</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={namedIcon} alt="Named Weapon" />
          <ListTitle>
            <Link href="/weapons/namedWeapons">Named Weapons</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={exoticIcon} alt="Exotic Weapon" />
          <ListTitle>
            <Link href="/weapons/exoticWeapons">Exotic Weapons</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={exoticIcon} alt="Average Weapon" />
          <ListTitle>
            <Link href="/weapons/averageWeapons">Average Weapons</Link>
          </ListTitle>
        </ListItem>
      </ListStyles>
    </>
  );
}

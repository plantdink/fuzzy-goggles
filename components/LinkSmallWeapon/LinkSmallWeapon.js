import Link from 'next/link';
import { LinkStyles, TitleLink } from '../LinkSmallBrand';
import { lowerCaseFirstLetter } from '../../lib/displayStrings';
import {
  arIcon,
  lmgIcon,
  mmrIcon,
  pistolIcon,
  rifleIcon,
  shotgunIcon,
  smgIcon,
} from '../ItemIcons';

export default function LinkSmallWeapon({ talent }) {
  const classArray = [];

  // set classArray for any weapon talent, link contents for all of the associated weapon classes
  if (
    talent.classARTalent === true &&
    talent.isNamed === 'NO' &&
    talent.isExotic === 'NO'
  ) {
    classArray.push({
      title: 'Assault Rifles',
      link: '/weapons/assaultRifles/',
      image: arIcon,
      id: '6201d72ed9301f0836548606',
    });
  }

  if (
    talent.classLMGTalent === true &&
    talent.isNamed === 'NO' &&
    talent.isExotic === 'NO'
  ) {
    classArray.push({
      title: 'Light Machine Guns',
      link: '/weapons/lightMachineGuns/',
      image: lmgIcon,
      id: '6201d741d9301f08365486bf',
    });
  }

  if (
    talent.classMMRTalent === true &&
    talent.isNamed === 'NO' &&
    talent.isExotic === 'NO'
  ) {
    classArray.push({
      title: 'Marksman Rifles',
      link: '/weapons/marksmanRifles/',
      image: mmrIcon,
      id: '6201d759d9301f0836548778',
    });
  }

  if (
    talent.classPistolTalent === true &&
    talent.isNamed === 'NO' &&
    talent.isExotic === 'NO'
  ) {
    classArray.push({
      title: 'Pistols',
      link: '/weapons/pistols/',
      image: pistolIcon,
      id: '6201d76ad9301f0836548831',
    });
  }

  if (
    talent.classRifleTalent === true &&
    talent.isNamed === 'NO' &&
    talent.isExotic === 'NO'
  ) {
    classArray.push({
      title: 'Rifles',
      link: '/weapons/rifles/',
      image: rifleIcon,
      id: '6201d77cd9301f08365488ea',
    });
  }

  if (
    talent.classShotgunTalent === true &&
    talent.isNamed === 'NO' &&
    talent.isExotic === 'NO'
  ) {
    classArray.push({
      title: 'Shotguns',
      link: '/weapons/shotguns/',
      image: shotgunIcon,
      id: '6201d78ed9301f08365489a3',
    });
  }

  if (
    talent.classSMGTalent === true &&
    talent.isNamed === 'NO' &&
    talent.isExotic === 'NO'
  ) {
    classArray.push({
      title: 'Sub Machine Guns',
      link: '/weapons/subMachineGuns/',
      image: smgIcon,
      id: '6201d79fd9301f0836548a5c',
    });
  }

  // set classArray for a Named or Exotic weapon talent, link to that specific item
  if (
    talent.__typename === 'WeaponTalent' &&
    (talent.isNamed === 'YES' || talent.isExotic === 'YES')
  ) {
    talent.weaponName.map((weapon) =>
      classArray.push({
        title: `${weapon.model}`,
        link: `/weapons/${lowerCaseFirstLetter(weapon.class)}/${weapon.id}`,
        image: ``,
        id: `${weapon.id}`,
      })
    );
  }

  return (
    <>
      <div className="single-gear-item__details">
        {classArray.length >= 2 && (
          <div className="single-gear-item__subheading">
            Compatible Weapon Classes
          </div>
        )}
        {classArray.length <= 1 && (
          <div className="single-gear-item__subheading">
            Compatible Weapon Class
          </div>
        )}
        {classArray.map((arrayItem) => (
          <LinkStyles key={arrayItem.id}>
            <TitleLink>
              <Link href={arrayItem.link}>{arrayItem.title}</Link>
            </TitleLink>
            <img
              className="standard-item"
              src={arrayItem.image}
              alt={arrayItem.title}
            />
          </LinkStyles>
        ))}
      </div>
    </>
  );
}

import Link from 'next/link';
import { LinkStyles, TitleLink } from '../LinkSmallBrand';
import { weaponTalentIcon } from '../ItemIcons';

export default function LinkSmallWeaponTalent({ weapon }) {
  return (
    <>
      {weapon.weaponTalent !== [] && (
        <>
          <div className="single-weapon__details">
            <div className="single-weapon__title-bar">
              <h1 className="single-weapon__section-heading">
                Compatible Weapon Talents
              </h1>
            </div>

            {weapon.weaponTalent.map((talent) => (
              <LinkStyles key={talent.id}>
                <TitleLink>
                  <Link href={`/talents/weaponTalent/${talent.id}`}>
                    {talent.name}
                  </Link>
                </TitleLink>
                <img
                  className="standard-item"
                  src={
                    talent.image?.image.publicUrlTransformed || weaponTalentIcon
                  }
                  alt={talent.title}
                />
              </LinkStyles>
            ))}
          </div>
        </>
      )}
    </>
  );
}

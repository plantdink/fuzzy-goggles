import Head from 'next/head';
import { titleCase } from '../../lib/displayStrings';

export default function HeadSEOTag({ item = null, string = null }) {
  let seoTag;
  if (item === null) seoTag = string;

  if (item !== null && item.__typename === 'AverageWeapon')
    seoTag = `Average ${titleCase(item.class)}`;

  if (item !== null && item.__typename === 'Weapon') seoTag = item.model;

  if (item !== null && item.__typename === 'ArmourType')
    seoTag = `${item.name} ${item.piece}`;

  if (item !== null && item.__typename === 'ExoticArmourPiece')
    seoTag = item.name;

  if (item !== null && item.__typename === 'ArmourTalent')
    seoTag = `${item.name} talent`;

  if (item !== null && item.__typename === 'WeaponTalent')
    seoTag = `${item.name} talent`;

  if (item !== null && item.__typename === 'Brand')
    seoTag = `${item.name} brand`;

  if (item !== null && item.__typename === 'Gearset')
    seoTag = `${item.name} gear set`;

  return (
    <Head>
      <title>Agent Field Manual | {seoTag}</title>
    </Head>
  );
}

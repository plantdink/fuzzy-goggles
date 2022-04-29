import { useQuery } from '@apollo/client';
import SingleWeapon, {
  SINGLE_WEAPON_QUERY,
  SingleWeaponStyles,
} from '../../../components/SingleWeapon';
import LinkSmallWeaponTalent from '../../../components/LinkSmallWeaponTalent';
import HeadSEOTag from '../../../components/HeadSEOTag';
import TitleBar, { SubHeadingBar } from '../../../components/TitleBar';
import ClassAndFamilyText from '../../../components/ClassAndFamilyText';
import FlavourText from '../../../components/FlavourText';
import SingleRadarChart from '../../../components/SingleRadarChart';
import { PistolClassNotes } from '../../../components/WeaponClassNotes';
import ExoticWeaponAttachment from '../../../components/ExoticWeaponAttachment';
import LoaderSpinner from '../../../components/LoaderSpinner';
import DisplayError from '../../../components/ErrorMessage';

// below is accessed through the avgWeapon -> weapon={avgWeapon}
import WeaponClassThirdAttribute from '../../../components/WeaponClassThirdAttribute';

export default function SinglePistolPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_WEAPON_QUERY, {
    variables: {
      id: query.id,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  const weapon = data.allWeapons[0];
  const avgWeapon = weapon.averageWeapon;

  return (
    <>
      <SingleWeaponStyles data-testid="singleWeaponTest">
        <HeadSEOTag item={weapon} />
        <TitleBar item={weapon} />
        <ClassAndFamilyText weapon={weapon} />
        <SingleRadarChart weapon={weapon} avgWeapon={avgWeapon} />
        <SubHeadingBar subHeading="Weapon Stats" layout="weapon" />
        <FlavourText weapon={weapon} />
        <div className="single-weapon__sub-content">
          <SingleWeapon weapon={weapon} />
          {weapon.isExotic === 'NO' && (
            <WeaponClassThirdAttribute weapon={avgWeapon} />
          )}
          {weapon.isExotic === 'YES' && (
            <ExoticWeaponAttachment weapon={weapon} />
          )}
        </div>
        <PistolClassNotes />
        <LinkSmallWeaponTalent weapon={weapon} />
      </SingleWeaponStyles>
    </>
  );
}

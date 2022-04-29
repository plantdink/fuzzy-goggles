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
import ExoticWeaponAttachment from '../../../components/ExoticWeaponAttachment/ExoticWeaponAttachment';
import AssaultRifleClassNotes, {
  LightMachineGunClassNotes,
  MarksmanRifleClassNotes,
  PistolClassNotes,
  RifleClassNotes,
  ShotgunClassNotes,
  SubMachineGunClassNotes,
} from '../../../components/WeaponClassNotes';
import LoaderSpinner from '../../../components/LoaderSpinner';
import DisplayError from '../../../components/ErrorMessage';

export default function SingleExoticWeaponPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_WEAPON_QUERY, {
    variables: {
      id: query.id,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  const weapon = data.allWeapons[0];
  const avgWeapon = weapon.averageWeapon;

  let notesComponent;
  if (weapon.class === 'ASSAULT RIFLE')
    notesComponent = <AssaultRifleClassNotes />;
  if (weapon.class === 'LIGHT MACHINE GUN')
    notesComponent = <LightMachineGunClassNotes />;
  if (weapon.class === 'MARKSMAN RIFLE')
    notesComponent = <MarksmanRifleClassNotes />;
  if (weapon.class === 'PISTOL') notesComponent = <PistolClassNotes />;
  if (weapon.class === 'RIFLE') notesComponent = <RifleClassNotes />;
  if (weapon.class === 'SHOTGUN') notesComponent = <ShotgunClassNotes />;
  if (weapon.class === 'SUB MACHINE GUN')
    notesComponent = <SubMachineGunClassNotes />;

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
          <ExoticWeaponAttachment weapon={weapon} />
        </div>
        {notesComponent}
        <LinkSmallWeaponTalent weapon={weapon} />
      </SingleWeaponStyles>
    </>
  );
}

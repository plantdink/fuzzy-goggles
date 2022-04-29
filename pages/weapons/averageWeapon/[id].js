import { useQuery } from '@apollo/client';
import SingleAverageWeapon, {
  SINGLE_AVERAGE_WEAPON_QUERY,
} from '../../../components/SingleAverageWeapon';
import { SingleWeaponStyles } from '../../../components/SingleWeapon';
import LinkSmallWeaponTalent from '../../../components/LinkSmallWeaponTalent';
import AssaultRifleClassNotes, {
  LightMachineGunClassNotes,
  MarksmanRifleClassNotes,
  PistolClassNotes,
  RifleClassNotes,
  ShotgunClassNotes,
  SubMachineGunClassNotes,
} from '../../../components/WeaponClassNotes';
import WeaponClassThirdAttribute from '../../../components/WeaponClassThirdAttribute';
import SingleRadarChart from '../../../components/SingleRadarChart';
import TitleBar, { SubHeadingBar } from '../../../components/TitleBar';
import HeadSEOTag from '../../../components/HeadSEOTag';
import LoaderSpinner from '../../../components/LoaderSpinner';
import DisplayError from '../../../components/ErrorMessage';

export default function SingleAverageWeaponPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_AVERAGE_WEAPON_QUERY, {
    variables: {
      id: query.id,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  const weapon = data.allAverageWeapons[0];

  return (
    <>
      <SingleWeaponStyles data-testid="singleAverageWeaponPageTest">
        <HeadSEOTag item={weapon} />
        <TitleBar item={weapon} />
        <SingleRadarChart weapon={weapon} avgWeapon={null} />
        <SubHeadingBar subHeading="Weapon Stats" layout="weapon" />
        <div className="single-weapon__sub-content">
          <SingleAverageWeapon weapon={weapon} />
          <WeaponClassThirdAttribute weapon={weapon} />
        </div>
        {weapon.class === 'ASSAULT RIFLE' && <AssaultRifleClassNotes />}
        {weapon.class === 'LIGHT MACHINE GUN' && <LightMachineGunClassNotes />}
        {weapon.class === 'MARKSMAN RIFLE' && <MarksmanRifleClassNotes />}
        {weapon.class === 'PISTOL' && <PistolClassNotes />}
        {weapon.class === 'RIFLE' && <RifleClassNotes />}
        {weapon.class === 'SHOTGUN' && <ShotgunClassNotes />}
        {weapon.class === 'SUB MACHINE GUN' && <SubMachineGunClassNotes />}
        <LinkSmallWeaponTalent weapon={weapon} />
      </SingleWeaponStyles>
    </>
  );
}

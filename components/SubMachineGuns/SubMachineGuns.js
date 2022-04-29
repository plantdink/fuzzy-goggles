import { useQuery, gql } from '@apollo/client';
import { ListStyles } from '../styles/ListStyles';
import { perPage } from '../../config';
import SubMachineGun from '../SubMachineGun';
import LoaderSpinner from '../LoaderSpinner';
import DisplayError from '../ErrorMessage';

export const ALL_SUB_MACHINE_GUNS_QUERY = gql`
  query ALL_SUB_MACHINE_GUNS_QUERY($skip: Int = 0, $first: Int) {
    allWeapons(
      where: { class: "SUB MACHINE GUN" }
      first: $first
      skip: $skip
    ) {
      id
      model
      family
      magazineSize
      rpm
      modSlots
      reloadSpeed
      reloadSpeedFromEmpty
      accuracy
      stability
      optimalRange
      maxRange
      headshotMultiplier
      weaponBonusType
      maxBonusValue
      damageLevel40
      damageWt5
      notes
      isNamed
      isExotic
      image {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SubMachineGuns({ page }) {
  const { data, error, loading } = useQuery(ALL_SUB_MACHINE_GUNS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <ListStyles>
        {data.allWeapons.map((subMachineGun) => (
          <SubMachineGun key={subMachineGun.id} subMachineGun={subMachineGun} />
        ))}
      </ListStyles>
    </div>
  );
}

import { useQuery, gql } from '@apollo/client';
import NamedWeapon from '../NamedWeapon';
import { ListStyles } from '../styles/ListStyles';
import { perPage } from '../../config';
import LoaderSpinner from '../LoaderSpinner';
import DisplayError from '../ErrorMessage';

export const ALL_NAMED_WEAPONS_QUERY = gql`
  query ALL_NAMED_WEAPONS_QUERY($skip: Int = 0, $first: Int) {
    allWeapons(where: { isNamed: "YES" }, first: $first, skip: $skip) {
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

export default function NamedWeapons({ page }) {
  const { data, error, loading } = useQuery(ALL_NAMED_WEAPONS_QUERY, {
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
        {data.allWeapons.map((namedWeapon) => (
          <NamedWeapon key={namedWeapon.id} namedWeapon={namedWeapon} />
        ))}
      </ListStyles>
    </div>
  );
}

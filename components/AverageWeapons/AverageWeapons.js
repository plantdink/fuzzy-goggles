import { useQuery, gql } from '@apollo/client';
import AverageWeapon from '../AverageWeapon';
import { ListStyles } from '../styles/ListStyles';
import LoaderSpinner from '../LoaderSpinner';
import DisplayError from '../ErrorMessage';

export const ALL_AVERAGE_WEAPONS_QUERY = gql`
  query ALL_AVERAGE_WEAPONS_QUERY {
    allAverageWeapons {
      id
      class
      modSlots
      rpm
      magazineSize
      headshotMultiplier
      accuracy
      stability
      optimalRange
      maxRange
      reloadSpeed
      reloadSpeedFromEmpty
      damageLevel40
      damageWT5
      weaponTalent {
        id
        name
        image {
          image {
            publicUrlTransformed
          }
        }
      }
      image {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function AverageWeapons() {
  const { data, loading, error } = useQuery(ALL_AVERAGE_WEAPONS_QUERY);

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <ListStyles>
        {data.allAverageWeapons.map((averageWeapon) => (
          <AverageWeapon key={averageWeapon.id} averageWeapon={averageWeapon} />
        ))}
      </ListStyles>
    </div>
  );
}

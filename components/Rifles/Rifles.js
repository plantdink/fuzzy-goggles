import { useQuery, gql } from '@apollo/client';
import Rifle from '../Rifle';
import { ListStyles } from '../styles/ListStyles';
import { perPage } from '../../config';
import LoaderSpinner from '../LoaderSpinner';
import DisplayError from '../ErrorMessage';

export const ALL_RIFLES_QUERY = gql`
  query ALL_RIFLES_QUERY($skip: Int = 0, $first: Int) {
    allWeapons(where: { class: "RIFLE" }, first: $first, skip: $skip) {
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

export default function Rifles({ page }) {
  const { data, error, loading } = useQuery(ALL_RIFLES_QUERY, {
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
        {data.allWeapons.map((rifle) => (
          <Rifle key={rifle.id} rifle={rifle} />
        ))}
      </ListStyles>
    </div>
  );
}

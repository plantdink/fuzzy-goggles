import { useQuery, gql } from '@apollo/client';
import ArmourTalent from '../ArmourTalent';
import { ListStyles } from '../styles/ListStyles';
import { perPage } from '../../config';
import LoaderSpinner from '../LoaderSpinner';
import DisplayError from '../ErrorMessage';

export const ALL_ARMOUR_TALENTS_QUERY = gql`
  query ALL_ARMOUR_TALENTS_QUERY($skip: Int = 0, $first: Int) {
    allArmourTalents(first: $first, skip: $skip) {
      id
      name
      image {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export default function ArmourTalents({ page }) {
  const { data, loading, error } = useQuery(ALL_ARMOUR_TALENTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  return (
    <>
      <ListStyles>
        {data.allArmourTalents.map((armourTalent) => (
          <ArmourTalent
            key={armourTalent.id}
            armourTalent={armourTalent}
            img={armourTalent.image?.image.publicUrlTransformed}
          />
        ))}
      </ListStyles>
    </>
  );
}

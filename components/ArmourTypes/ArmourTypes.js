import { useQuery, gql } from '@apollo/client';
import ArmourType from '../ArmourType';
import { ListStyles } from '../styles/ListStyles';
import { perPage } from '../../config';
import LoaderSpinner from '../LoaderSpinner';
import DisplayError from '../ErrorMessage';

export const ALL_ARMOUR_TYPES_QUERY = gql`
  query ALL_ARMOUR_TYPES_QUERY($skip: Int = 0, $first: Int) {
    allArmourTypes(first: $first, skip: $skip) {
      id
      name
      image {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function ArmourTypes({ page }) {
  const { data, loading, error } = useQuery(ALL_ARMOUR_TYPES_QUERY, {
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
        {data.allArmourTypes.map((armourType) => (
          <ArmourType key={armourType.id} armourType={armourType} />
        ))}
      </ListStyles>
    </div>
  );
}

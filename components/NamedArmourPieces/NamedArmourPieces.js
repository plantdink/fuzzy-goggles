import { useQuery, gql } from '@apollo/client';
import { perPage } from '../../config';
import NamedArmourPiece from '../NamedArmourPiece';
import { ListStyles } from '../styles/ListStyles';
import LoaderSpinner from '../LoaderSpinner';
import DisplayError from '../ErrorMessage';

export const ALL_NAMED_ARMOUR_PIECES_QUERY = gql`
  query ALL_NAMED_ARMOUR_PIECES_QUERY($skip: Int, $first: Int) {
    allArmourTypes(where: { isNamed: "YES" }, first: $first, skip: $skip) {
      id
      name
      image {
        id
        image {
          publicUrlTransformed
        }
      }
      armourTalent {
        id
        name
      }
    }
  }
`;

export default function NamedArmourPieces({ page }) {
  const { data, loading, error } = useQuery(ALL_NAMED_ARMOUR_PIECES_QUERY, {
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
          <NamedArmourPiece key={armourType.id} armourType={armourType} />
        ))}
      </ListStyles>
    </div>
  );
}

import { useQuery, gql } from '@apollo/client';
import { perPage } from '../../config';
import ExoticArmourPiece from '../ExoticArmourPiece';
import { ListStyles } from '../styles/ListStyles';
import LoaderSpinner from '../LoaderSpinner';
import DisplayError from '../ErrorMessage';

export const ALL_EXOTIC_ARMOUR_PIECES_QUERY = gql`
  query ALL_EXOTIC_ARMOUR_PIECES_QUERY($skip: Int = 0, $first: Int) {
    allExoticArmourPieces(skip: $skip, first: $first) {
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

export default function ExoticArmourPieces({ page }) {
  const { data, loading, error } = useQuery(ALL_EXOTIC_ARMOUR_PIECES_QUERY, {
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
        {data.allExoticArmourPieces.map((exoticArmourPiece) => (
          <ExoticArmourPiece
            key={exoticArmourPiece.id}
            exoticArmourPiece={exoticArmourPiece}
          />
        ))}
      </ListStyles>
    </div>
  );
}

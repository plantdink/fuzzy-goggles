import { useQuery, gql } from '@apollo/client';
import { ListStyles } from '../styles/ListStyles';
import Gearset from '../Gearset';
import { perPage } from '../../config';
import LoaderSpinner from '../LoaderSpinner';
import DisplayError from '../ErrorMessage';

export const ALL_GEARSETS_QUERY = gql`
  query ALL_GEARSETS_QUERY($skip: Int = 0, $first: Int) {
    allGearsets(first: $first, skip: $skip) {
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

export default function Gearsets({ page }) {
  const { data, error, loading } = useQuery(ALL_GEARSETS_QUERY, {
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
        {data.allGearsets.map((gearset) => (
          <Gearset
            key={gearset.id}
            gearset={gearset}
            img={gearset.image?.image.publicUrlTransformed}
          />
        ))}
      </ListStyles>
    </div>
  );
}

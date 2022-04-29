import { useQuery, gql } from '@apollo/client';
import { ListStyles } from '../styles/ListStyles';
import Brand from '../Brand';
import { perPage } from '../../config';
import LoaderSpinner from '../LoaderSpinner';
import DisplayError from '../ErrorMessage';

export const ALL_BRANDS_QUERY = gql`
  query ALL_BRANDS_QUERY($skip: Int = 0, $first: Int) {
    allBrands(first: $first, skip: $skip) {
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

export default function Brands({ page }) {
  const { data, error, loading } = useQuery(ALL_BRANDS_QUERY, {
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
        {data.allBrands.map((brand) => (
          <Brand key={brand.id} brand={brand} />
        ))}
      </ListStyles>
    </>
  );
}

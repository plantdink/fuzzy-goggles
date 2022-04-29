import { useQuery } from '@apollo/client';
import HeadSEOTag from '../../../components/HeadSEOTag';
import SingleGearset, {
  SINGLE_GEARSET_QUERY,
} from '../../../components/SingleGearset';
import { SingleGearItemStyle } from '../../../components/SingleArmourPiece';
import TitleBar from '../../../components/TitleBar';
import LoaderSpinner from '../../../components/LoaderSpinner';
import DisplayError from '../../../components/ErrorMessage';

export default function SingleGearsetPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_GEARSET_QUERY, {
    variables: {
      id: query.id,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  const gearset = data.allGearsets[0];

  return (
    <>
      <SingleGearItemStyle>
        <HeadSEOTag item={gearset} />
        <TitleBar item={gearset} />
        <SingleGearset gearset={gearset} />
      </SingleGearItemStyle>
    </>
  );
}

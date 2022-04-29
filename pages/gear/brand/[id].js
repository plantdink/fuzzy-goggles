import { useQuery } from '@apollo/client';
import SingleBrand, {
  SINGLE_BRAND_QUERY,
} from '../../../components/SingleBrand';
import LinkSmallPiece from '../../../components/LinkSmallPiece';
import LinkSmallTalent from '../../../components/LinkSmallTalent';
import { SingleGearItemStyle } from '../../../components/SingleArmourPiece';
import HeadSEOTag from '../../../components/HeadSEOTag';
import TitleBar from '../../../components/TitleBar';
import LoaderSpinner from '../../../components/LoaderSpinner';
import DisplayError from '../../../components/ErrorMessage';

export default function SingleBrandPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_BRAND_QUERY, {
    variables: {
      id: query.id,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  const singleBrand = data.allBrands[0];

  return (
    <>
      <SingleGearItemStyle>
        <HeadSEOTag item={singleBrand} />
        <TitleBar item={singleBrand} />
        <SingleBrand brand={singleBrand} />

        {singleBrand.armourTalent.length === 1 && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Brand Unique Talent
              </h2>
            </div>
            {singleBrand.armourTalent.map((talent) => (
              <LinkSmallTalent talent={talent} />
            ))}
          </>
        )}

        {singleBrand.armourTalent.length > 1 && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Brand Unique Talents
              </h2>
            </div>
            {singleBrand.armourTalent.map((talent) => (
              <LinkSmallTalent talent={talent} />
            ))}
          </>
        )}

        {singleBrand.armourType.length > 0 && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Brand Unique Equipment
              </h2>
            </div>
            {singleBrand.armourType.map((piece, index) => (
              <LinkSmallPiece key={index} piece={piece} />
            ))}
          </>
        )}
      </SingleGearItemStyle>
    </>
  );
}

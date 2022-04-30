import { SingleGearItemStyle } from '../../../components/SingleArmourPiece';
import HeadSEOTag from '../../../components/HeadSEOTag';
import Credits from '../../../components/Credits/Credits';

export default function credits() {
  return (
    <>
      <HeadSEOTag string="Development Credits" />
      <SingleGearItemStyle>
        <Credits />
      </SingleGearItemStyle>
    </>
  );
}

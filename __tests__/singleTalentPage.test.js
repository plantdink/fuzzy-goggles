import { render, screen } from '@testing-library/react';
import SingleTalent from '../components/SingleTalent';
import LinkSmallPiece from '../components/LinkSmallPiece';
import {
  fakeChestArmourTalent,
  fakeBackpackArmourTalent,
} from '../lib/testUtils';

describe('<SingleTalent /> <LinkSmallPiece />', () => {
  let armourTalent = fakeChestArmourTalent();
  it('renders both components correctly for a Chest talent', () => {
    const { container, debug } = render(
      <>
        <SingleTalent singleTalent={armourTalent} />
        {armourTalent.piece !== '' && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Compatible Equipment
              </h2>
            </div>
            <LinkSmallPiece piece={armourTalent} />
          </>
        )}
      </>
    );

    const singleTalentTitle = screen.getByText(armourTalent.name);
    expect(singleTalentTitle).toBeInTheDocument();

    const talentPieceIcon = screen.getByRole('img', { name: /chest icon/i });
    expect(talentPieceIcon).toBeInTheDocument();

    const talentImage = screen.getByAltText(armourTalent.image.altText);
    expect(talentImage).toBeInTheDocument();

    const talentType = screen.getByText(armourTalent.type);
    expect(talentType).toBeInTheDocument();

    const talentPVEDescription = screen.getByText(armourTalent.descriptionPVE);
    expect(talentPVEDescription).toBeInTheDocument();

    const talentPVPDescription = screen.getByText(armourTalent.descriptionPVP);
    expect(talentPVPDescription).toBeInTheDocument();

    const link = container.querySelector('a');
    expect(link).toHaveTextContent(armourTalent.piece);
  });

  it('renders both components correctly for a Backpack talent', () => {
    armourTalent = fakeBackpackArmourTalent();
    const { container, debug } = render(
      <>
        <SingleTalent singleTalent={armourTalent} />
        {armourTalent.piece !== '' && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Compatible Equipment
              </h2>
            </div>
            <LinkSmallPiece piece={armourTalent} />
          </>
        )}
      </>
    );
    // debug();

    const singleTalentTitle = screen.getByText(armourTalent.name);
    expect(singleTalentTitle).toBeInTheDocument();

    const talentPieceIcon = screen.getByRole('img', { name: /backpack icon/i });
    expect(talentPieceIcon).toBeInTheDocument();

    const talentImage = screen.getByAltText(armourTalent.image.altText);
    expect(talentImage).toBeInTheDocument();

    const talentType = screen.getByText(armourTalent.type);
    expect(talentType).toBeInTheDocument();

    const talentPVEDescription = screen.getByText(armourTalent.descriptionPVE);
    expect(talentPVEDescription).toBeInTheDocument();

    const talentPVPDescription = screen.getByText(armourTalent.descriptionPVP);
    expect(talentPVPDescription).toBeInTheDocument();

    const link = container.querySelector('a');
    expect(link).toHaveTextContent(armourTalent.piece);
  });
});

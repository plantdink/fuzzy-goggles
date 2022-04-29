import { render, screen, cleanup } from '@testing-library/react';
import SingleTalent from '.';
import {
  fakeChestArmourTalent,
  fakeBackpackArmourTalent,
} from '../../lib/testUtils';

afterEach(cleanup);

describe('<SingleTalent />', () => {
  let armourTalent = fakeChestArmourTalent();
  it('renders correctly for a Chest talent', () => {
    const { container, debug } = render(
      <SingleTalent singleTalent={armourTalent} />
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
  });

  it('renders correctly for a Backpack talent', () => {
    armourTalent = fakeBackpackArmourTalent();
    const { container, debug } = render(
      <SingleTalent singleTalent={armourTalent} />
    );

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
  });
});

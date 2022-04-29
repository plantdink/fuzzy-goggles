import { render, screen, cleanup } from '@testing-library/react';
import SingleArmourPiece from '.';
import { fakeArmourPiece } from '../../lib/testUtils';

const armourPiece = fakeArmourPiece();

afterEach(cleanup);

describe('<SingleArmourPiece />', () => {
  it('renders correctly for a single armour piece', async () => {
    const { container, debug } = render(
      <SingleArmourPiece armourPiece={armourPiece} />
    );

    await screen.findByTestId('singleArmourPiece');
    expect(container).toMatchSnapshot();

    // Move to SingleBrandPage test
    // const testArmourPieceTitle = screen.getByText(armourPiece.name);
    // expect(testArmourPieceTitle).toBeInTheDocument();

    // check World Tier 5 stats render if present
    //     if (fakeQuery.is)
    // const worldTier5Check = screen.getByRole("columnheader", {
    //   name: /world tier 5 stats/i,
    // });

    const testArmourPieceIcon = await screen.findByTestId('itemIcon');
    expect(testArmourPieceIcon).toBeInTheDocument();

    const testPiece = await screen.findByTestId('itemPiece');
    if (armourPiece.piece !== '') expect(testPiece).toBeInTheDocument();
    expect(testPiece).toHaveTextContent(armourPiece.piece);

    const testNotes = await screen.findByTestId('itemNotes');
    if (armourPiece.notes !== '') expect(testNotes).toBeInTheDocument();
    expect(testNotes).toHaveTextContent(armourPiece.notes);
  });
});

import { render, screen, cleanup } from '@testing-library/react';
import SingleNamedArmourPiece from '.';
import { fakeNamedArmourPiece } from '../../lib/testUtils';

const armourPiece = fakeNamedArmourPiece();

afterEach(cleanup);

describe('<SingleNamedArmourPiece />', () => {
  it('renders correctly for a single armour piece', async () => {
    const { container, debug } = render(
      <SingleNamedArmourPiece singleNamedPiece={armourPiece} />
    );

    await screen.findByTestId('singleArmourPiece');
    expect(container).toMatchSnapshot();

    // Move to SingleNamedArmourPiecePage test
    // const testArmourPieceTitle = screen.getByText(armourPiece.name);
    // expect(testArmourPieceTitle).toBeInTheDocument();

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

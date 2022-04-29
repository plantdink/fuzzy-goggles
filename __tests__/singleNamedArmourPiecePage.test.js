import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { fakeNamedArmourPieceQuery } from '../lib/testUtils';
import { SINGLE_NAMED_ARMOUR_PIECE_QUERY } from '../components/SingleNamedArmourPiece';
import SingleNamedArmourPiecePage from '../pages/gear/namedArmourPiece/[id]';

afterEach(cleanup);

const namedArmourPiece = fakeNamedArmourPieceQuery();

const mocks = [
  {
    request: {
      query: SINGLE_NAMED_ARMOUR_PIECE_QUERY,
      variables: {
        id: namedArmourPiece.id,
      },
    },
    result: {
      data: {
        allArmourTypes: [namedArmourPiece],
      },
    },
  },
];

const errorMocks = [
  {
    request: {
      query: SINGLE_NAMED_ARMOUR_PIECE_QUERY,
      variables: {
        id: namedArmourPiece.id,
      },
    },
    result: {
      errors: [
        {
          message: 'Named Armour Piece not found.',
        },
      ],
    },
  },
];

describe('<SingleGearsetPage />', () => {
  it('displays loading when the page first renders', () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleNamedArmourPiecePage
            query={{ id: `${namedArmourPiece.id}` }}
          />
        </MockedProvider>
      </>
    );

    const loaderSpinner = screen.getByTestId('tail-spin-loading');
    expect(loaderSpinner).toBeInTheDocument();
  });

  it('matches the snapshot', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleNamedArmourPiecePage
            query={{ id: `${namedArmourPiece.id}` }}
          />
        </MockedProvider>
      </>
    );

    await screen.findByTestId('singleYellowArmourPiece');
    expect(container).toMatchSnapshot();
  });

  it('loads the data and renders all components with data correctly for a single armour type page', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleNamedArmourPiecePage
            query={{ id: `${namedArmourPiece.id}` }}
          />
        </MockedProvider>
      </>
    );

    const testTitle = await screen.findByText(namedArmourPiece.name);
    expect(testTitle).toBeInTheDocument();

    const testSingleNamedArmourPieceContent = await screen.findByTestId(
      'singleYellowArmourPiece'
    );
    expect(testSingleNamedArmourPieceContent).toBeInTheDocument();
  });

  it('Throws an error when an item is not found', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={errorMocks}>
          <SingleNamedArmourPiecePage
            query={{ id: `${namedArmourPiece.id}` }}
          />
        </MockedProvider>
      </>
    );

    expect(screen.queryByTestId('graphql-error')).toBeDefined();
    await waitFor(() => {});
  });
});

import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { fakeArmourPieceQuery } from '../lib/testUtils';
import { SINGLE_ARMOUR_PIECE_QUERY } from '../components/SingleArmourPiece';
import SingleArmourTypePage from '../pages/gear/armourType/[id]';

afterEach(cleanup);

const fakeQuery = fakeArmourPieceQuery();

const mocks = [
  {
    request: {
      query: SINGLE_ARMOUR_PIECE_QUERY,
      variables: {
        id: fakeQuery.id,
      },
    },
    result: {
      data: {
        allArmourTypes: [fakeQuery],
      },
    },
  },
];

const errorMocks = [
  {
    request: {
      query: SINGLE_ARMOUR_PIECE_QUERY,
      variables: {
        id: fakeQuery.id,
      },
    },
    result: {
      errors: [
        {
          message: 'Item not found.',
        },
      ],
    },
  },
];

describe('<SingleArmourTypePage />', () => {
  it('displays loading when the page first renders', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleArmourTypePage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );

    const loaderSpinner = screen.getByTestId('tail-spin-loading');
    expect(loaderSpinner).toBeInTheDocument();
  });

  it('loads the data and renders all components with data correctly for a single armour type page', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleArmourTypePage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );

    await screen.findByTestId('singleYellowArmourPiece');
    expect(container).toMatchSnapshot();

    const testTitle = await screen.findByText(fakeQuery.name);
    expect(testTitle).toBeInTheDocument();

    // flavour text blockquote should not be visible if the weapon has null or an empty string
    if (fakeQuery.flavourText !== null || '') {
      const flavourText = container.querySelector('blockquote');
      expect(flavourText).toBeInTheDocument();
    }

    // check the correct number of small links have rendered on the page
    const screenLinks = Array.from(container.querySelectorAll('a'));
    const pageLinksLength =
      fakeQuery.armourTalent.length + fakeQuery.brand.length;
    expect(screenLinks.length).toEqual(pageLinksLength);

    // if mock data has a unique attribute, check it has rendered correctly
    if (fakeQuery.uniqueAttribute !== null) {
      const uniqueAttributeCheck = screen.getByTestId('uniqueAttributeTest');
      expect(uniqueAttributeCheck).toHaveTextContent(fakeQuery.uniqueAttribute);
    }
  });

  it('Throws an error when an item is not found', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={errorMocks}>
          <SingleArmourTypePage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );

    expect(screen.queryByTestId('graphql-error')).toBeDefined();
    await waitFor(() => {});
  });
});

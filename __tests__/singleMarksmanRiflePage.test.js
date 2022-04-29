import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { fakeMMRQuery } from '../lib/testUtils';
import { SINGLE_WEAPON_QUERY } from '../components/SingleWeapon';
import SingleMarksmanRiflePage from '../pages/weapons/marksmanRifle/[id]';

afterEach(cleanup);

const fakeQuery = fakeMMRQuery();

const mocks = [
  {
    request: {
      query: SINGLE_WEAPON_QUERY,
      variables: {
        id: fakeQuery.id,
      },
    },
    result: {
      data: {
        allWeapons: [fakeQuery],
      },
    },
  },
];

const errorMocks = [
  {
    request: {
      query: SINGLE_WEAPON_QUERY,
      variables: {
        id: fakeQuery.id,
      },
    },
    result: {
      errors: [
        {
          message: 'Weapon not found.',
        },
      ],
    },
  },
];

describe('<SingleMarksmanRiflePage />', () => {
  it('displays loading when the page first renders', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleMarksmanRiflePage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );

    const loaderSpinner = screen.getByTestId('tail-spin-loading');
    expect(loaderSpinner).toBeInTheDocument();
  });

  it('loads the data and renders both components with data correctly for a single marksman rifle page', async () => {
    const { container, debug, findByText } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleMarksmanRiflePage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );

    await screen.findByTestId('singleWeaponTest');
    expect(container).toMatchSnapshot();

    const testTitle = await findByText(fakeQuery.model);
    expect(testTitle).toBeInTheDocument();

    const screenLinks = Array.from(container.querySelectorAll('a'));
    const talentLinks = fakeQuery.weaponTalent;
    expect(screenLinks.length).toEqual(talentLinks.length);

    const testValueWarning = screen.findByText(
      /note: 0 indicates no value available/i
    );
    if (
      (fakeQuery.accuracy ||
        fakeQuery.stability ||
        fakeQuery.optimalRange ||
        fakeQuery.maxRange) === 0
    )
      expect(testValueWarning).toBeInTheDocument();

    const thirdAttributeComponent = await screen.findByTestId(
      'thirdAttributeTest'
    );
    if (fakeQuery.isExotic === 'NO')
      expect(thirdAttributeComponent).toBeInTheDocument();

    const weaponClassNotes = await screen.findByTestId('testMMRNotes');
    expect(weaponClassNotes).toBeInTheDocument();
  });

  it('does not render elements for attributes that are null or empty', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleMarksmanRiflePage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );
    await screen.findByTestId('singleWeaponTest');

    const thirdAttributeComponent = screen.findByTestId('thirdAttributeTest');
    if (fakeQuery.isExotic === 'YES')
      expect(thirdAttributeComponent).not.toBeInTheDocument();
  });

  it('Throws an error when an item is not found', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={errorMocks}>
          <SingleMarksmanRiflePage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );

    expect(screen.queryByTestId('graphql-error')).toBeDefined();
    await waitFor(() => {});
  });
});

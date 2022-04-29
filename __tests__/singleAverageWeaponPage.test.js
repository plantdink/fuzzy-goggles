import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { fakeAverageWeaponQuery } from '../lib/testUtils';
import { SINGLE_AVERAGE_WEAPON_QUERY } from '../components/SingleAverageWeapon';
import SingleAverageWeaponPage from '../pages/weapons/averageWeapon/[id]';

afterEach(cleanup);

const fakeQuery = fakeAverageWeaponQuery();

const mocks = [
  {
    request: {
      query: SINGLE_AVERAGE_WEAPON_QUERY,
      variables: {
        id: fakeQuery.id,
      },
    },
    result: {
      data: {
        allAverageWeapons: [fakeQuery],
      },
    },
  },
];

const errorMocks = [
  {
    request: {
      query: SINGLE_AVERAGE_WEAPON_QUERY,
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

describe('<SingleAverageWeaponPage />', () => {
  it('displays loading when the page first renders', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleAverageWeaponPage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );

    const loaderSpinner = screen.getByTestId('tail-spin-loading');
    expect(loaderSpinner).toBeInTheDocument();
  });

  it('loads the data and renders all components with data correctly for a single average weapon page', async () => {
    const { container, debug, findByText } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleAverageWeaponPage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );

    await screen.findByTestId('singleAverageWeaponPageTest');
    expect(container).toMatchSnapshot();

    const testTitle = await findByText(fakeQuery.class);
    expect(testTitle).toBeInTheDocument();

    const screenLinks = Array.from(container.querySelectorAll('a'));
    const talentLinks = fakeQuery.weaponTalent;
    expect(screenLinks.length).toEqual(talentLinks.length);
  });

  it('Throws an error when an item is not found', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={errorMocks}>
          <SingleAverageWeaponPage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );

    expect(screen.queryByTestId('graphql-error')).toBeDefined();
    await waitFor(() => {});
  });
});

import { render, screen, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { fakeExoticWeaponQuery } from '../lib/testUtils';
import { SINGLE_WEAPON_QUERY } from '../components/SingleWeapon';
import SingleExoticWeaponPage from '../pages/weapons/exoticWeapon/[id]';

afterEach(cleanup);

const fakeQuery = fakeExoticWeaponQuery();

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

describe('<SingleExoticWeaponPage />', () => {
  it('displays loading when the page first renders', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleExoticWeaponPage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('loads the data and renders all components with data correctly for a single exotic weapon page', async () => {
    const { container, debug, findByText } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleExoticWeaponPage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );

    await screen.findByTestId('singleWeaponTest');
    expect(container).toMatchSnapshot();
    // debug();

    const testTitle = await findByText(fakeQuery.model);
    expect(testTitle).toBeInTheDocument();

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

    const exoticAttachmentComponent = await screen.findByTestId(
      'exoticWeaponTest'
    );
    if (fakeQuery.isExotic === 'YES')
      expect(exoticAttachmentComponent).toBeInTheDocument();

    const secondDamageBonus = await screen.findByTestId(
      'secondDamageBonusTest'
    );
    if (fakeQuery.weaponBonusTypeTwo !== null)
      expect(secondDamageBonus).toBeInTheDocument();

    const screenLinks = Array.from(container.querySelectorAll('a'));
    const talentLinks = fakeQuery.weaponTalent;
    expect(screenLinks.length).toEqual(talentLinks.length);
  });

  it('does not render elements for attributes that are null or empty', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleExoticWeaponPage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );
    await screen.findByTestId('singleWeaponTest');

    // dodgy way of checking if a value DOES NOT render
    // TODO: Find a better way to check this
    const secondDamageBonusValue = fakeQuery.maxBonusTwoValue;
    if (fakeQuery.weaponBonusTypeTwo === null)
      expect(secondDamageBonusValue).not.toBeInTheDocument();
  });

  it('Throws an error when an item is not found', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={errorMocks}>
          <SingleExoticWeaponPage query={{ id: `${fakeQuery.id}` }} />
        </MockedProvider>
      </>
    );

    await screen.findByTestId('graphql-error');
    expect(container).toHaveTextContent('Fucks sake!!');
    expect(container).toHaveTextContent('Weapon not found.');
  });
});

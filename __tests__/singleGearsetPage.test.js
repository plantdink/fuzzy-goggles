import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { fakeGearsetQuery } from '../lib/testUtils';
import { SINGLE_GEARSET_QUERY } from '../components/SingleGearset';
import SingleGearsetPage from '../pages/gear/gearset/[id]';

afterEach(cleanup);

const gearset = fakeGearsetQuery();

const mocks = [
  {
    request: {
      query: SINGLE_GEARSET_QUERY,
      variables: {
        id: gearset.id,
      },
    },
    result: {
      data: {
        allGearsets: [gearset],
      },
    },
  },
];

const errorMocks = [
  {
    request: {
      query: SINGLE_GEARSET_QUERY,
      variables: {
        id: gearset.id,
      },
    },
    result: {
      errors: [
        {
          message: 'Gear Set not found.',
        },
      ],
    },
  },
];

describe('<SingleGearsetPage />', () => {
  it('displays loading when the page first renders', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleGearsetPage query={{ id: `${gearset.id}` }} />
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
          <SingleGearsetPage query={{ id: `${gearset.id}` }} />
        </MockedProvider>
      </>
    );

    await screen.findByTestId('testGearset');
    expect(container).toMatchSnapshot();
  });

  it('loads the data and renders all components with data correctly for a single armour type page', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleGearsetPage query={{ id: `${gearset.id}` }} />
        </MockedProvider>
      </>
    );

    const testTitle = await screen.findByText(gearset.name);
    expect(testTitle).toBeInTheDocument();

    const testSingleGearsetContent = await screen.findByTestId('testGearset');
    expect(testSingleGearsetContent).toBeInTheDocument();
  });

  it('Throws an error when an item is not found', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={errorMocks}>
          <SingleGearsetPage query={{ id: `${gearset.id}` }} />
        </MockedProvider>
      </>
    );

    expect(screen.queryByTestId('graphql-error')).toBeDefined();
    await waitFor(() => {});
  });
});

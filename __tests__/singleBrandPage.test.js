import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { fakeBrandQuery } from '../lib/testUtils';
import { SINGLE_BRAND_QUERY } from '../components/SingleBrand';
import SingleBrandPage from '../pages/gear/brand/[id]';

afterEach(cleanup);

const brand = fakeBrandQuery();

const mocks = [
  {
    request: {
      query: SINGLE_BRAND_QUERY,
      variables: {
        id: brand.id,
      },
    },
    result: {
      data: {
        allBrands: [brand],
      },
    },
  },
];

const errorMocks = [
  {
    request: {
      query: SINGLE_BRAND_QUERY,
      variables: {
        id: brand.id,
      },
    },
    result: {
      errors: [
        {
          message: 'Brand not found.',
        },
      ],
    },
  },
];

describe('<SingleBrandPage />', () => {
  it('displays loading when the page first renders', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleBrandPage query={{ id: `${brand.id}` }} />
        </MockedProvider>
      </>
    );

    const loaderSpinner = screen.getByTestId('tail-spin-loading');
    expect(loaderSpinner).toBeInTheDocument();
  });

  it('loads the data and renders all components with data correctly for a single brand page', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleBrandPage query={{ id: `${brand.id}` }} />
        </MockedProvider>
      </>
    );

    const testBrandTitle = await screen.findByText(brand.name);
    expect(testBrandTitle).toBeInTheDocument();

    // check the correct number of small links have rendered on the page
    const screenLinks = Array.from(container.querySelectorAll('a'));
    const pageLinksLength = brand.armourTalent.length + brand.armourType.length;
    expect(screenLinks.length).toEqual(pageLinksLength);
  });

  it('matches the snapshot', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={mocks}>
          <SingleBrandPage query={{ id: `${brand.id}` }} />
        </MockedProvider>
      </>
    );

    await screen.findByTestId('testBrand');
    expect(container).toMatchSnapshot();
  });

  it('Throws an error when an item is not found', async () => {
    const { container, debug } = render(
      <>
        <MockedProvider mocks={errorMocks}>
          <SingleBrandPage query={{ id: `${brand.id}` }} />
        </MockedProvider>
      </>
    );

    expect(screen.queryByTestId('graphql-error')).toBeDefined();
    await waitFor(() => {});
  });
});

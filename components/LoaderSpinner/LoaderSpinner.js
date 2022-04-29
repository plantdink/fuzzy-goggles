import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export default function LoaderSpinner() {
  return (
    <>
      <TailSpin
        color="var(--orange)"
        height={100}
        width={100}
        ariaLabel="Loading"
        // data-testid="testLoaderSpinner"
      />
    </>
  );
}

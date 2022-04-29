import React from 'react';
import styled from 'styled-components';
import RogueIconSVG from '../RogueIcon';

export const WrapperError = styled.div`
  .content {
    height: 75vh;
    max-width: var(--maxWidth);
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 1px solid var(--offWhite);
    box-shadow: var(--bs);
    padding: 2rem;
    margin-bottom: 3rem;

    .text {
      align-self: flex-start;
      padding: 2rem;
    }
  }

  .error__title-bar {
    transform: skew(7deg);
  }

  .error__heading {
    margin: 0 0 1rem 0;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    background: var(--rogueRed);
    line-height: 1.3;
    font-size: 4.5rem;
    color: var(--background);
    padding: 0 1rem;
  }

  .rogue-icon {
    position: absolute;
    padding-top: 5rem;
    max-height: 50vh;
  }

  p {
    color: var(--text);
    justify-self: start;
    flex: auto;
    padding: 1rem 1rem 0 1rem;
    margin: 0.5rem 0;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.3;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
  }

  blockquote {
    color: var(--text);
    margin: 0.75rem 0;
    padding: 1rem;
    font-weight: 300;
    font-size: 1.6rem;
  }
`;

export default function Component404() {
  return (
    <>
      <WrapperError>
        <div className="content">
          <div className="text ">
            <div className="error__title-bar">
              <h1 className="error__heading">404 - REDACTED</h1>
            </div>
            <div className="text">
              <p>
                The information you are looking for is not available, or you do
                not have the required clearance to access it.
              </p>
            </div>
            <div className="text">
              <p>
                (But seriously.....the page you are looking for does not exist.
                Use the search bar or one of the links at the top of the page to
                try again.)
              </p>
              <blockquote>Error Code: 404</blockquote>
            </div>
          </div>

          <div className="rogue-icon">
            <RogueIconSVG />
          </div>
        </div>
      </WrapperError>
    </>
  );
}

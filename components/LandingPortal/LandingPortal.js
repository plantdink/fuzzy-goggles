import React from 'react';
import styled from 'styled-components';
import ShdIconSVG from '../SHDIcon';

export const LandingStyles = styled.div`
  .landing-content {
    height: 70vh;
    display: flex;
    justify-content: center;
  }

  .typing-wrapper {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    max-width: 70vw;
    z-index: 1;
  }

  .shd-icon {
    position: absolute;
    justify-self: center;
    align-self: center;
    max-height: 65vh;
    max-width: 65vw;
  }
`;

export const TypingStyles = styled.div`
  .typing-text {
    width: 50ch;
    animation: typing 4.5s steps(50), blink 0.25s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: clamp(1rem, 2.5vw, 4rem);
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      max-width: 70vw;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

export default function LandingPortal() {
  return (
    <>
      <LandingStyles>
        <div className="landing-content">
          <div className="typing-wrapper">
            <TypingStyles>
              <div className="typing-text">
                Agent, welcome to the Strategic Homeland Division.
              </div>
            </TypingStyles>
          </div>

          <div className="shd-icon">
            <ShdIconSVG />
          </div>
        </div>
      </LandingStyles>
    </>
  );
}

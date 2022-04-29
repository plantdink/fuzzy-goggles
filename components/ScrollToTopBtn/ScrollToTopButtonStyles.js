import styled from 'styled-components';

const ScrollToTopBtnStyles = styled.div`
  .scroll-to-top {
    position: fixed;
    z-index: 1000;
    bottom: 2rem;
    right: 2rem;
    animation: fadeIn 700ms ease-in-out 1s both;
    cursor: pointer;
  }

  .scroll-to-top__button {
    width: 5rem;
    aspect-ratio: 1;
    background-repeat: no-repeat;
    background-image: url('https://res.cloudinary.com/dbm1h5w02/image/upload/v1648165819/agent-field-manual/623d03ba8c594220010f2316.svg');
    background-color: transparent;
  }

  /* Include styles to VISUALLY hide class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default ScrollToTopBtnStyles;

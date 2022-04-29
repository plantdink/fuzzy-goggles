import React, { useEffect, useState } from 'react';
import ScrollToTopBtnStyles from './ScrollToTopButtonStyles';

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  // show the button when page is scrolled to a given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // set top coord to 0 & make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ScrollToTopBtnStyles>
      <div className="scroll-to-top">
        {isVisible && (
          <button
            className="scroll-to-top__button"
            onClick={scrollToTop}
            type="button"
          >
            <span className="sr-only">Scroll to top</span>
          </button>
        )}
      </div>
    </ScrollToTopBtnStyles>
  );
}

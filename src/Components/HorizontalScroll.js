import React, { useEffect, useRef } from 'react';
import './HorizontalScroll.css'; // Import the CSS file for custom styles

const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let isThrottled = false;

    const handleScroll = (event) => {
      if (window.innerWidth >= 1024 && !isThrottled) {
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, 10); // Throttle the event to avoid excessive scrolling

        const direction = event.deltaY > 0 ? 1 : -1;
        const newScrollLeft = scrollContainer.scrollLeft + direction * window.innerWidth;

        // Ensure new scroll position is within bounds
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (newScrollLeft >= 0 && newScrollLeft <= maxScrollLeft) {
          scrollContainer.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth',
          });
          event.preventDefault();
        }
      }
    };

    const disableVerticalScroll = (event) => {
      if (window.innerWidth >= 1024) {
        const isAtStart = scrollContainer.scrollLeft === 0;
        const isAtEnd = scrollContainer.scrollLeft === scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (!isAtStart && !isAtEnd) {
          window.scrollTo(0, scrollContainer.getBoundingClientRect().top + window.pageYOffset); // Keep window scroll position fixed
          event.preventDefault();
        }
      }
    };

    const handleWindowScroll = () => {
      const wrapperTop = scrollContainer.getBoundingClientRect().top + window.pageYOffset;
      const wrapperBottom = wrapperTop + scrollContainer.scrollHeight;
      const isWrapperVisible = window.pageYOffset >= wrapperTop && window.pageYOffset < wrapperBottom;

      if (isWrapperVisible) {
        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('scroll', disableVerticalScroll, { passive: false });
      } else {
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('scroll', disableVerticalScroll);
      }
    };

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('scroll', disableVerticalScroll);
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="scroll-container flex overflow-y-hidden">
      <div className="flex-shrink-0 w-screen h-screen bg-red-500 flex items-center justify-center">
        Page 1
      </div>
      <div className="flex-shrink-0 w-screen h-screen bg-green-500 flex items-center justify-center">
        Page 2
      </div>
      <div className="flex-shrink-0 w-screen h-screen bg-blue-500 flex items-center justify-center">
        Page 3
      </div>
      <div className="flex-shrink-0 w-screen h-screen bg-yellow-500 flex items-center justify-center">
        Page 4
      </div>
    </div>
  );
};

export default HorizontalScroll;

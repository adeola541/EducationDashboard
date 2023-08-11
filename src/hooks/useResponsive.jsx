import React from 'react';
import { BREAKPOINTS, media } from 'styles/themes/constants';
import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const isMobile = useMediaQuery({ query: media.xs });
  const isTablet = useMediaQuery({ query: media.md });
  const isDesktop = useMediaQuery({ query: media.xl });

  const mobileOnly = useMediaQuery({
    query: `(max-width: ${BREAKPOINTS.md - 0.02}px)`,
  });

  const tabletOnly = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.xl - 0.02}px)`,
  });

  const desktopOnly = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.xl}px) and (max-width: ${BREAKPOINTS.xxl - 0.02}px)`,
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    mobileOnly,
    tabletOnly,
    desktopOnly,
    useMediaQuery,
  };
};

const YourComponent = () => {
  const { isMobile, isTablet, isDesktop,  mobileOnly, tabletOnly, desktopOnly } = useResponsive();

  return (
    <div>
      <p>isMobile: {isMobile.toString()}</p>
      <p>isTablet: {isTablet.toString()}</p>
      <p>isDesktop: {isDesktop.toString()}</p>
      <p>mobileOnly: {mobileOnly.toString()}</p>
      <p>tabletOnly: {tabletOnly.toString()}</p>
      <p>desktopOnly: {desktopOnly.toString()}</p>
    </div>
  );
};

export default YourComponent;

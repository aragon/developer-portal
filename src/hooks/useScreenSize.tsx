import { useEffect, useState } from "react";
import { useViewportSize } from "@mantine/hooks";

export const MOBILE_WIDTH_BREAKPOINT = 600;
export const TABLET_WIDTH_BREAKPOINT = 992;
export const DESKTOP_WIDTH_BREAKPOINT = 1200;

interface IUseScreenSizeRes {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useScreenSize = (): IUseScreenSizeRes => {
  const { width } = useViewportSize();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.screen.width <= MOBILE_WIDTH_BREAKPOINT) {
      setIsMobile(true);
      setIsTablet(false);
      setIsDesktop(false);
      return;
    }
    if (
      window.screen.width >= MOBILE_WIDTH_BREAKPOINT &&
      window.screen.width < DESKTOP_WIDTH_BREAKPOINT
    ) {
      setIsMobile(false);
      setIsTablet(true);
      setIsDesktop(false);
      return;
    }
    if (window.screen.width >= DESKTOP_WIDTH_BREAKPOINT) {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
      return;
    }
  }, [width]);
  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

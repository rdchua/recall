import { useMediaQuery } from "@chakra-ui/react"

// sm: "480px",
// md: "768px",
// lg: "992px",
// xl: "1280px",
// "2xl": "1536px",

export default function useScreen() {
  const [isMobile] = useMediaQuery(`(max-width: 40rem)`)
  const [isTablet] = useMediaQuery(`(min-width: 40rem) and (max-width: 64rem)`)
  const [isLargeTablet] = useMediaQuery(
    `(min-width: 48rem) and (max-width: 64rem)`
  )
  const [isDesktop] = useMediaQuery('(min-width: 64rem)')
  const [isLargeDesktop] = useMediaQuery('(min-width: 80rem)')

  const helpers = {
    isSmallScreen: isMobile || isTablet || isLargeTablet,
    isLargeScreen: isDesktop || isLargeDesktop,
  }

  return {
    isMobile,
    isTablet,
    isLargeTablet,
    isDesktop,
    isLargeDesktop,
    helpers,
  }
}

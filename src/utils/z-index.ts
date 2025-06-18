export const Z_INDEX = {
  // Navbar related z-indices
  NAVBAR_BASE: 101,
  NAVBAR_DESKTOP: 103,
  NAVBAR_MOBILE_CONTAINER: 103,
  NAVBAR_MOBILE_BUTTON: 103,
  NAVBAR_CURSOR: 104,
  NAVBAR_TOGGLE_ARROW: 105,

  LOGO: 102,

  // Privacy related z-indices
  CONSENT_BANNER: 115, // Higher than navbar to ensure visibility

  MATERIALS: 10,
  HOURGLASS: 20,
  REQUEST_PROCUREMENT: 102,
  GRADIENT_CONTAINER: 40,
  GRADIENT_CONTENT: 41,
  PLANE_BACKGROUND: 0,
} as const;

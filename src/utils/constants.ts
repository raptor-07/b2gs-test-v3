/* Heights */
export const HEIGHTS = {
  // Desktop Heights
  DESKTOP: {
    INTRODUCTION_PLANE: "500vh",
    EPR_PLANE: "600vh",
    ANIMATED_PLANE: "700vh",
    IDEAS_PLANE: "200vh",
    FOOTER_PLANE: "100vh",
    get CONTAINER() {
      return `${
        parseInt(this.INTRODUCTION_PLANE.replace("vh", "")) +
        parseInt(this.EPR_PLANE.replace("vh", "")) +
        parseInt(this.ANIMATED_PLANE.replace("vh", "")) +
        parseInt(this.IDEAS_PLANE.replace("vh", "")) +
        parseInt(this.FOOTER_PLANE.replace("vh", ""))
      }vh`;
    },
  },
  // Mobile Heights
  MOBILE: {
    INTRODUCTION_PLANE: "500vh",
    EPR_PLANE: "600vh",
    ANIMATED_PLANE: "700vh",
    IDEAS_PLANE: "200vh",
    FOOTER_PLANE: "200vh",
    get CONTAINER() {
      return `${
        parseInt(this.INTRODUCTION_PLANE.replace("vh", "")) +
        parseInt(this.EPR_PLANE.replace("vh", "")) +
        parseInt(this.ANIMATED_PLANE.replace("vh", "")) +
        parseInt(this.IDEAS_PLANE.replace("vh", "")) +
        parseInt(this.FOOTER_PLANE.replace("vh", ""))
      }vh`;
    },
  },
};

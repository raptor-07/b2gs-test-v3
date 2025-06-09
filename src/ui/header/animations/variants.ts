import { Variants } from "framer-motion";

export const underlineMotion: Variants = {
  rest: { width: "0%" },
  hover: {
    width: "100%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const overlayVariants: Variants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 30,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
    },
  },
};

export const menuItemVariants: Variants = {
  initial: { x: 50, opacity: 0 },
  animate: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      damping: 25,
    },
  }),
};

export const menuButtonVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

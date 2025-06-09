import { Variants } from "framer-motion";

export const underlineMotion: Variants = {
  rest: { width: "0%" },
  hover: {
    width: "100%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const backdropVariants: Variants = {
  closed: {
    opacity: 0,
    transition: { 
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const overlayVariants: Variants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    }
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    }
  }
};

export const menuItemVariants: Variants = {
  initial: { 
    opacity: 0,
    x: 20,
    transition: { duration: 0.2 }
  },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.645, 0.045, 0.355, 1]
    }
  })
};

export const menuButtonVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

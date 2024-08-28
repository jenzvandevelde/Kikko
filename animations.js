// animations.js
export const contactPageAnimations = {
    contactInfoContainer: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    contactHeading: {
      initial: { scale: 0.9 },
      animate: { scale: 1 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    contactParagraph: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1, delay: 0.2 },
    },
    formContainer: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    formHeading: {
      initial: { x: -50 },
      animate: { x: 0 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    form: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1, delay: 0.4 },
    },
  };
  
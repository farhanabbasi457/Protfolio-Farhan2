import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      animate={inView ? { opacity: 1, y: 0 } : {}} // Fade in and move up
      transition={{ duration: 0.6 }} // Animation duration
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
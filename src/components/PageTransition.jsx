import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PageTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleTransition = () => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 700); // Duration of transition
    };

    window.addEventListener("beforeunload", handleTransition);

    return () => {
      window.removeEventListener("beforeunload", handleTransition);
    };
  }, []);

  return (
    <>
      {isTransitioning && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 z-50"
        />
      )}
      {children}
    </>
  );
};

export default PageTransition;

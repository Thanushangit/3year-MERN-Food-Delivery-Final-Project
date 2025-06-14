import { motion } from "framer-motion";

const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-lg shadow-md bg-white p-5"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;

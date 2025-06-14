import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <motion.div
      className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full mx-auto my-20"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  );
};

export default LoadingSpinner;

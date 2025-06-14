import { motion } from "framer-motion";

const AnimatedButton = ({ text, onClick, className = "" }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`px-5 py-3 rounded-lg bg-primary text-white font-semibold transition ${className}`}
        >
            {text}
        </motion.button>
    )
}

export default AnimatedButton
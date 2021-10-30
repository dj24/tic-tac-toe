import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.button
      className="w-full text-lg sm:w-auto px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white"
      {...props}
    />
  );
};

export default Button;

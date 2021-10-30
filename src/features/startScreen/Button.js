import { motion } from "framer-motion";

/**
 * Button component to highlight points of interaction.
 *
 * @example
 * ```jsx
 *
 * const Page = () => (
 *    <Button onClick={() => alert('hello world')}>Create Alert</Button>
 * );
 * ```
 *
 */
const Button = (props) => {
  return (
    <motion.button
      className="w-full text-lg sm:w-auto px-5 py-2 rounded-lg transition-colors bg-purple-500 hover:bg-purple-600 text-white"
      {...props}
    />
  );
};

export default Button;

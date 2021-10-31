import { motion } from "framer-motion";

const SCALE_DURATION = 0.075;
const LINE_STAGGER = 0.225;

/**
 * Animated SVG cross to be used as a player icon inside the grid.
 *
 * @example
 * ```jsx
 * <div className="cell">
 *   {cell === players.ZERO && <Zero />}
 *   {cell === players.CROSS && <Cross />}
 * </div>
 * ```
 *
 */
const Cross = () => {
  return (
    <motion.svg
      aria-label="cross-icon"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="show"
    >
      <motion.path
        style={{ originX: 0, originY: 1, strokeDasharray: 117 }}
        initial={{ strokeDashoffset: 116, scale: 0 }}
        animate={{
          strokeDashoffset: 0,
          scale: 1,
        }}
        transition={{
          strokeDashoffset: { delay: SCALE_DURATION },
          scale: {
            duration: SCALE_DURATION,
          },
        }}
        d="M8.5 91.5L91.6919 8.6429"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <motion.path
        style={{
          originX: 0,
          originY: 0,
          strokeDasharray: 117,
        }}
        initial={{ strokeDashoffset: 116, scale: 0 }}
        animate={{
          strokeDashoffset: 0,
          scale: 1,
        }}
        transition={{
          strokeDashoffset: { delay: LINE_STAGGER + SCALE_DURATION },
          scale: {
            delay: LINE_STAGGER,
            duration: SCALE_DURATION,
          },
        }}
        d="M8.5 8.5L91.5 91.5"
        strokeWidth="16"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default Cross;

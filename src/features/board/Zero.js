import { motion } from "framer-motion";

const Zero = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1:22)">
        <motion.circle
          style={{ strokeDasharray: 264, rotate: -90 }}
          initial={{ scale: 0, strokeDashoffset: 264 }}
          animate={{ scale: 1, strokeDashoffset: 0 }}
          transition={{
            scale: {
              duration: 0.075,
            },
            strokeDashoffset: {
              type: "spring",
              mass: 10,
              stiffness: 800,
              damping: 200,
              delay: 0.075,
            },
          }}
          cx="50"
          cy="49.9999"
          r="42"
          strokeWidth="16"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1:22">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Zero;
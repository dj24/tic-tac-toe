/**
 * Icon button for use inside the `Modal` component for closing.
 *
 * @example
 * ```jsx
 *
 * <header>
 *   <span>Modal Heading</span>
 *   <CloseButton onClick={closeHandler} />
 * </header>
 * ```
 *
 */
const CloseButton = (props) => {
  return (
    <button className="text-black hover:bg-gray-100 rounded-lg p-2" {...props}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="show"
        className="stroke-current w-4 h-4"
      >
        <path
          d="M8.5 91.5L91.6919 8.6429"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path d="M8.5 8.5L91.5 91.5" strokeWidth="16" strokeLinecap="round" />
      </svg>
    </button>
  );
};

export default CloseButton;

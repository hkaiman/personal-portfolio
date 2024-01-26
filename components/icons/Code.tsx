import { IconSvgProps } from "@/types";

const Code = ({ size, color, ...props }: IconSvgProps) => {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={(props?.width || 100) * (size || 1)}
      height={(props?.height || 89) * (size || 1)}
      {...props}
    >
      <path
        d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Code;

import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number } & SVGProps<SVGSVGElement>;

const ChevronUp: FunctionComponent<Props> = ({ size, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      width={size}
      height={size}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  );
};

export default ChevronUp;

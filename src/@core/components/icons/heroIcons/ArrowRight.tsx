import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const ArrowRight: FunctionComponent<Props> = ({ size, pathProps, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9697 0.993107C11.2626 0.700214 11.7374 0.700214 12.0303 0.993107L19.5303 8.49311C19.671 8.63376 19.75 8.82452 19.75 9.02344C19.75 9.22235 19.671 9.41312 19.5303 9.55377L12.0303 17.0538C11.7374 17.3467 11.2626 17.3467 10.9697 17.0538C10.6768 16.7609 10.6768 16.286 10.9697 15.9931L17.1893 9.77344H1C0.585786 9.77344 0.25 9.43765 0.25 9.02344C0.25 8.60922 0.585786 8.27344 1 8.27344H17.1893L10.9697 2.05377C10.6768 1.76087 10.6768 1.286 10.9697 0.993107Z"
        fill="#fff"
        {...pathProps}
      />
    </svg>
  );
};

export default ArrowRight;

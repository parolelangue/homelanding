import React, { CSSProperties, FunctionComponent, SVGProps } from 'react';

type Props = {
  color?: string;
  w?: number;
  h?: number;
} & SVGProps<SVGSVGElement>;

const ShareIcon: FunctionComponent<Props> = ({ ...props }) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.79351 5.79228C9.09285 5.93528 9.37338 6.13074 9.62132 6.37868C10.7929 7.55025 10.7929 9.44975 9.62132 10.6213L6.62132 13.6213C5.44975 14.7929 3.55025 14.7929 2.37868 13.6213C1.20711 12.4497 1.20711 10.5503 2.37868 9.37868L3.54999 8.20737M12.45 7.79263L13.6213 6.62132C14.7929 5.44975 14.7929 3.55025 13.6213 2.37868C12.4497 1.20711 10.5503 1.20711 9.37868 2.37868L6.37868 5.37868C5.20711 6.55025 5.20711 8.44975 6.37868 9.62132C6.62662 9.86926 6.90715 10.0647 7.20649 10.2077"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShareIcon;

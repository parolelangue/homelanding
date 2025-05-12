import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number } & SVGProps<SVGSVGElement>;

const Hospital: FunctionComponent<Props> = ({ size, ...props }) => {
  return (
    <svg
      width={size || 22}
      height={size || 23}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.001 5.08313C20.8294 5.08313 21.501 5.7547 21.501 6.58313V20.9161C21.501 21.7446 20.8294 22.4161 20.001 22.4161H17.918V5.08313H20.001Z"
        stroke="black"
      />
      <path
        d="M2.00098 5.08313C1.17255 5.08313 0.500977 5.7547 0.500977 6.58313V20.9161C0.500977 21.7446 1.17255 22.4161 2.00098 22.4161H4.08398V5.08313H2.00098Z"
        stroke="black"
      />
      <path
        d="M5.66797 0.5H16.335C17.1632 0.500177 17.835 1.17168 17.835 2V22.417H4.16797V2C4.16797 1.17157 4.83954 0.5 5.66797 0.5Z"
        stroke="black"
      />
      <path
        d="M8.33398 17H13.667C13.9431 17 14.167 17.2239 14.167 17.5V22.417H7.83398V17.5C7.83398 17.2239 8.05784 17 8.33398 17Z"
        stroke="black"
      />
      <path d="M9.16797 6.41687H12.8346" stroke="black" strokeLinecap="round" />
      <path d="M7.33398 12.8331H10.084" stroke="black" strokeLinecap="round" />
      <path d="M11.918 12.8331H14.668" stroke="black" strokeLinecap="round" />
      <path d="M11 4.58313L11 8.2498" stroke="black" strokeLinecap="round" />
    </svg>
  );
};

export default Hospital;

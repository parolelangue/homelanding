import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number } & SVGProps<SVGSVGElement>;

const Forwarding: FunctionComponent<Props> = ({ size, ...props }) => {
  return (
    <svg
      width={size || 24}
      height={size || 19}
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.16973 3.31547L5.05335 1L3.25243 2.05936M9.16973 3.31547V8.46095L4.79607 10.7764M9.16973 3.31547L7.11154 4.52617M4.79607 10.7764L0.679688 8.46095V3.57274M4.79607 10.7764V5.88821M0.679688 3.57274L4.79607 5.88821M0.679688 3.57274L3.25243 2.05936M4.79607 5.88821L7.11154 4.52617M3.25243 2.05936L7.11154 4.52617M7.11154 4.52617V6.66003M10.9707 6.40276C12.0855 6.317 14.3152 6.76294 14.3152 9.23277C14.3152 12.3201 11.7425 12.3201 11.2279 12.3201C10.8163 12.3201 8.14064 12.3201 6.85427 12.3201C5.91093 12.3201 4.02425 12.9375 4.02425 15.4073C4.02425 17.2083 5.73941 18.1516 6.59699 17.9801H16.888L17.0043 13.0919M17.0043 13.0919L17.1452 7.17458L23.3198 13.0919H17.0043Z"
        stroke="#141414"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Forwarding;

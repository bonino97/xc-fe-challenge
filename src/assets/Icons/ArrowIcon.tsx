import { SVGProps } from 'react';

const DownArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='-1 0 25 15'
      preserveAspectRatio='xMidYMid meet'
      {...props}
    >
      <path
        d='M23.265 3.1L12.703 14.044a1.338 1.338 0 01-1.94 0L.2 3.101a.73.73 0 010-1.005l.97-1.004a.668.668 0 01.969 0l9.107 9.435a.67.67 0 00.97 0l9.108-9.435a.668.668 0 01.97 0l.97 1.004a.73.73 0 010 1.005'
        stroke='inherit'
        fill='inherit'
        fillRule='evenodd'
      ></path>
    </svg>
  );
};

export default DownArrowIcon;

import { SVGProps } from 'react';

const DiskIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} viewBox='0 0 17 17'>
      <g stroke='currentColor' fill='none' fillRule='evenodd'>
        <path
          d='M16 8.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z'
          stroke='#36424A'
          strokeWidth='1.5'
        />
        <path
          d='M11 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z'
          stroke='#36424A'
          strokeWidth='1.5'
        />
        <path d='M9 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0' fill='#36424A' />
      </g>
    </svg>
  );
};

export default DiskIcon;

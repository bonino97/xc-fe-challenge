import { SVGProps } from 'react';

const SpotifyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g stroke='#FFF' strokeWidth='1.5' fill='none' fillRule='evenodd'>
        <path d='M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z' />
        <path d='M2.867 3.8c.752.349 1.792.933 5.145.933 3.355 0 4.237-.566 5.121-.933M13.133 12.2c-.74-.332-1.845-.933-5.149-.933-3.304 0-4.246.569-5.117.918' />
        <path d='M10.893 8c0 3.866-1.253 7-2.8 7-1.546 0-2.8-3.134-2.8-7s1.254-7 2.8-7c1.547 0 2.8 3.134 2.8 7zM1 8h14' />
      </g>
    </svg>
  );
};

export default SpotifyIcon;

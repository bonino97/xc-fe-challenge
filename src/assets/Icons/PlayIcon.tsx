import { SVGProps } from 'react';

const PlayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width='23'
      height='23'
      viewBox='0 0 18 23'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.943 20.857A.942.942 0 0 1 2 19.914V2.944a.943.943 0 0 1 1.453-.794l13.2 8.486a.943.943 0 0 1 0 1.587l-13.2 8.484a.943.943 0 0 1-.51.15z'
        stroke='white'
        strokeWidth='3'
        fill='white'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default PlayIcon;

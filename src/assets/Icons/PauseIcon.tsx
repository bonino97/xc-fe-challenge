import { SVGProps } from 'react';

const PauseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width='23'
      height='23'
      viewBox='0 0 18 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='2' y='2' width='5' height='19' rx='2' fill='white' />
      <rect x='11' y='2' width='5' height='19' rx='2' fill='white' />
    </svg>
  );
};

export default PauseIcon;

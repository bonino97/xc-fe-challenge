import { SVGProps } from 'react';

interface PencilIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const PencilIcon = ({ color = '#FFF', ...props }: PencilIconProps) => {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g stroke={color} strokeWidth='2' fill='none' fillRule='evenodd'>
        <path d='M5.422 12.689 2 14l1.311-3.422 6.075-6.074 2.11 2.11zM13.412 4.698l-2.11-2.11 1.15-1.151a1.492 1.492 0 1 1 2.11 2.11l-1.15 1.151z' />
      </g>
    </svg>
  );
};

export default PencilIcon;

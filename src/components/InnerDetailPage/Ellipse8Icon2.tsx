import { memo, SVGProps } from 'react';

const Ellipse8Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={2.5} cy={2.5} r={2.5} fill='#3C3C3C' />
  </svg>
);
const Memo = memo(Ellipse8Icon2);
export { Memo as Ellipse8Icon2 };

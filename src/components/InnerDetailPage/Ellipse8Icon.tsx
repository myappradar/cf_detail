import { memo, SVGProps } from 'react';

const Ellipse8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 112 112' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={56} cy={56} r={56} fill='white' fillOpacity={0.5} />
  </svg>
);
const Memo = memo(Ellipse8Icon);
export { Memo as Ellipse8Icon };

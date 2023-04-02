import { memo, SVGProps } from 'react';

const Star4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z'
      fill='#3C3C3C'
    />
  </svg>
);
const Memo = memo(Star4Icon);
export { Memo as Star4Icon };
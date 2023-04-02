import { memo, SVGProps } from 'react';

const Star1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.5245 1.46352C19.6741 1.00287 20.3259 1.00287 20.4755 1.46353L24.378 13.4742C24.445 13.6802 24.6369 13.8197 24.8536 13.8197H37.4823C37.9667 13.8197 38.168 14.4395 37.7762 14.7242L27.5593 22.1472C27.3841 22.2745 27.3107 22.5002 27.3777 22.7062L31.2802 34.7168C31.4299 35.1775 30.9026 35.5605 30.5108 35.2758L20.2939 27.8528C20.1186 27.7255 19.8814 27.7255 19.7061 27.8528L9.48924 35.2758C9.09739 35.5605 8.57015 35.1775 8.71982 34.7168L12.6223 22.7062C12.6893 22.5002 12.6159 22.2745 12.4407 22.1472L2.22382 14.7242C1.83196 14.4395 2.03335 13.8197 2.51771 13.8197H15.1464C15.3631 13.8197 15.555 13.6802 15.622 13.4742L19.5245 1.46352Z'
      stroke='#3C3C3C'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Star1Icon);
export { Memo as Star1Icon };
import { colors } from '@variant/profile/lib';
import { AllColorNames, allColors } from '@variant/profile/lib/colors';

type ArrowProps = { className?: string; color?: keyof AllColorNames };

export default function Arrow({ className, color }: ArrowProps) {
  const stroke = color ? allColors[color] : colors.allColors.standard__white;
  return (
    <svg
      width="157"
      height="48"
      viewBox="0 0 157 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.27573 24.2977C5.27573 24.2977 20.6786 9.43944 33.8571 8.80884C47.0357 8.17824 68.8066 22.5388 68.8066 22.5388C68.8066 22.5388 92.7033 39.7787 105.882 39.1481C119.06 38.5175 140.259 17.8386 140.259 17.8386"
        stroke={stroke}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M123.386 8.77405L146.264 18.5305L143.3 43.218"
        stroke={stroke}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

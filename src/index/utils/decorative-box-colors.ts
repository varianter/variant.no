import { AllColorNames } from '@variant/profile/lib/colors';

type colorName = keyof AllColorNames;
export const decorativeBoxColorPairs: colorName[][] = [
  ['secondary3', 'secondary1__tint4'],
  ['secondary2__tint4', 'secondary3__tint1'],
  ['primary__tint3', 'secondary2__tint4'],
];

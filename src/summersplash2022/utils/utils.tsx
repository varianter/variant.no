import { NextRouter } from 'next/router';

export interface JobOrInternship {
  selected: 'internship' | 'job';
}

export interface WhichButtonPressed {
  selectedButton: string;
}

export const rqdp = (router: NextRouter) => {
  return router.query.dynamicPath;
};

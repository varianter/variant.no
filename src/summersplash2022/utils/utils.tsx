import { NextRouter } from 'next/router';

export interface JobOrInternship {
  selected: 'internship' | 'job';
}

export interface WhichButtonPressed {
  selectedButton: string;
}

export const routerQueryDynamicPath = (router: NextRouter) => {
  return router.query.sommersplash;
};

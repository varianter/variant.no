import { NextRouter } from 'next/router';

export interface JobOrInternship {
  selected: 'internship' | 'job';
}

export interface WhichButtonPressed {
  selectedButton:
    | 'values'
    | 'responsibility'
    | 'flex'
    | 'christmas'
    | 'competance';
}

export const rqdp = (router: NextRouter) => {
  return router.query.dynamicPath;
};

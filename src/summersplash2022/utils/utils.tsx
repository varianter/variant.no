import Router, { NextRouter, useRouter } from "next/router";

export interface JobOrInternship {
  selected: 'internship' | 'job';
}

export const rqdp = (router: NextRouter) => {
  return router.query.dynamicPath
}
import React from 'react';
import { ButtonNextLink } from 'src/components/button';
import { and } from 'src/utils/css';
import style from './index.module.css';

export type JobItem = {
  name: string;
  title: string;
  location: string;
};
export type JobListingItemProps = {
  item: JobItem;
};
export default function JobListingItem({ item }: JobListingItemProps) {
  return (
    <section className={style.job__listing__container}>
      <div>
        <h3 className={and(style.job__title, 'fancy')}>{item.title}</h3>
        <span>{item.location}</span>
      </div>
      <ButtonNextLink href={`/jobs/${item.name}`}>
        Se på stillingen
      </ButtonNextLink>
    </section>
  );
}

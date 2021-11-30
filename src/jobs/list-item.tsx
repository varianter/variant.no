import React from 'react';
import { ButtonNextLink } from 'src/components/button';
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
        <h4>{item.title}</h4>
        <span>{item.location}</span>
      </div>
      <ButtonNextLink href={`/jobs/${item.name}`}>
        Se på stillingen
      </ButtonNextLink>
    </section>
  );
}

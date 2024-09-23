import React from 'react';
import { ButtonNextLink } from 'src/components/button';
import { and } from 'src/utils/css';
import style from './index.module.css';

export type JobItem = {
  name: string;
  title: string;
  location: string;
  locations: Array<Location>;
};

export type Location = {
  city: string;
  state: string;
  country: string;
  street: string;
};
export type JobListingItemProps = {
  item: JobItem;
};
export default function JobListingItem({ item }: JobListingItemProps) {
  return (
    <section className={style.job__listing__container}>
      <div>
        <h3 className={and(style.job__title, 'fancy')}>{item.title}</h3>
        <span>
          {item.locations
            .map((location) => {
              return location.city;
            })
            .join(', ')}
        </span>
      </div>
      <ButtonNextLink
        href={`/jobs/${item.name}`}
        aria-label={`Se på stillingen ${item.title} ${item.location}`}
      >
        Se på stillingen
      </ButtonNextLink>
    </section>
  );
}

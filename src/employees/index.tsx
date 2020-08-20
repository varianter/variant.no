import React, { CSSProperties } from 'react';
import Layout from 'src/layout';
import { and } from 'src/utils/css';

import { BaseBlob } from '@variant/components/lib/blob';
import { colors } from '@variant/profile/lib';

import employeeList from './employees.json';
import style from './employees.module.css';

export type Employee = {
  fullName: string;
  name: string;
  phone: string;
  imageSlug: string;
};

export default function Employees() {
  const indexToInsertLink = Math.floor((employeeList.length / 3) * 2);

  return (
    <Layout fullWidth>
      <div className={style.employeesContainer}>
        <header>
          <h3 className={and(style.employees__header, "fancy")}>
            Vi i Variant
          </h3>
          <p className={style.employees__text}>
            Vi har i Variant en god gjeng erfarne og dyktige mennesker. Dette er
            faglige fyrtårn i byen og personer som virkelig ønsker å lære bort
            alt de kan til sine kollegaer.
          </p>
        </header>

        <div className={style.employees__layout}>
          {employeeList.map((employee, index) => {
            if (index === indexToInsertLink) {
              return (
                <React.Fragment key={`${employee.name}-${index}`}>
                  <JobsLink text="Er kanskje du en Variant på lur?" />
                  <EmployeeTile employee={employee} />
                </React.Fragment>
              );
            }

            return (
              <EmployeeTile
                key={`${employee.fullName}-${index}`}
                employee={employee}
              />
            );
          })}

          <JobsLink text="Se våre stillinger her" />
        </div>
      </div>
    </Layout>
  );
}

const EmployeeTile: React.FC<{ employee: Employee }> = ({
  employee: { fullName, name, phone, imageSlug },
}) => {
  return (
    <div
      className={style.employee}
      style={{ "--randomOffset": getRandomOffset() } as CSSProperties}
    >
      <BaseBlob
        width={300}
        height={300}
        seed={name}
        imageProps={{
          srcSet: `/employees/${imageSlug}-150.jpg 150w,
                   /employees/${imageSlug}-300.jpg 300w`,
          sizes: "(max-width: 600px) 150px, 300px",
          src: `/employees/${imageSlug}-300.jpg`,
          alt: `Bilde av ${name}`,
          loading: "lazy",
        }}
        randomness={2}
        extraPoints={9}
      />

      <h4 className={and(style.employee__name, "fancy")}>{fullName}</h4>
      <a href={`tel:+47${phone}`} className={style.employee__phone}>
        📞 {phone}
      </a>
    </div>
  );
};

function JobsLink({ text }: { text: string }) {
  return (
    <div
      className={style.employee__jobsLinkContainer}
      style={{ "--randomOffset": getRandomOffset() } as CSSProperties}
    >
      <a
        href="https://jobs.variant.no"
        rel="noopener"
        className={style.employee__jobsLink}
      >
        <BaseBlob
          width={300}
          height={300}
          randomness={2}
          extraPoints={6}
          color={colors.colorPairs.secondary1.default.bg}
        />
        <p>{text}</p>
        <Arrow className={style.employee__jobsLinkArrow} />
      </a>
    </div>
  );
}

const Arrow: React.FC<{ className?: string }> = ({ className = "" }) => {
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
        stroke={colors.allColors.standard__white}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M123.386 8.77405L146.264 18.5305L143.3 43.218"
        stroke={colors.allColors.standard__white}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

function getRandomOffset() {
  const max = 0.8;
  const min = 0.2;

  return Math.random() * (max - min) + min;
}

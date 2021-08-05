import React, { CSSProperties, useEffect, useState } from 'react';
import Layout from 'src/layout';
import { and } from 'src/utils/css';

import { BaseBlob } from '@variant/components/lib/blob';
import { colors } from '@variant/profile/lib';

import style from './employees.module.css';
import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/ansatte';
import { EmployeeJSON } from 'src/utils/typings/Employee';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export type Employee = {
  fullName: string;
  name: string;
  phone: string;
  email: string;
  imageSlug: string;
  officeName: string;
};

export default function Employees({
  employeeList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [shuffledEmployeeList, setShuffledEmployeeList] = useState(
    employeeList,
  );

  useEffect(() => {
    setShuffledEmployeeList(shuffleArray(employeeList));
  }, [employeeList]);

  const indexToInsertLink = Math.floor((employeeList.length / 3) * 2);

  return (
    <Layout fullWidth title="Alle varianter – Variant">
      <Head>
        <meta
          property="og:description"
          content="Oversikt over alle ansatte i Variant. Her finner du alle varianter og hvordan du kan ta kontakt for spørsmål."
        />
        <meta
          name="description"
          content="Oversikt over alle ansatte i Variant. Her finner du alle varianter og hvordan du kan ta kontakt for spørsmål."
        />
      </Head>

      <div className={style.employeesContainer}>
        <header>
          <h3 className={and(style.employees__header, 'fancy')}>
            Vi i Variant
          </h3>
          <p className={style.employees__text}>
            Vi har i Variant en god gjeng erfarne og dyktige mennesker. Dette er
            faglige fyrtårn i byen og personer som virkelig ønsker å lære bort
            alt de kan til sine kollegaer.
          </p>
        </header>

        <div className={style.employees__layout}>
          {shuffledEmployeeList.map((employee: Employee, index: number) => {
            if (index === indexToInsertLink) {
              return (
                <React.Fragment key={`${employee.name}-${index}`}>
                  <JobsLink text="Er du kanskje en aspirerende Variant?" />
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

          <JobsLink text="Se alle våre stillinger her" />
        </div>
      </div>
    </Layout>
  );
}

const EmployeeTile: React.FC<{ employee: Employee }> = ({
  employee: { fullName, name, phone, imageSlug, officeName },
}) => {
  return (
    <div
      className={style.employee}
      style={{ '--randomOffset': getRandomOffset() } as CSSProperties}
    >
      <Image
        width={300}
        height={300}
        alt={`Bilde av ${name}`}
        src={`/employees/${imageSlug}.png`}
        loading="lazy"
      />
      <h4 className={and(style.employee__name, 'fancy')}>{fullName}</h4>
      <div className={style.employee__office}>
        {officeName}
      </div>
      <a
        href={`tel:+47${phone.replace(/\s*/g, '')}`}
        className={style.employee__phone}
      >
        📞 {phone}
      </a>
    </div>
  );
};

function JobsLink({ text }: { text: string }) {
  return (
    <div
      className={style.employee__jobsLinkContainer}
      style={{ '--randomOffset': getRandomOffset() } as CSSProperties}
    >
      <Link href="/jobs">
        <a className={style.employee__jobsLink}>
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
      </Link>
    </div>
  );
}

const Arrow: React.FC<{ className?: string }> = ({ className = '' }) => {
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

/**
 * Returns a random number clamped between the max and min.
 */
function getRandomOffset() {
  const max = 0.8;
  const min = 0.2;

  return Math.random() * (max - min) + min;
}

/**
 * Shuffle function taken from here: https://javascript.info/task/shuffle
 * @param array
 */
function shuffleArray(array: Employee[]) {
  const tempArray = array.slice();

  for (let i = tempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
  }

  return tempArray;
}

export const massageEmployee = (
  employee: EmployeeJSON,
): Omit<Employee, 'imageSlug'> => {
  return {
    fullName: employee.name,
    name: employee.name.split(' ')[0],
    email: employee.email,
    phone: (employee.telephone.startsWith('+47')
      ? employee.telephone.slice(3)
      : employee.telephone
    )
      .replace(/\s/g, '')
      .replace(/(\d{3})(\d{2})/g, '$1 $2 '),
    officeName: employee.office_name,
  };
};

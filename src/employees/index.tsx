import PageTitle from '@components/page-title';
import { BaseBlob } from '@variant/components/lib/blob';
import { colors } from '@variant/profile/lib';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getStaticProps } from 'pages/ansatte';
import React, { CSSProperties, useEffect, useState } from 'react';
import Arrow from 'src/components/arrow';
import Layout from 'src/layout';
import { Office, OfficeSelector } from 'src/office-selector';
import { and } from 'src/utils/css';
import style from './employees.module.css';
import { EmployeeItem } from './types';

const getSoMeMetadata = (officeName?: Office) => {
  let description;
  switch (officeName) {
    case 'oslo':
      description =
        'Oversikt over alle ansatte i Variant Oslo. Her finner du alle varianter i Oslo og hvordan du kan ta kontakt for spørsmål.';
      break;
    case 'trondheim':
      description =
        'Oversikt over alle ansatte i Variant Trondheim. Her finner du alle varianter i Trondheim og hvordan du kan ta kontakt for spørsmål.';
      break;
    case 'bergen':
      description =
        'Oversikt over alle ansatte i Variant Bergen. Her finner du alle varianter i Bergen og hvordan du kan ta kontakt for spørsmål.';
      break;
    default:
      description =
        'Oversikt over alle ansatte i Variant. Her finner du alle varianter og hvordan du kan ta kontakt for spørsmål.';
  }

  return (
    <Head>
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
    </Head>
  );
};

const getTitle = (officeName?: Office) => {
  let title;
  switch (officeName) {
    case 'oslo':
      title = 'Varianter i Oslo';
      break;
    case 'trondheim':
      title = 'Varianter i Trondheim';
      break;
    case 'bergen':
      title = 'Varianter i Bergen';
      break;
    default:
      title = 'Alle varianter';
  }

  return title;
};

export default function Employees({
  employeeList,
  officeName,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [shuffledEmployeeList, setShuffledEmployeeList] =
    useState(employeeList);

  useEffect(() => {
    setShuffledEmployeeList(shuffleArray(employeeList));
  }, [employeeList]);

  const indexToInsertLink = Math.floor((employeeList.length / 3) * 2);

  return (
    <Layout fullWidth title="Alle varianter – Variant">
      {getSoMeMetadata(officeName)}

      <div className={style.employeesContainer}>
        <header className={style.employees__header}>
          <PageTitle title={getTitle(officeName)} />
          <p className={style.employees__text}>
            Vi har i Variant en god gjeng erfarne og dyktige mennesker. Dette er
            faglige fyrtårn i byen og personer som virkelig ønsker å lære bort
            alt de kan til sine kollegaer.
          </p>
        </header>

        <OfficeSelector
          currentOffice={officeName}
          defaultLink="/ansatte"
          officeMap={{
            Alle: '/ansatte',
            Bergen: '/ansatte/bergen',
            Oslo: '/ansatte/oslo',
            Trondheim: '/ansatte/trondheim',
          }}
        />

        <div className={style.employees__layout}>
          {shuffledEmployeeList.map((employee: EmployeeItem, index: number) => {
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

export const EmployeeTile: React.FC<{ employee: EmployeeItem }> = ({
  employee: { fullName, name, telephone, email, imageUrl, officeName },
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
        src={imageUrl}
        loading="lazy"
      />
      <h2 className={and(style.employee__name, 'fancy')}>{fullName}</h2>
      <div className={style.employee__office}>{officeName}</div>
      {telephone ? (
        <a
          href={`tel:+47${telephone.replace(/\s*/g, '')}`}
          className={style.employee__phone}
        >
          📞 {telephone}
        </a>
      ) : (
        <a href={`mailto:${email}`} className={style.employee__phone}>
          📧 {email}
        </a>
      )}
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
function shuffleArray(array: EmployeeItem[]) {
  const tempArray = array.slice();

  for (let i = tempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
  }

  return tempArray;
}

import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from 'src/layout';
import 'src/advanced-calculator/calculator.module.css';
import Calculator from 'src/advanced-calculator';
import { Degree, SalaryCalculatorProps } from 'src/advanced-calculator/config';

const SalaryCalculator: NextPage<SalaryCalculatorProps> = ({
  year,
  degree,
}) => {
  return (
    <Layout fullWidth zenMode>
      <Head>
        <meta
          property="og:description"
          content="Variants åpne lønnskalkulator. Her kan du se lønnsnivået vi har og se hvilken lønn du kan få hos oss basert på din utdanning og utdanningsår."
        />
        <meta
          name="description"
          content="Variants åpne lønnskalkulator. Her kan du se lønnsnivået vi har og se hvilken lønn du kan få hos oss basert på din utdanning og utdanningsår."
        />
        <meta
          property="og:url"
          content="https://www.variant.no/kalkulator"
          key="og:url"
        />
        <meta
          property="og:image"
          content="https://www.variant.no/images/pay.jpg"
          key="og:image"
        />
      </Head>

      <div>
        <Calculator year={year} degree={degree} />
      </div>
    </Layout>
  );
};

SalaryCalculator.getInitialProps = (ctx) => {
  return {
    year: parseInt((ctx.query.year as string) ?? '2015'),
    degree: (ctx.query.degree as Degree) ?? 'bachelor',
    addition: parseInt((ctx.query.addition as string) ?? '0'),
  };
};

export default SalaryCalculator;

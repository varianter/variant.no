import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Calculator } from 'src/advanced-calculator';
import Layout from 'src/layout';
import 'src/advanced-calculator/calculator.module.css';

const SalaryCalculator: NextPage<{}> = ({}) => {
  return (
    <Layout>
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
        <Calculator />
      </div>
    </Layout>
  );
};

export default SalaryCalculator;

import { GetStaticPaths, GetStaticProps} from 'next';
import { fetchCv } from 'src/employees/cv/utils/requestCv';
import { EmployeeCv } from 'src/employees/cv/utils/types';
import {EmployeeItem} from "../../../src/employees/types";
import {requestEmployees} from "../../../src/employees/utils/request";

export {default} from 'src/employees/cv';

export const getStaticPaths: GetStaticPaths = async () => {
  const employees = await requestEmployees() ?? [];
  const emails = employees.map(employee => employee.email.toLocaleLowerCase());
  return {
    paths: emails.map(email => ({params: {email}})),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
    employee: EmployeeItem,
    cv: EmployeeCv,
}> = async (context) => {
    const employeeEmail = context.params?.email as string;
    const employee = await fetchEmployee(employeeEmail);
    const cv = await fetchCv(employee.email);
    return {
        props: {employee, cv},
    }
};

export const fetchEmployee = async (employeeEmail: string) => {
    const employees = await requestEmployees() ?? [];
    return employees.find(employee => employee.email.toLocaleLowerCase() === employeeEmail) as EmployeeItem;
}
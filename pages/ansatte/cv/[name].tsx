import {GetServerSideProps} from 'next';
import { fetchCv } from 'src/employees/cv/utils/requestCvs';
import { EmployeeCv } from 'src/employees/cv/utils/types';
import { getStaticPropsEmployees } from 'src/employees/utils/getStaticProps';
import {EmployeeItem} from "../../../src/employees/types";

export {default} from 'src/employees/cv';


export const getServerSideProps: GetServerSideProps<{
    employee: EmployeeItem,
    cv: EmployeeCv,
}> = async (context) => {
    const employeeName = context.params?.name as string;
    const employee = await fetchEmployee(employeeName);
    const cv = await fetchCv(employee.userId, employee.defaultCvId);
    return {
        props: {employee, cv},
    }
};

export const fetchEmployee = async (employeeName: string) => {
    const {props: {employeeList}} = await getStaticPropsEmployees();
    const employee = employeeList.find(e => e.fullName.toLocaleLowerCase() === employeeName) as EmployeeItem;
    return employee;
}
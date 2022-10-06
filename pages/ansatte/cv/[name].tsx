import {GetStaticPaths, GetStaticProps} from 'next';
import {getStaticPropsEmployees} from 'src/employees/utils/getStaticProps';
import {EmployeeItem} from "../../../src/employees/types";

export {default} from 'src/employees/cv';


export const getStaticPaths: GetStaticPaths = async () => {
    const {props: {employeeList}} = await getStaticPropsEmployees();
    const employeeNames = employeeList.map(employee => employee.fullName.toLocaleLowerCase());
    return {
        paths: employeeNames.map(name => ({params: {name}})),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<{
    employee: EmployeeItem,
}> = async (context) => {
    const employeeName = context.params?.name;
    const {props: {employeeList}} = await getStaticPropsEmployees();
    const employee = employeeList.find(e => e.fullName.toLocaleLowerCase() === employeeName) as EmployeeItem;
    return {
        props: {employee},
    }
};
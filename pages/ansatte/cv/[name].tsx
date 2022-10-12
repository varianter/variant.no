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
    cv: EmployeeCv,
}> = async (context) => {
    const employeeName = context.params?.name as string;
    const employee = await fetchEmployee(employeeName);
    const cv = await fetchCv(employee.userId, employee.defaultCvId);
    return {
        props: {employee, cv},
    }
};

const fetchEmployee = async (employeeName: string) => {
    const {props: {employeeList}} = await getStaticPropsEmployees();
    const employee = employeeList.find(e => e.fullName.toLocaleLowerCase() === employeeName) as EmployeeItem;
    return employee;
}

const fetchCv = async (userId: string, cvId: string): Promise<EmployeeCv> => {
    const url = 'https://variant.cvpartner.com/api/v3/cvs';
    const endpoint = [url, userId, cvId].join('/');

    return fetch(endpoint, {
        method: 'GET',
        headers: {'Authorization': 'Token token=' + process.env.CV_PARTNER_API_SECRET}  // TODO Handle when key is missing
    })
        .then(response => response.json())
        .then(convertToCv);
}

type EmployeeCvJson = {
    name: string,
    title: {
        no: string
    },
    email: string,
    image: {
        thumb: {
            url: string,
        }
    },
    key_qualifications: [
        {
            disabled: boolean,
            long_description: {
                no: string,
            }
        }
    ],
    technologies: [
        {
            order: number,
            disabled: boolean,
            category: {
                no: string,
            }
            technology_skills: [
                {
                    order: number,
                    tags: {
                        no: string,
                    }
                }
            ]
        }
    ],
    project_experiences: [
        {
            order: number,
            disabled: boolean,
            starred: boolean,
            customer: {
                no: string,
            },
            description: {
                no: string,
            },
            month_from: string,
            month_to: string,
            year_from: string,
            year_to: string,
            roles: [
                {
                    name: {
                        no: string,
                    }
                }
            ]

        }
    ],
    blogs: [
        {
            order: number,
            disabled: boolean,
            name: {
                no: string,
            },
            long_description: {
                no: string,
            },
            url: string,
        },
    ],
}

export type Qualification = {
    name: string,
}

export type Qualifications = {
    name: string,
    tags: Qualification[],
}

export type Project = {
    starred: boolean,
    customerName: string,
    description: string,
    month_from: string,
    month_to: string,
    year_from: string,
    year_to: string,
    roles: string[],
}

export type Publication = {
    name: string,
    description: string,
    url: string,
}

export type EmployeeCv = {
    name: string,
    title: string,
    email: string,
    imageUrl: string,
    summary: string,
    qualifications: Qualifications[],
    projects: Project[],
    publications: Publication[],
}


const convertToCv = (cvJson: EmployeeCvJson): EmployeeCv => {
    return {
        name: cvJson.name,
        title: cvJson.title.no,
        email: cvJson.email,
        imageUrl: cvJson.image.thumb.url,
        summary: parseSummary(),
        qualifications: parseTechnologies(cvJson),
        projects: parseProjects(cvJson),
        publications: parsePublications(cvJson),
    };
}

const parseSummary = (): string => {
    return "Hva er dette, og hvordan fungerer den? " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

const parseTechnologies = (cvJson: EmployeeCvJson): Qualifications[] => {
    return cvJson.technologies
      .filter((technology) => !technology.disabled) // Ignore disabled categories
      .filter((technology) => !!technology.category.no) // Ignore categories with no name
      .filter((technology) => technology.technology_skills.length > 0) // Ignore categories without entries
      .sort(sortByOrder)
      .map((technology) => ({
        name: technology.category.no,
        tags: technology.technology_skills.sort(sortByOrder).map((skill) => ({
          name: skill.tags.no,
        })),
      }));
}

const parseProjects = (cvJson: EmployeeCvJson): Project[] => {
    return cvJson.project_experiences
        .filter(project => !project.disabled)       // Ignore disabled projects
        .filter(project => !!project.customer.no)   // Ignore projects without customer name
        .sort(sortByOrder)
        .map(project => ({
            starred: project.starred,
            customerName: project.customer.no,
            description: project.description.no,
            month_from: project.month_from,
            month_to: project.month_to,
            year_from: project.year_from,
            year_to: project.year_to,
            roles: project.roles
                .filter(role => !!role.name)
                .map(role => role.name.no),
        }))
}

const parsePublications = (cvJson: EmployeeCvJson): Publication[] => {
    return cvJson.blogs
        .filter(blog => !blog.disabled)
        .filter(blog => !!blog.name.no)
        .sort(sortByOrder)
        .map(blog => ({
            name: blog.name.no,
            description: blog.long_description.no,
            url: blog.url,
        }));
}

const sortByOrder = <T extends {order: number}> (a: T, b: T) => (a.order > b.order) ? 1 : -1; 
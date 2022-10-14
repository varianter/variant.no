
import { EmployeeCv, Project, Publication, Qualifications } from './types';

type EmployeeCvJson = {
    name: string,
    title: {
        no?: string
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
                no?: string,
            }
        }
    ],
    technologies: [
        {
            order: number,
            disabled: boolean,
            category: {
                no?: string,
            }
            technology_skills: [
                {
                    order: number,
                    tags: {
                        no?: string,
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
                no?: string,
            },
            description: {
                no?: string,
            },
            month_from: string,
            month_to: string,
            year_from: string,
            year_to: string,
            roles: [
                {
                    name: {
                        no?: string,
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
                no?: string,
            },
            long_description: {
                no?: string,
            },
            url: string,
        },
    ],
}


export const fetchCv = async (userId: string, cvId: string): Promise<EmployeeCv> => {
    const url = 'https://variant.cvpartner.com/api/v3/cvs';
    const endpoint = [url, userId, cvId].join('/');

    return fetch(endpoint, {
        method: 'GET',
        headers: {'Authorization': 'Token token=' + process.env.CV_PARTNER_API_SECRET}  // TODO Handle when key is missing
    })
        .then(response => response.json())
        .then(convertToCv);
}

const convertToCv = (cvJson: EmployeeCvJson): EmployeeCv => {
    return {
        name: cvJson.name,
        title: cvJson.title?.no ?? '',
        email: cvJson.email,
        imageUrl: cvJson.image?.thumb?.url ?? '',
        summary: parseSummary(cvJson),
        qualifications: parseTechnologies(cvJson),
        projects: parseProjects(cvJson),
        publications: parsePublications(cvJson),
    };
}

const parseSummary = (cvJson: EmployeeCvJson): string => {
    if(!cvJson.key_qualifications) return "";
    return cvJson.key_qualifications
        .filter(summary => !summary.disabled)
        .map(summary => summary.long_description?.no ?? "")
        .join("\n\n")
}

const parseTechnologies = (cvJson: EmployeeCvJson): Qualifications[] => {
    if(!cvJson.technologies) return [];
    return cvJson.technologies
      .filter((technology) => !technology.disabled) // Ignore disabled categories
      .filter((technology) => !!technology.category.no) // Ignore categories with no name
      .filter((technology) => technology.technology_skills.length > 0) // Ignore categories without entries
      .sort(sortByOrder)
      .map((technology) => ({
        name: technology.category?.no ?? '',
        tags: technology.technology_skills.sort(sortByOrder).map((skill) => ({
          name: skill.tags?.no ?? '',
        })),
      }));
}

const parseProjects = (cvJson: EmployeeCvJson): Project[] => {
    if(!cvJson.project_experiences) return [];
    return cvJson.project_experiences
        .filter(project => !project.disabled)       // Ignore disabled projects
        .filter(project => !!project.customer?.no ?? '')   // Ignore projects without customer name
        .sort(sortByOrder)
        .map(project => ({
            starred: project.starred,
            customerName: project.customer?.no ?? '',
            description: project.description?.no ?? '',
            month_from: getMonthName(project.month_from),
            month_to: getMonthName(project.month_to),
            year_from: project.year_from,
            year_to: project.year_to,
            roles: project.roles
                .filter(role => !!role.name)
                .map(role => role.name?.no ?? ''),
        }))
}

const monthNames = ["januar", "februar", "mars", "april", "mai", "juni",
  "juli", "august", "september", "oktober", "november", "desember"
];

const getMonthName = (monthNumber: string): string => {
    const index = parseInt(monthNumber);
    return index ? monthNames[index-1] : "";
}

const parsePublications = (cvJson: EmployeeCvJson): Publication[] => {
    if(!cvJson.blogs) return [];
    return cvJson.blogs
        .filter(blog => !blog.disabled)
        .filter(blog => !!blog.name.no)
        .sort(sortByOrder)
        .map(blog => ({
            name: blog.name?.no ?? '',
            description: blog.long_description?.no ?? '',
            url: blog.url,
        }));
}

const sortByOrder = <T extends {order: number}> (a: T, b: T) => (a.order > b.order) ? 1 : -1; 
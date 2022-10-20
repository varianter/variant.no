export type Qualifications = {
    name: string,
    tags: string[],
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
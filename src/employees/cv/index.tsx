import {InferGetStaticPropsType} from 'next';
import Image from 'next/image';
import {Qualifications as Qualification, EmployeeCv, getStaticProps, Project, Qualifications, Publication} from 'pages/ansatte/cv/[name]';
import {EmployeeItem} from '../types';
import styles from './cv.module.css';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const CV = ({employee, cv}: Props) => {
    return (
        <article className={styles.cv}>
            <Personalia employee={employee} cv={cv}/>
            <section className={styles.details}>
                <Qualifications qualifications={cv.qualifications}/>
                <Projects projects={cv.projects}/>
                <Publications publications={cv.publications}/> 
            </section>
        </article>
    );
};

type PersonaliaProps = {
    employee: EmployeeItem;
    cv: EmployeeCv;
}

const Personalia = ({ employee, cv }: PersonaliaProps) => {
  return (
    <section className={styles.personalia}>
      <Image
        height={300}
        width={300}
        alt={`Bilde av ${employee.fullName}`}
        src={employee.imageUrl}
        loading="lazy"
      />
      <h2>{employee.fullName}</h2>
      <p>
        {cv.title} i {employee.officeName}
      </p>
      <a className={styles.personalia__email} href={`mailto:${employee.email}`}>📧 {employee.email}</a>
      <p>{cv.summary}</p>
    </section>
  );
};

type QualificationsProps = {
    qualifications: Qualifications[];
}

const Qualifications = ({qualifications}: QualificationsProps) => {
    if(qualifications.length === 0) return <></>

    return (
        <section className={styles.qualifications}>
            <h3>Nøkkelkompetanse</h3>
            {qualifications.map(qualification => 
                <Qualification key={qualification.name} qualfication={qualification}/>
            )}
        </section>
    );
}

type QualificationProps = {
    qualfication: Qualification,
}

const Qualification = ({qualfication: qualfication}: QualificationProps) => {
    const tags = qualfication.tags.map(tag => 
        <div className={styles.qualification__tag} key={tag.name}>{tag.name}</div>
    );

    return (
      <section className={styles.qualification}>
        <h5>{qualfication.name}</h5>
        <div className={styles.qualification__tags}>
            {tags}
        </div>
      </section>
    );
}

type ProjectsProps = {
    projects: Project[],
}

const Projects = ({projects}: ProjectsProps) => {
    if(projects.length === 0) return <></>;

    return (
        <section className={styles.projects}>
            <h3>Utvalgte oppdrag</h3>
            {projects.map(project => 
                <Project key={project.description} project={project}/>
            )}
        </section>
    );
}


type ProjectProps = {
    project: Project,
}

const Project = ({project}: ProjectProps) => {
    const period = `${project.month_from}.${project.year_from} - ${project.month_to}.${project.year_to}`;
    const roles = project.roles.map(role => <div className={styles.project__role} key={role}>{role}</div>)
    return (
        <section className={styles.project}>
            <h5>{project.customerName}</h5>
            <p className={styles.project__lead}>{project.description}</p>
            <div className={styles.project__details}>
                <div className={styles.project__period}>{period}</div>
                {roles}
            </div>
        </section>
    );
}

type PublicationsProps = {
    publications: Publication[],
}

const Publications = ({publications}: PublicationsProps) => {
    if (publications.length === 0) return <></>;

    return (
        <section className={styles.publications}>
            <h3>Utgivelser</h3>
            {
                publications.map(publication => 
                    <Publication key={publication.description} publication={publication} />
                )
            }
        </section>
    );
}

type PublicationProps = {
    publication: Publication,
}

const Publication = ({publication}: PublicationProps) => {
    return (
        <section className={styles.publication}>
            <h5>{publication.name}</h5>
            <p>{publication.description}</p>
            {publication.url &&
                <a href={publication.url}>Les mer</a>
            }
        </section>
    );
}

export default CV;

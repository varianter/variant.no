import Link from 'next/link';
import style from './office.module.css';

export const offices = ['trondheim', 'oslo', 'bergen'] as const;
export type Office = typeof offices[number];

export function stringToDepartment(dep?: string): Office | undefined {
  switch (dep) {
    case 'trondheim':
      return 'trondheim';
    case 'oslo':
      return 'oslo';
    case 'bergen':
      return 'bergen';
    default:
      return undefined;
  }
}

type FilterLinkProps = {
  linkName: string;
  link: string;
  isSelected?: boolean;
};
export function FilterLink({
  linkName,
  link,
  isSelected = false,
}: FilterLinkProps) {
  return isSelected ? (
    <li className={style.office__navActive}>{linkName}</li>
  ) : (
    <Link href={link}>
      <a>
        <li>{linkName}</li>
      </a>
    </Link>
  );
}

type OfficeMap = Record<string, string>;
type OfficeSelectorProps = {
  officeMap: OfficeMap;
  defaultLink?: string;
  currentOffice?: Office;
};

export function OfficeSelector({
  officeMap,
  currentOffice,
  defaultLink,
}: OfficeSelectorProps) {
  const isActive = (link: string) =>
    (!currentOffice && link === defaultLink) || link.includes(currentOffice!);

  return (
    <nav className={style.office__nav}>
      <ul>
        {Object.entries(officeMap).map(([name, link]) => (
          <FilterLink
            key={link}
            linkName={name}
            link={link}
            isSelected={isActive(link)}
          />
        ))}
      </ul>
    </nav>
  );
}

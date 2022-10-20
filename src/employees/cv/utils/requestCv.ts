
import { EmployeeCv } from './types';

// const BASE_URL = 'https://cv-partner-layer.vercel.app/api';
const BASE_URL = 'https://cv-partner-layer-git-cv-layer-variant1.vercel.app/api';

export const fetchCv = async (employeeEmail: string): Promise<EmployeeCv> => {
  const response = await fetch(`${BASE_URL}/cv?email=${employeeEmail}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()).cv;
}

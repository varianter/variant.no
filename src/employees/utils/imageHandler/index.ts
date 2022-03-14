import { ApiEmployee } from 'src/employees/types';

export default async function handleImages(
  employee: ApiEmployee,
  regenerate: boolean = false,
) {
  const handler =
    process.env.NODE_ENV !== 'development' ||
    process.env.BLOB_OVERRIDE == 'true'
      ? await import('./blob')
      : await import('./local');

  return handler.default(employee, regenerate);
}

export async function deleteAll() {
  const handler =
    process.env.NODE_ENV !== 'development' ||
    process.env.BLOB_OVERRIDE == 'true'
      ? await import('./blob')
      : await import('./local');

  return handler.deleteAll();
}

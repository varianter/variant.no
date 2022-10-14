import type { NextApiRequest, NextApiResponse } from 'next';
import { regenerateEmployees } from 'src/employees/utils/request';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (
    !process.env.REVALIDATE_TOKEN ||
    req.query.secret !== process.env.REVALIDATE_TOKEN
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await regenerateEmployees();
    await res.revalidate('/ansatte');
    return res.json({ revalidated: true });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Error revalidating');
  }
}

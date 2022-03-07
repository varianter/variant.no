import { NextApiRequest, NextApiResponse } from 'next';
import { requestByEmails, requestEmployees } from 'src/employees/utils/request';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.query.email) {
      const employee = (await requestByEmails([String(req.query.email)]))[0];
      if (!employee) {
        return res.status(404).json({ message: 'No employee found' });
      }

      return res.status(200).json(employee);
    } else {
      const employees = await requestEmployees();

      if (!employees) {
        return res.status(404).json({ message: 'No employees found' });
      }
      return res.status(200).json(employees);
    }
  } catch (e) {
    return res.status(500).send((e as Error).message);
  }
}

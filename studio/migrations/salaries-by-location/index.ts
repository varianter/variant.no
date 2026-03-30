import { randomUUID } from "crypto";

import { at, defineMigration, patch, set, unset } from "sanity/migrate";

export default defineMigration({
  title: "Move yearlySalaries to yearlySalariesByLocation",
  documentTypes: ["compensations"],

  async *migrate(documents) {
    for await (const doc of documents()) {
      if (doc._type !== "compensations") continue;

      const yearlySalaries = doc.yearlySalaries as
        | Array<{ _key: string; year: number; salaries: string }>
        | undefined;
      const bonusesByLocation = doc.bonusesByLocation as
        | Array<{ _key: string; location: { _type: string; _ref: string } }>
        | undefined;

      const yearlySalariesByLocation = (bonusesByLocation ?? []).map(
        (bonus) => ({
          _key: randomUUID(),
          _type: "salaryData",
          location: { ...bonus.location },
          yearlySalaries: (yearlySalaries ?? []).map((entry) => ({
            _key: randomUUID(),
            year: entry.year,
            salaries: entry.salaries,
          })),
        }),
      );

      yield patch(doc._id, [
        at("yearlySalariesByLocation", set(yearlySalariesByLocation)),
        at("yearlySalaries", unset()),
      ]);
    }
  },
});

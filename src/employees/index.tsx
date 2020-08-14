import React, { CSSProperties } from "react";
import Layout from "src/layout";

import employeeList from "./employees.json";
import style from "./employees.module.css";

type Employee = {
  fullName: string;
  name: string;
  phone: string;
  imageSlug: string;
};

export default function Employees() {
  const indexToInsertLink = Math.floor((employeeList.length / 3) * 2);

  return (
    <Layout fullWidth>
      <div className={style.employeesContainer}>
        <header>
          <h3 className={style.employees__header}>Vi i Variant</h3>
          <p className={style.employees__text}>
            Vi har i Variant en god gjeng erfarne og dyktige mennesker. Dette er
            faglige fyrtårn i byen og personer som virkelig ønsker å lære bort
            alt de kan til sine kollegaer.
          </p>
        </header>

        <div className={style.employees__layout}>
          {employeeList.map((employee, index) => {
            if (index === indexToInsertLink) {
              return (
                <React.Fragment key={`${employee.name}-${index}`}>
                  <div
                    className={style.employee__new}
                    style={
                      { "--randomOffset": getRandomOffset() } as CSSProperties
                    }
                  >
                    Er kanskje du en variant på lur?
                  </div>

                  <EmployeeTile employee={employee} />
                </React.Fragment>
              );
            }

            return (
              <EmployeeTile
                key={`${employee.fullName}-${index}`}
                employee={employee}
              />
            );
          })}

          <div
            className={style.employee__new}
            style={{ "--randomOffset": getRandomOffset() } as CSSProperties}
          >
            Se våre stillinger her
          </div>
        </div>
      </div>
    </Layout>
  );
}

const EmployeeTile: React.FC<{ employee: Employee }> = ({
  employee: { fullName, name, phone, imageSlug },
}) => {
  const randomOffset = getRandomOffset();

  return (
    <div
      className={style.employee}
      style={{ "--randomOffset": randomOffset } as CSSProperties}
    >
      <img
        srcSet={`/employees/${imageSlug}-150.jpg 150w,
        /employees/${imageSlug}-300.jpg 300w`}
        sizes="(max-width: 600px) 150px, 300px"
        src={`/employees/${imageSlug}-300.jpg`}
        alt={`Bilde av ${name}`}
      />

      <h4 className={`fancy ${style.employee__name}`}>{fullName}</h4>
      <p className="caption">{phone}</p>
    </div>
  );
};

function getRandomOffset() {
  const max = 0.8;
  const min = 0.2;

  return Math.random() * (max - min) + min;
}

export type ApiEmployee = {
  name: string;
  email: string;
  telephone: string;
  image: {
    large: {
      url: string;
    };
  };
  office_name: string;
};

export type EmployeeItem = {
  fullName: string;
  name: string;
  email: string;
  telephone: string;
  imageSlug: string;
  officeName: string;
};

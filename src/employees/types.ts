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
  imageUrl: string;
  officeName: string;
};

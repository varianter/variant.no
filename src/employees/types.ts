export type ApiEmployee = {
  name: string;
  email: string;
  telephone: string;
  image: {
    url: string;
    thumb: {
      url: string;
    };
    fit_thumb: {
      url: string;
    };
    large: {
      url: string;
    };
    small_thumb: {
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

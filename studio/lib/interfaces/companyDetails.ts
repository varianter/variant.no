export interface CompanyInfo {
  companyName: string;
  organizationNumber: string;
  companyPhone: string;
  companyEmail: string;
}

export interface CompanyLocation {
  _key: string;
  _id: string;
  _updatedAt: string;
  companyLocationName: string;
  contactPerson?: string;
}

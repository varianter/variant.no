export interface IHubSpotError {
  status: string;
  category: string;
  message: string;
  context: {
    email: string[];
    code: string[];
    namespace: string[];
  };
}

export interface IHubSpotApiResponse {
  status: string;
  results: unknown[];
  numErrors: number;
  errors?: IHubSpotError[];
  startedAt: string;
  completedAt: string;
}

export interface IHubSpotRegistrationResponse {
  success: boolean;
  message: string;
  data: IHubSpotApiResponse;
}

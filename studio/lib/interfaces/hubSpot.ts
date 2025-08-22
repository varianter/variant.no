export interface HubSpotError {
  status: string;
  category: string;
  message: string;
  context: {
    email: string[];
    code: string[];
    namespace: string[];
  };
}

export interface HubSpotApiResponse {
  status: string;
  results: unknown[];
  numErrors: number;
  errors?: HubSpotError[];
  startedAt: string;
  completedAt: string;
}

export interface HubSpotRegistrationResponse {
  success: boolean;
  message: string;
  data: HubSpotApiResponse;
}

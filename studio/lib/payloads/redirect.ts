export interface RedirectPage extends RedirectSparsePage {
  source: string;
}

export interface RedirectSparsePage {
  destination: string;
  permanent: boolean;
}

interface Currency {
  title: string;
  code: string;
}

// ISO 4217 currency codes (https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes)
export const relevantCurrencies: Currency[] = [
  {
    title: "🇳🇴 Norwegian Krone",
    code: "NOK",
  },
  {
    title: "🇸🇪 Swedish Krona",
    code: "SEK",
  },
  {
    title: "🇪🇺 Euro",
    code: "EUR",
  },
  {
    title: "🇬🇧 British Pound",
    code: "GBP",
  },
  {
    title: "🇺🇸 US Dollar",
    code: "USD",
  },
  {
    title: "🇩🇰 Danish Krone",
    code: "DKK",
  },
  {
    title: "🇮🇸 Icelandic Króna",
    code: "ISK",
  },
];

export interface TipModel {
  title: string;
  link: string;
  info: string;
  imageUrl: string;
}

export const tips: TipModel[] = [
  {
    title: 'Hotellets spa',
    link: 'https://www.harbourhotels.co.uk/guildford/spa-and-gym',
    info: 'Det er mulig å booke inngang eller behandling i spaet på forhånd hvis du ønsker å slappe av og roe ned på lørdagen etter aktivitetene',
    imageUrl: '/images/varianttur/spa.png',
  },
  {
    title: 'Shopping',
    link: 'https://www.visitsurrey.com/things-to-do/shopping-in-guildford-town-centre-p492551',
    info: 'Lyst til å utforske lokale butikker i byen? Kanskje shoppe litt?',
    imageUrl: '/images/varianttur/shopping.png',
  },
  {
    title: 'Guildford Castle',
    link: 'https://www.visitsurrey.com/things-to-do/guildford-castle-and-grounds-p44413',
    info: 'Skal du ikke på Hampton Court Palace, men ønsker å se et slott likevel?',
    imageUrl: '/images/varianttur/castle.png',
  },
];

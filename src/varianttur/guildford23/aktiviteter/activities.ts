export interface ActivityModel {
  title: string;
  link: string;
  info: string[];
  imageUrl: string;
}

export const activities: ActivityModel[] = [
  {
    title: 'Hampton Court Palace',
    link: 'https://www.hrp.org.uk/#gs.4pzlzz',
    info: [
      'Oppmøte i lobbyen kl 10:20',
      'Tour kl 11:30 - 13:00',
      'Lunsj, The prince of Wales kl 13:15',
      'Buss tilbake kl 14:30',
    ],
    imageUrl: '/images/varianttur/hampton.png',
  },
  {
    title: 'Vinsmaking, Denbies',
    link: 'https://www.denbies.co.uk',
    info: [
      'Oppmøte i lobbyen kl 11:05',
      'Gallery restaurant kl 13:30',
      'Buss tilbake kl 14:30',
    ],
    imageUrl: '/images/varianttur/wine.png',
  },
  {
    title: 'Ginsmaking, Silent Pool',
    link: 'https://silentpooldistillers.com',
    info: [
      'Oppmøte i lobbyen kl 10:20',
      'Tour kl 11:15',
      'Lunsj, Mandiras kitchen kl',
      'Buss tilbake kl 13:30',
    ],
    imageUrl: '/images/varianttur/gin.png',
  },
  {
    title: 'Thorpe Park',
    link: 'https://www.thorpepark.com',
    info: [
      'Taxi til parken når dere ønsker',
      'Lunsj på eget initiativ',
      'Taxi tilbake til hotellet når dere ønsker',
      '(Utgiftsfør taxi og mat på vanlig måte)',
    ],
    imageUrl: '/images/varianttur/thorpe.png',
  },
  {
    title: 'Byvandring',
    link: 'https://www.visitsurrey.com/guildford',
    info: [
      'Vandring i Guildford',
      'Lunsj på eget initiativ',
      '(Utgiftsfør på vanlig måte)',
    ],
    imageUrl: '/images/varianttur/city.png',
  },
];

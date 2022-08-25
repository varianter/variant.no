export const ONE_G = 106399;

export type HistoricBonus = [year: number, bonus: number];

export const historicBonus: HistoricBonus[] = [
  [2019, 85358],
  [2020, 56673],
  [2021, 71206],
];

export type PayscaleSingleYear = {
  [experienceYear: string]: string;
};

export type HistoricalPayscaleData = {
  [payscaleYear: string]: PayscaleSingleYear;
};

export const payscale = {
  '2020': {
    '1990': '1280500',
    '1991': '1245066',
    '1992': '1223536',
    '1993': '1202148',
    '1994': '1189348',
    '1995': '1178590',
    '1996': '1163190',
    '1997': '1151889',
    '1998': '1131098',
    '1999': '1107851',
    '2000': '1088270',
    '2001': '1071210',
    '2002': '1048495',
    '2003': '1032579',
    '2004': '1013826',
    '2005': '992026',
    '2006': '965486',
    '2007': '941765',
    '2008': '917760',
    '2009': '888160',
    '2010': '856160',
    '2011': '827160',
    '2012': '797400',
    '2013': '766200',
    '2014': '738800',
    '2015': '708000',
    '2016': '673828',
    '2017': '637828',
    '2018': '596713',
    '2019': '560000',
    '2020': '550000',
    '2021': '530000',
    '2022': '490000',
  },
  '2021': {
    '2023': '500000',
    '2022': '530000',
    '2021': '560000',
    '2020': '575000',
    '2019': '607538',
    '2018': '646672',
    '2017': '684248',
    '2016': '720248',
    '2015': '751718',
    '2014': '780718',
    '2013': '808168',
    '2012': '835373',
    '2011': '860885',
    '2010': '889892',
    '2009': '917839',
    '2008': '943746',
    '2007': '964966',
    '2006': '992454',
    '2005': '1014485',
    '2004': '1034538',
    '2003': '1049874',
    '2002': '1065874',
    '2001': '1087814',
    '2000': '1107783',
    '1999': '1126185',
    '1998': '1150649',
    '1997': '1173649',
    '1996': '1182126',
    '1995': '1197526',
    '1994': '1211371',
    '1993': '1221379',
    '1992': '1230779',
    '1991': '1248348',
    '1990': '1252348',
  },
  '2022': {
    '2023': '540000',
    '2022': '570000',
    '2021': '590000',
    '2020': '624667',
    '2019': '667800',
    '2018': '709800',
    '2017': '751000',
    '2016': '786560',
    '2015': '818282',
    '2014': '847282',
    '2013': '872482',
    '2012': '901482',
    '2011': '925359',
    '2010': '954037',
    '2009': '980810',
    '2008': '1001610',
    '2007': '1023010',
    '2006': '1050268',
    '2005': '1067957',
    '2004': '1088003',
    '2003': '1103937',
    '2002': '1110418',
    '2001': '1126723',
    '2000': '1145634',
    '1999': '1164494',
    '1998': '1184605',
    '1997': '1213305',
    '1996': '1227305',
    '1995': '1243305',
    '1994': '1248627',
    '1993': '1262744',
    '1992': '1268681',
    '1991': '1284781',
    '1990': '1290167',
    '1989': '1292792',
    '1988': '1300442',
    '1987': '1306924',
  },
} as HistoricalPayscaleData;

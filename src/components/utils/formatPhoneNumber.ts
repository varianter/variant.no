/*
Format phone numbers:
Formatting for Norwegian numbers: +47 xxx xx xxx
Formatting for Swedish numbers: +46 xxx-xxx xx xx
*/

export default function formatPhoneNumber(phoneNumber: string) {
  const firstDigitsOfPhoneNumber = phoneNumber.slice(0, 3);
  let formattedPhoneNumber = ``;
  if (firstDigitsOfPhoneNumber == "+47") {
    formattedPhoneNumber = `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8)}`;
  } else if (firstDigitsOfPhoneNumber == "+46") {
    formattedPhoneNumber = `${phoneNumber.slice(0, 3)} 0${phoneNumber.slice(3, 5)}-${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8, 10)} ${phoneNumber.slice(10)}`;
  } else {
    formattedPhoneNumber = phoneNumber;
  }
  return formattedPhoneNumber;
}

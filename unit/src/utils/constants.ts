// ERRORS
export const INVALID_USERNAME_ERROR =
  "Invalid value. Username must be 3-15 characters long and contain only Latin letters";
export const INVALID_AGE_ERROR =
  "Invalid value. Age must a number between 16 and 99";
export const INVALID_EMAIL_ERROR = "Invalid email format";
export const INVALID_PHONE_NUMBER_ERROR =
  "Invalid value. Phone number must must be in format +375XXXXXXXXX";
export const INVALID_PASSWORD_ERROR =
  "Invalid value. Password must be longer than 6 characters and contain lowercase and uppercase Latin letters, numbers and special characters";
export const NONEXISTING_VALUE_ERROR = "Value had not been set yet";

// TEST VALUES
export const validUsernames = [
  "lowercase",
  "UPPERCASE",
  "camelCase",
  "Numbers12",
  "15CharsUsername",
];
export const invalidUsernames = [
  "using spaces",
  "using-dash",
  "a1",
  "itExactlySixteen",
  "кириллица",
];
export const validAgeValues = ["16", "99"];
export const invalidAgeValues = ["15", "100", "ab", "0"];
export const validEmails = [
  "letters@gmail.com",
  "Numbers12@yandex.ru",
  "dash-inside@tut.by",
  "dot.inside@bk.org",
  "underscore_inside@domain.abc",
];
export const invalidEmails = [
  "space inside@gmail.com",
  "using-dash",
  "without-atSign.tut.by",
  "incorrect@domain_name",
  "кириллическая@почта.бел",
];
export const validPhoneNumbers = [
  "375001234567",
  "+375 (00) 1234567",
  "375 00 123 45 67",
  "+375(00)123-45-67",
];
export const invalidPhoneNumbers = [
  "+123(00)123-45-67",
  "3750012345",
  "+375 00 123 456 789",
  "-375 00 123-45-67",
  "call me",
];
export const validPasswords = [
    "CorrectPassword123!",
    "c0rrectPa$$w0rd",
    "$h0rT!",
    "AsLongPa$$wordAsICanCr3ateInThisMom3nt",
  ];
  export const invalidPasswords = [
    "n0^uppercase",
    "N0L0WERCA$E",
    "5F!ve",
    "W1th $pace",
    "NoNumber$",
    "NoSp3cialChars",
  ];

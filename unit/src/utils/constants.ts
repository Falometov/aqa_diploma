import { RegFormFields } from "./types";

// ERRORS
const INVALID_USERNAME_ERROR =
  "Invalid value. Username must be 3-15 characters long and contain only Latin letters";
const INVALID_AGE_ERROR = "Invalid value. Age must a number between 16 and 99";
const INVALID_EMAIL_ERROR = "Invalid email format";
const INVALID_PHONE_NUMBER_ERROR =
  "Invalid value. Phone number must must be in format +375XXXXXXXXX";
const INVALID_PASSWORD_ERROR =
  "Invalid value. Password must be longer than 6 characters and contain lowercase and uppercase Latin letters, numbers and special characters";

export const ERRORS = {
  Username: INVALID_USERNAME_ERROR,
  Age: INVALID_AGE_ERROR,
  Email: INVALID_EMAIL_ERROR,
  "Phone Number": INVALID_PHONE_NUMBER_ERROR,
  Password: INVALID_PASSWORD_ERROR,
};

export const NONEXISTING_VALUE_ERROR = "Value had not been set yet";
export const UNKNOWN_BEHAVIOR_ERROR = "Unknown behavior";

// INITIAL VALUES FOR TESTS
const validUsernames = ["lowercase", "UPPERCASE", "camelCase", "Numbers12", "15CharsUsername"];
const invalidUsernames = ["using spaces", "using-dash", "a1", "itExactlySixteen", "кириллица"];
const validAgeValues = ["16", "99"];
const invalidAgeValues = ["15", "100", "ab", "0"];
const validEmails = [
  "letters@gmail.com",
  "Numbers12@yandex.ru",
  "dash-inside@tut.by",
  "dot.inside@bk.org",
  "underscore_inside@domain.abc",
];
const invalidEmails = [
  "space inside@gmail.com",
  "using-dash",
  "without-atSign.tut.by",
  "incorrect@domain_name",
  "кириллическая@почта.бел",
];
const validPhoneNumbers = [
  "375001234567",
  "+375 (00) 1234567",
  "375 00 123 45 67",
  "+375(00)123-45-67",
];
const invalidPhoneNumbers = [
  "+123(00)123-45-67",
  "3750012345",
  "+375 00 123 456 789",
  "-375 00 123-45-67",
  "call me",
];
const validPasswords = [
  "CorrectPassword123!",
  "c0rrectPa$$w0rd",
  "$h0rT!",
  "AsLongPa$$wordAsICanCr3ateInThisMom3nt",
];
const invalidPasswords = [
  "n0^uppercase",
  "N0L0WERCA$E",
  "5F!ve",
  "W1th $pace",
  "NoNumber$",
  "NoSp3cialChars",
];

// ARRAYS OF TEST VALUES
export const POSITIVE_TESTS: RegFormFields = {
  Username: validUsernames,
  Age: validAgeValues,
  Email: validEmails,
  "Phone Number": validPhoneNumbers,
  Password: validPasswords,
};

export const EXCEPTIONS_TESTS: RegFormFields = {
  Username: invalidUsernames,
  Age: invalidAgeValues,
  Email: invalidEmails,
  "Phone Number": invalidPhoneNumbers,
  Password: invalidPasswords,
};

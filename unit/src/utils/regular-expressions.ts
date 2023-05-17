export const usernameRegex: RegExp = /[A-Z0-9]{3,15}/i;
export const ageRegex: RegExp = /\d{2}/;
export const emailRegex: RegExp =
  /[A-Z][A-Z0-9._-]{2,}@[A-Z]{2,10}\.[A-Z]{2,3}/gi;
export const phoneNumberRegex: RegExp =
  /\+?375\s?\(?\d{2}\)?\s?\d{3}\s?\-?\d{2}\s?\-?\d{2}/;
export const passwordRegex: RegExp =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/;

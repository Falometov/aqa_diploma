export const loginRegex: RegExp = /[A-Z0-9]{3,15}/;
export const ageRegex: RegExp = /\d{1,3}/;
export const emailRegex: RegExp = /[A-Z][A-Z0-9._-]{3,15}@[A-Z]{2,10}\.[A-Z]{2,3}/i;
export const phoneNumberRegex: RegExp = /\+375\d{9}/;
export const passwordRegex: RegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g;

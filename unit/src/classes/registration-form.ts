import { ERRORS, NONEXISTING_VALUE_ERROR } from "../utils/constants";
import {
  ageRegex,
  emailRegex,
  passwordRegex,
  phoneNumberRegex,
  usernameRegex,
} from "../utils/regular-expressions";
import { Fields } from "../utils/types";

export class RegistrationForm {
  private username!: string;
  private userAge!: string;
  private userEmail!: string;
  private userPhoneNumber!: string;
  private userPassword!: string;

  constructor() {}

  get currentUsername(): string {
    if (this.username) return this.username;
    else throw new Error(NONEXISTING_VALUE_ERROR);
  }

  get currentUserAge(): string {
    if (this.userAge) return this.userAge;
    else throw new Error(NONEXISTING_VALUE_ERROR);
  }

  get currentUserEmail(): string {
    if (this.userEmail) return this.userEmail;
    else throw new Error(NONEXISTING_VALUE_ERROR);
  }

  get currentUserPhoneNumber(): string {
    if (this.userPhoneNumber) return this.userPhoneNumber;
    else throw new Error(NONEXISTING_VALUE_ERROR);
  }

  get currentUserPassword(): string {
    if (this.userPassword) return this.userPassword;
    else throw new Error(NONEXISTING_VALUE_ERROR);
  }

  public setUsername(username: string): void {
    const matchStrings = username.match(usernameRegex);
    if (matchStrings && matchStrings[0] === username) this.username = username;
    else throw new Error(ERRORS[Fields.Username]);
  }

  public setUserAge(age: string): void {
    const matchStrings = age.match(ageRegex);
    if (matchStrings && matchStrings[0] === age)
      if (Number(age) >= 16) this.userAge = age;
      else throw new Error(ERRORS[Fields.Age]);
    else throw new Error(ERRORS[Fields.Age]);
  }

  public setUserEmail(email: string): void {
    const matchStrings = email.match(emailRegex);
    if (matchStrings && matchStrings[0] === email) this.userEmail = email;
    else throw new Error(ERRORS[Fields.Email]);
  }

  public setUserPhoneNumber(phoneNumber: string): void {
    const matchStrings = phoneNumber.match(phoneNumberRegex);
    if (matchStrings && matchStrings[0] === phoneNumber) this.userPhoneNumber = phoneNumber;
    else throw new Error(ERRORS[Fields.PhoneNumber]);
  }

  public setUserPassword(password: string): void {
    const matchStrings = password.match(passwordRegex);
    if (matchStrings && matchStrings[0] === password) this.userPassword = password;
    else throw new Error(ERRORS[Fields.Password]);
  }
}

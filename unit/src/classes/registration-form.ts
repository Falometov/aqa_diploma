import { INVALID_USERNAME_ERROR } from "../utils/constants";
import { usernameRegex } from "../utils/regular-expressions";

export class RegistrationForm {
  private username!: string;
  private userAge!: string;
  private userEmail!: string;
  private userPhoneNumber!: string;
  private userPassword!: string;

  constructor() {}

  get currentUsername() {
    return this.username;
  }

  public setName(username: string) {
    if (usernameRegex.test(username)) this.username = username;
    else throw new Error(INVALID_USERNAME_ERROR);
  }
}

const rf = new RegistrationForm
console.log(rf.currentUsername);

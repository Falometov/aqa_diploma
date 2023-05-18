import { Page } from "@playwright/test";
import {
  defaultWaitingTime,
  HIDE_PASSWORD_BUTTON,
  LOGIN_URL,
  PASSWORD_INPUT,
  SIGN_IN_BUTTON,
  USERNAME_INPUT,
} from "../utils/constants";

export class LoginPage {
  protected static instance: LoginPage;
  protected url!: string;

  protected constructor(protected readonly page: Page) {
    this.url = LOGIN_URL;
  }

  static getInstance(page: Page) {
    if (!this.instance) {
      this.instance = new LoginPage(page);
    }

    return this.instance;
  }

  get usernameInput() {
    return this.page.locator(USERNAME_INPUT);
  }

  get passwordInput() {
    return this.page.locator(PASSWORD_INPUT);
  }

  get hidePasswordButton() {
    return this.page.locator(HIDE_PASSWORD_BUTTON);
  }

  get signInButton() {
    return this.page.locator(SIGN_IN_BUTTON);
  }

  public async inputUsername(username: string) {
    await this.usernameInput.type(username, { delay: defaultWaitingTime / 10 });
  }

  public async inputPassword(password: string) {
    await this.passwordInput.type(password, { delay: defaultWaitingTime / 10 });
  }

  public async signInByUsernameAndPassword(username: string, password: string) {
    await this.inputUsername(username);
    await this.inputPassword(password);
    await this.signInButton.click();
  }
}
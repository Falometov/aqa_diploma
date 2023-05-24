import { Page } from "@playwright/test";
import {
  defaultWaitingTime,
  EMPTY_PASSWORD_MESSAGE,
  HIDE_PASSWORD_BUTTON,
  INVALID_CREDENTIALS_NOTIFICATION,
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

  private get usernameInput() {
    return this.page.locator(USERNAME_INPUT);
  }

  private get passwordInput() {
    return this.page.locator(PASSWORD_INPUT);
  }

  get hidePasswordButton() {
    return this.page.locator(HIDE_PASSWORD_BUTTON);
  }

  get signInButton() {
    return this.page.locator(SIGN_IN_BUTTON);
  }

  get emptyPasswordMessage() {
    return this.page.locator(EMPTY_PASSWORD_MESSAGE);
  }

  get invalidCredentialsNotification() {
    return this.page.locator(INVALID_CREDENTIALS_NOTIFICATION);
  }

  public async setViewportSize() {
    await this.page.setViewportSize({ width: 1920, height: 1080 });
  }

  public async waitForTimeout() {
    await this.page.waitForTimeout(defaultWaitingTime / 4);
  }

  public async getTypeOfPasswordInput() {
    return await this.passwordInput.getAttribute("type");
  }

  public async inputUsername(username: string) {
    await this.usernameInput.type(username, { delay: defaultWaitingTime / 10 });
  }

  private async inputPassword(password: string) {
    await this.passwordInput.type(password, { delay: defaultWaitingTime / 10 });
  }

  public async signInByUsernameAndPassword(username: string, password: string) {
    await this.inputUsername(username);
    await this.inputPassword(password);
    await this.signInButton.click();
  }

  public async visitPage() {
    await this.page.goto(this.url);
  }
}

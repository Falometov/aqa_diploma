import { Page } from "@playwright/test";
import { BASE_URL, HOME_SIGN_UP_BUTTON, LEARN_ABOUT_PRO_BUTTON } from "../utils/constants";
import { BasePage } from "./base-page";

export class HomePage extends BasePage {
  protected static instance: HomePage;

  protected constructor(protected readonly page: Page) {
    super(page);

    this.url = BASE_URL;
  }

  static getInstance(page: Page) {
    if (!this.instance) {
      this.instance = new HomePage(page);
    }

    return this.instance;
  }

  get learnAboutProButton() {
    return this.page.locator(LEARN_ABOUT_PRO_BUTTON);
  }

  get signUpForFreeButton() {
    return this.page.locator(HOME_SIGN_UP_BUTTON);
  }
}

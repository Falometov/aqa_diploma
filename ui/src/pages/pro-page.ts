import { Page } from "@playwright/test";
import { PRO_ABOUT_TEAMS_BUTTON, PRO_GET_STARTED_BUTTON, PRO_UPGRADE_PLAN_BUTTON, PRO_URL } from "../utils/constants";
import { BasePage } from "./base-page";

export class ProPage extends BasePage {
  protected static instance: ProPage;

  protected constructor(protected readonly page: Page) {
    super(page);

    this.url = PRO_URL;
  }

  static getInstance(page: Page) {
    if (!this.instance) {
      this.instance = new ProPage(page);
    }

    return this.instance;
  }

  get getStartedButton() {
    return this.page.locator(PRO_GET_STARTED_BUTTON);
  }

  get learnAboutTeamsButton() {
    return this.page.locator(PRO_ABOUT_TEAMS_BUTTON);
  }

  get upgradeYourPlanButton() {
    return this.page.locator(PRO_UPGRADE_PLAN_BUTTON);
  }
}

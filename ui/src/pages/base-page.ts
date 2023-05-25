import { Page } from "@playwright/test";
import { defaultWaitingTime, PAGE_HEADER } from "../utils/constants";
import { NavigationBar } from "./elements/navigation-bar";

export class BasePage {
  protected url!: string;

  public navigationBar: NavigationBar;

  constructor(protected readonly page: Page) {
    this.navigationBar = NavigationBar.getInstance(page);
  }

  get currentUrl() {
    return this.page.url();
  }

  get pageHeader() {
    return this.page.locator(PAGE_HEADER);
  }

  public async waitForUrl(url: string) {
    await this.page.waitForURL(url, { timeout: defaultWaitingTime });
  }

  public async setViewportSize() {
    await this.page.setViewportSize({ width: 1920, height: 1080 });
  }

  public async visitPage() {
    await this.page.goto(this.url);
  }
}

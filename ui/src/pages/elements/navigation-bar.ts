import { Page } from "@playwright/test";
import { defaultWaitingTime, NAVIGATION_ITEM, NAVIGATION_TITLE, SEARCH_BUTTON, SEARCH_INPUT } from "../../utils/constants";

export class NavigationBar {
  protected static instance: NavigationBar;

  constructor(protected readonly page: Page) {}

  static getInstance(page: Page) {
      if (!this.instance) {
          this.instance = new NavigationBar(page);
      }

      return this.instance;
  }

  get navigationTitle() {
      return this.page.locator(NAVIGATION_TITLE);
  }

  get searchButton() {
      return this.page.locator(SEARCH_BUTTON);
  }

  get searchInput() {
      return this.page.locator(SEARCH_INPUT);
  }

  protected getNavigationItemByInnerText(innerText: NAVIGATION_ITEMS) {
      return this.page.locator(NAVIGATION_ITEM, { hasText: innerText });
  }

  public async clickOnNavigationItemByInnerText(innerText: NAVIGATION_ITEMS) {
      await this.getNavigationItemByInnerText(innerText).click();
  }

  public async searchFor(searchQuery: string) {
      await this.searchInput.type(searchQuery, { delay: defaultWaitingTime / 10 });
      await this.searchButton.click();
  }
}

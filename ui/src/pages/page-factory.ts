import { Page } from "@playwright/test";
import { PAGES } from "../utils/types";
import { HomePage } from "./home-page";
import { LoginPage } from "./login-page";
import { ProPage } from "./pro-page";

export class PageFactory {
  constructor() {}

  static getPage(page: Page, pageName: PAGES) {
    switch (pageName) {
      case PAGES.HOME:
        return HomePage.getInstance(page);
      case PAGES.PRO:
        return ProPage.getInstance(page);
      case PAGES.LOGIN:
        return LoginPage.getInstance(page);
      default:
        throw new Error("Unknown page");
    }
  }
}

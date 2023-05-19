import { test, expect } from "@playwright/test";
import { HomePage } from "../src/pages/home-page";
import { PageFactory } from "../src/pages/page-factory";
import { LOGIN_URL } from "../src/utils/constants";
import { NAVIGATION_ITEMS, PAGES } from "../src/utils/types";

test.describe.configure({ mode: "serial" });

let homePage: HomePage;

test.describe("npm Official Site Tests - Home Page", async () => {
  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    homePage = PageFactory.getPage(page, PAGES.HOME) as HomePage;
    await homePage.setViewportSize();
  });

  test.beforeEach(async () => {
    await homePage.visitPage();
  });

  const navigationItems: NAVIGATION_ITEMS[] = Object.values(NAVIGATION_ITEMS);
  navigationItems.forEach((pageName) => {
    test(`Should correctly display ${pageName} Page header`, async () => {
      await homePage.navigationBar.clickOnNavigationItemByInnerText(pageName);
      expect(homePage.pageHeader).toContainText(pageName.toLowerCase());
    });
  });

  test('Should open Installation Page after clicking "GET STARTED" button', async () => {
    await homePage.learnAboutProButton.click();
    expect(homePage.pageHeader).toContainText(NAVIGATION_ITEMS.PRO);
  });

  test('Should open Installation Page after clicking "GET STARTED" button', async () => {
    await homePage.signUpForFreeButton.click();
    expect(homePage.currentUrl).toEqual(LOGIN_URL);
  });
});

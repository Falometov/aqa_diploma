import { test, expect } from "@playwright/test";
import { HomePage } from "../src/pages/home-page";
import { searchQuery, SEARCH_URL, SIGN_UP_URL, spaceInUrl } from "../src/utils/constants";
import { NAVIGATION_ITEMS, PAGES } from "../src/utils/types";

test.describe.configure({ mode: "serial" });

let homePage: HomePage;

test.describe("npm Official Site Tests - Home Page", async () => {
  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    homePage = HomePage.getInstance(page);
    await homePage.setViewportSize();
  });

  test.beforeEach(async () => {
    await homePage.visitPage();
  });

  test('Should open Pro Page after clicking "Learn about Pro" button', async () => {
    await homePage.learnAboutProButton.click();
    expect(await homePage.pageHeader.innerText()).toContain(NAVIGATION_ITEMS.PRO);
  });

  test('Should open Sign Up Page after clicking "Sign up for free" button', async () => {
    await homePage.signUpForFreeButton.click();
    await homePage.waitForUrl(SIGN_UP_URL);
  });

  searchQuery.forEach((searchQuery) => {
    test(`Should correctly search using "${searchQuery}" search query`, async () => {
      await homePage.navigationBar.searchFor(searchQuery);
      searchQuery.split(" ").join(spaceInUrl);
      await homePage.waitForUrl(SEARCH_URL + searchQuery);
    });
  });

  const navigationItems: NAVIGATION_ITEMS[] = Object.values(NAVIGATION_ITEMS);
  navigationItems.forEach((pageName) => {
    test(`Should correctly display ${pageName} Page header`, async () => {
      await homePage.navigationBar.clickOnNavigationItemByInnerText(pageName);
      expect(await homePage.pageHeader.innerText()).toContain(pageName);
    });
  });
});

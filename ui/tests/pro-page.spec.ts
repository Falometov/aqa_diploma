import { test, expect } from "@playwright/test";
import { PageFactory } from "../src/pages/page-factory";
import { ProPage } from "../src/pages/pro-page";
import { PRO_URL } from "../src/utils/constants";
import { PAGES } from "../src/utils/types";

test.describe.configure({ mode: "serial" });

let proPage: ProPage;

test.describe("npm Official Site Tests - Home Page", async () => {
  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    proPage = PageFactory.getPage(page, PAGES.PRO) as ProPage;
    await proPage.setViewportSize();
  });

  test.beforeEach(async () => {
    await proPage.visitPage();
  });

  test.only('Should scroll page to "get-started" section after clicking "Get Started" button', async () => {
    await proPage.getStartedButton.click();
    expect(proPage.currentUrl).toEqual(PRO_URL + "#get-started");
  });
});

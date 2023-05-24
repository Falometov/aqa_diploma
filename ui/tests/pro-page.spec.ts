import { test, expect } from "@playwright/test";
import { ProPage } from "../src/pages/pro-page";
import { PRO_URL, TEAMS_URL } from "../src/utils/constants";
import { PAGES } from "../src/utils/types";

test.describe.configure({ mode: "serial" });

let proPage: ProPage;

test.describe("npm Official Site Tests - Pro Page", async () => {
  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    proPage = ProPage.getInstance(page);
    await proPage.setViewportSize();
  });

  test.beforeEach(async () => {
    await proPage.visitPage();
  });

  test('Should scroll page to "get-started" section after clicking "Get Started" button', async () => {
    await proPage.getStartedButton.click();
    expect(proPage.currentUrl).toEqual(PRO_URL + "#get-started");
  });

  test('Should open Teams Page after clicking "Learn about Teams" button', async () => {
    await proPage.learnAboutTeamsButton.click();
    expect(proPage.currentUrl).toEqual(TEAMS_URL);
  });
});

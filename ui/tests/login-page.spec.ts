import { test, expect } from "@playwright/test";
import { LoginPage } from "../src/pages/login-page";
import { PageFactory } from "../src/pages/page-factory";
import { randomCredential } from "../src/utils/constants";
import { PAGES } from "../src/utils/types";

test.describe.configure({ mode: "serial" });

let loginPage: LoginPage;

test.describe("npm Official Site Tests - Home Page", async () => {
  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    loginPage = PageFactory.getPage(page, PAGES.LOGIN) as LoginPage;
    await loginPage.setViewportSize();
  });

  test.beforeEach(async () => {
    await loginPage.visitPage();
  });

  test('Should display error message after clicking "Sign In" button with filled "Username" and empty "Password" fields', async () => {
    await loginPage.inputUsername(randomCredential);
    await loginPage.signInButton.dblclick();
    expect(loginPage.emptyPasswordMessage).toBeVisible();
  });

  test.only('Should display error notification after clicking "Sign In" with invalid credentials', async () => {
    await loginPage.signInByUsernameAndPassword(randomCredential, randomCredential);
    expect(loginPage.invalidCredentialsNotification).toBeVisible();
  });

  test('Should show/hide password after clicking "Show"/"Hide" button', async () => {
    const initialType = await loginPage.getTypeOfPasswordInput();
    await loginPage.hidePasswordButton.click();
    expect(await loginPage.getTypeOfPasswordInput()).not.toEqual(initialType);
  });
});

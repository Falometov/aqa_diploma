import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home-page';
import { PageFactory } from '../src/pages/page-factory';

test.describe.configure({ mode: 'serial' });

let homePage: HomePage;

test.describe('npm Official Site Tests - Home Page', async () => {
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
            expect(homePage.pageHeader).toContain(pageName.toLowerCase());
        });
    });

    // test('Should switch light mode', async () => {
    //     const initialLightMode = await homePage.getCurrentLightMode();
    //     await homePage.navigationBar.switchLightMode();
    //     expect(await homePage.getCurrentLightMode()).not.toEqual(initialLightMode);
    // });

    // test('Should open Installation Page after clicking "GET STARTED" button', async () => {
    //     await homePage.getStartedButton.click();
    //     expect(homePage.pageHeader).toHaveText('Installation');
    // });

    // test(`Should correctly search by ${searchQuery} search query`, async () => {
    //     await homePage.navigationBar.searchFor(searchQuery);
    //     await expect(homePage.pageHeader).toHaveText(searchQuery);
    // });
});
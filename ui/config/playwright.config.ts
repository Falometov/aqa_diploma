import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "../tests",
  outputDir: "../assets/test-results",
  fullyParallel: false,
  timeout: 40000,
  expect: {
    timeout: 7000,
  },
  forbidOnly: false,
  retries: 0,
  workers: 1,
  reporter: [
    ["line"], ["html"],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "./ui/assets/allure-results",
        suiteTitle: false,
      },
    ],
  ],

  use: {
    headless: false,
    video: "retain-on-failure",
    trace: "on",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],
});

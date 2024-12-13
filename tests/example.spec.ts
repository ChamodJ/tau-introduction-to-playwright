import { test, expect } from '@playwright/test';

/**
 * 1. Open the page
 * 2. Click at Get started
 * 3. Mouse hover the language dropdown
 * 4. Click at  Java
 * 5. Check the URL 
 * 6. Check the text "Installing Playwright" is not being displayed
 * 7. Check the text below is displayed
 * 
 * Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.
 * 
 */

test('test java page', async({ page }) => {

  await page.goto('https://playwright.dev/');

  await page.getByRole('link', {name : 'Get Started'}).click();
  await page.getByRole('button', {name : 'Node.js'}).hover();
  await page.getByRole('link', { name: 'Java', exact: true }).click();


  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
  await expect(page.getByText('Installing Playwright', { exact : true})).not.toBeVisible

  const text = 'Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project\'s pom.xml as described below. If you\'re not familiar with Maven please refer to its documentation.'

  await expect(page.getByText('text', { exact : true})).toBeVisible

})



/*

// test.only('check Java page', async ({ page }) => {
test('check Java page', async ({ page }) => {

  await page.goto('https://playwright.dev');

  await page.getByRole('link', {name: 'Get started'}).click();
  await page.getByRole('button', {name: 'Node.js'}).hover();
  await page.getByText('Java', { exact:true }).click();
  // await page.getByRole('navigation', { name: 'Main' }).getByText('Java').click(); // in case the locator above doesn't work, you can use this line. Remove the line above and use this one instead.

  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
  await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible();

  const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;
  await expect(page.getByText(javaDescription)).toBeVisible();

});

function async(arg0: { page: any; }): (args: import("playwright/test").PlaywrightTestArgs & import("playwright/test").PlaywrightTestOptions & import("playwright/test").PlaywrightWorkerArgs & import("playwright/test").PlaywrightWorkerOptions, testInfo: import("playwright/test").TestInfo) => Promise<void> | void {
  throw new Error('Function not implemented.');
}
*/
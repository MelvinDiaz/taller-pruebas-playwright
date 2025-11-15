import { Page, expect } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly title = ".title";

  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded() {
    await expect(this.page.locator(this.title)).toHaveText("Products");
  }
}

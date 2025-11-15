import { test, expect } from "@playwright/test";

const SWAG_LABS_URL = "https://www.saucedemo.com";
const VALID_USERNAME = "standard_user";
const VALID_PASSWORD = "secret_sauce";

test("Login exitoso en Swag Labs", async ({ page }) => {
  await page.goto(SWAG_LABS_URL);

  // Llenar credenciales
  await page.fill('[data-test="username"]', VALID_USERNAME);
  await page.fill('[data-test="password"]', VALID_PASSWORD);
  await page.click('[data-test="login-button"]');

  // Verificar que estamos en la página de productos
  await expect(page).toHaveURL(/.*inventory/);
  await expect(page.locator(".title")).toContainText("Products");
});

test("Agregar producto al carrito", async ({ page }) => {
  await page.goto(SWAG_LABS_URL);

  // Login
  await page.fill('[data-test="username"]', VALID_USERNAME);
  await page.fill('[data-test="password"]', VALID_PASSWORD);
  await page.click('[data-test="login-button"]');
  await page.waitForURL(/.*inventory/);

  // Agregar producto al carrito
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Verificar que el botón cambió a "Remove"
  await expect(
    page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
  ).toContainText("Remove");

  // Verificar el badge del carrito
  const cartBadge = page.locator(".shopping_cart_badge");
  await expect(cartBadge).toContainText("1");
});

test("Completar compra exitosamente", async ({ page }) => {
  await page.goto(SWAG_LABS_URL);

  // Login
  await page.fill('[data-test="username"]', VALID_USERNAME);
  await page.fill('[data-test="password"]', VALID_PASSWORD);
  await page.click('[data-test="login-button"]');
  await page.waitForURL(/.*inventory/);

  // Agregar producto
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Ir al carrito
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL(/.*cart/);

  // Hacer checkout
  await page.click('[data-test="checkout"]');
  await expect(page).toHaveURL(/.*checkout-step-one/);

  // Llenar información de envío
  await page.fill('[data-test="firstName"]', "John");
  await page.fill('[data-test="lastName"]', "Doe");
  await page.fill('[data-test="postalCode"]', "12345");

  // Continuar
  await page.click('[data-test="continue"]');
  await expect(page).toHaveURL(/.*checkout-step-two/);

  // Finalizar compra
  await page.click('[data-test="finish"]');

  // Verificar que la compra fue exitosa
  await expect(page).toHaveURL(/.*checkout-complete/);
  await expect(page.locator(".complete-header")).toContainText("Thank you");
});

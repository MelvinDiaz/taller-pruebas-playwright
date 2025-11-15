# Pruebas de Automatización - Swag Labs

Este proyecto contiene pruebas automatizadas con Playwright para el sitio de pruebas [Swag Labs](https://www.saucedemo.com).

## 📋 Requisitos

- Node.js 18+
- npm o yarn

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Instalar los navegadores de Playwright
npx playwright install
```

## 🧪 Cómo ejecutar las pruebas

### Ejecución básica (headless - sin interfaz gráfica)

```bash
npm test
```

### Ejecución con interfaz gráfica (ver el navegador)

```bash
npm run test:headed
```

### Modo debug (con depurador interactivo)

```bash
npm run test:debug
```

### Modo UI (interfaz interactiva de Playwright)

```bash
npm run test:ui
```

### Ver reporte HTML de las pruebas

```bash
npm run test:report
```

### Ejecutar solo pruebas específicas

```bash
# Por archivo
npx playwright test tests/example.spec.ts

# Por nombre de suite
npx playwright test -g "Login Tests"

# En un navegador específico
npx playwright test --project=chromium
```

## 📊 Suite de Pruebas

El archivo `tests/example.spec.ts` contiene **3 pruebas simples y directas**:

1. **Login exitoso en Swag Labs** ✅

   - Navega a Swag Labs
   - Inicia sesión con credenciales válidas
   - Verifica que llega a la página de productos

2. **Agregar producto al carrito** 🛒

   - Login
   - Agrega un producto al carrito
   - Verifica el cambio de botón y el badge del carrito

3. **Completar compra exitosamente** ✅
   - Login
   - Agrega producto
   - Completa el proceso de checkout
   - Verifica que la compra fue exitosa

**Total: 3 pruebas simples y funcionales**

## 🔐 Credenciales de prueba

Swag Labs proporciona varias cuentas de prueba:

| Usuario                   | Contraseña     | Comportamiento                 |
| ------------------------- | -------------- | ------------------------------ |
| `standard_user`           | `secret_sauce` | Usuario estándar               |
| `locked_out_user`         | `secret_sauce` | Usuario bloqueado              |
| `problem_user`            | `secret_sauce` | Usuario con problemas visuales |
| `performance_glitch_user` | `secret_sauce` | Usuario con lentitud           |

## 📁 Estructura del proyecto

```
.
├── tests/
│   └── example.spec.ts          # Archivo principal de pruebas
├── .github/
│   └── workflows/
│       └── playwright-tests.yml # Configuración de GitHub Actions
├── playwright.config.ts         # Configuración de Playwright
├── package.json                 # Dependencias y scripts
└── README.md                    # Este archivo
```

## 🤖 GitHub Actions - Pruebas Automáticas

Las pruebas se ejecutan automáticamente en los siguientes eventos:

- 📌 **Push** a las ramas `main` y `develop`
- 🔀 **Pull Requests** hacia las ramas `main` y `develop`

### Características del workflow

- ✅ Pruebas en Node.js 18.x y 20.x
- 🌐 Ejecuta en un contenedor Ubuntu
- 📊 Genera reportes HTML
- 💾 Guarda artefactos por 30 días
- 💬 Comenta en PRs con resultados

## 📝 Configuración de Playwright

El archivo `playwright.config.ts` está configurado con:

- **Navegadores**: Chromium, Firefox, WebKit
- **Reportero**: HTML (interactivo)
- **Reintentos**: 2 en CI, 0 en desarrollo local
- **Workers**: 1 en CI (secuencial), múltiples en local (paralelo)
- **Trace**: Captura en primer reintento fallido

## 🐛 Debugging y Troubleshooting

### Ver logs detallados

```bash
DEBUG=pw:api npm test
```

### Ejecutar con más información

```bash
npx playwright test --reporter=list
```

### Abrir Playwright Inspector

```bash
npm run test:debug
```

## 📚 Recursos útiles

- [Documentación oficial de Playwright](https://playwright.dev)
- [Saucedemo - Demo app de pruebas](https://www.saucedemo.com)
- [Selectores en Playwright](https://playwright.dev/docs/locators)

## ✨ Tips

1. Las pruebas están organizadas en `test.describe` para mejor legibilidad
2. Se usa `test.beforeEach` para setup antes de cada prueba
3. Todos los selectores usan `data-test` attributes (mejores prácticas)
4. Los tests son independientes y pueden ejecutarse en cualquier orden

---

**Autor**: Automated Testing Suite  
**Última actualización**: Noviembre 2025

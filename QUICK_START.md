# 🚀 Guía Rápida - Ejecutar Pruebas

## Instalación Inicial

```bash
npm install
npx playwright install
```

## Comandos Principales

| Comando               | Descripción                               |
| --------------------- | ----------------------------------------- |
| `npm test`            | Ejecuta todas las pruebas (modo headless) |
| `npm run test:headed` | Ejecuta con navegador visible             |
| `npm run test:debug`  | Modo debug interactivo                    |
| `npm run test:ui`     | Interfaz interactiva de Playwright        |
| `npm run test:report` | Abre el reporte HTML                      |

## Ejemplos de Uso

### Ejecutar solo pruebas de login

```bash
npx playwright test -g "Login Tests"
```

### Ejecutar en un navegador específico

```bash
npx playwright test --project=chromium
```

### Ejecutar un archivo específico

```bash
npx playwright test tests/example.spec.ts
```

### Ejecutar con máximo detalle

```bash
DEBUG=pw:api npm test
```

## Estructura de Pruebas

```
✅ Swag Labs - Pruebas Simples
  ├── Login exitoso en Swag Labs
  ├── Agregar producto al carrito
  └── Completar compra exitosamente
```

## GitHub Actions

Las pruebas se ejecutan automáticamente en:

- ✅ Push a `main` o `develop`
- ✅ Pull Requests a `main` o `develop`

Los reportes se guardan en **Artifacts** por 30 días.

## Troubleshooting

### Las pruebas no inician

```bash
npx playwright install --with-deps
npm install
```

### Necesito ver qué está pasando

```bash
npm run test:headed
```

### Quiero debuguear una prueba específica

```bash
npm run test:debug
npx playwright test -g "nombre-de-la-prueba" --debug
```

### Ver últimos resultados

```bash
npm run test:report
```

---

💡 **Tip**: Los tests se pueden ejecutar en paralelo o secuencial. Por defecto, local es paralelo, CI es secuencial.

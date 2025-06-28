# Configuración de Stripe

## Variables de Entorno Requeridas

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Clerk Configuration (si ya existe)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

## Pasos para Configurar Stripe

1. **Crear cuenta en Stripe**: Ve a [stripe.com](https://stripe.com) y crea una cuenta

2. **Obtener las claves de API**:
   - Ve al Dashboard de Stripe
   - En el menú lateral, ve a "Developers" > "API keys"
   - Copia la "Publishable key" y la "Secret key"

3. **Configurar las variables de entorno**:
   - Crea el archivo `.env.local` en la raíz del proyecto
   - Pega las claves correspondientes

4. **Probar la integración**:
   - Usa las tarjetas de prueba de Stripe:
     - Tarjeta exitosa: `4242 4242 4242 4242`
     - Tarjeta que requiere autenticación: `4000 0025 0000 3155`
     - Tarjeta rechazada: `4000 0000 0000 0002`

## Funcionalidades Implementadas

- ✅ Creación de intenciones de pago
- ✅ Formulario de pago con Stripe Elements
- ✅ Procesamiento de pagos seguros
- ✅ Manejo de errores
- ✅ Redirección después del pago exitoso

## Endpoints de API

- `POST /api/create-payment-intent`: Crea una intención de pago
  - Body: `{ amount: number, currency: string, metadata: object }`
  - Response: `{ clientSecret: string }`

## Componentes

- `StripeProvider`: Proveedor de contexto para Stripe
- `StepPago`: Componente de pago con Stripe Elements
- `create-payment-intent/route.ts`: Endpoint para crear intenciones de pago 
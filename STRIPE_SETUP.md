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

## Variables de Entorno Necesarias

### Stripe
- `STRIPE_SECRET_KEY`: Tu clave secreta de Stripe
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Tu clave pública de Stripe

### Supabase
- `NEXT_PUBLIC_SUPABASE_URL`: URL de tu proyecto Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Clave anónima de tu proyecto Supabase

### Clerk
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clave pública de Clerk
- `CLERK_SECRET_KEY`: Clave secreta de Clerk

### Google Analytics
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: ID de medición de Google Analytics

### Encriptación
- `ENCRYPTION_KEY_AES_255_CBC`: Clave de encriptación AES-256-CBC

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

## Configuración en Vercel

1. Ve a tu proyecto en Vercel
2. Navega a Settings > Environment Variables
3. Agrega todas las variables de entorno listadas arriba
4. Asegúrate de que estén configuradas para todos los entornos (Production, Preview, Development)

## Verificación

Para verificar que las variables están configuradas correctamente:

1. En Vercel, ve a Functions > View Function Logs
2. Busca errores relacionados con variables de entorno no definidas
3. Verifica que las URLs de Supabase sean correctas y accesibles 
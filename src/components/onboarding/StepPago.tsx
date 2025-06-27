'use client';

import { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useUser } from "@clerk/nextjs";

interface StepPagoProps {
  onValidationChange?: (isValid: boolean) => void;
  precio?: number;
  empresaData?: {
    nombre: string;
    direccion: string;
  };
}

export default function StepPago({ onValidationChange, precio = 29.99, empresaData }: Readonly<StepPagoProps>) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState<string>('');
  const [error, setError] = useState<string>('');
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useUser();

  // Crear intención de pago al cargar el componente
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: precio,
            currency: 'usd',
            metadata: {
              plan: 'basic',
              userEmail: 'user@example.com', // Email del usuario autenticado
            },
          }),
        });

        const { clientSecret: secret, error } = await response.json();
        
        if (error) {
          setError('Error al inicializar el pago');
          return;
        }

        setClientSecret(secret);
      } catch (err) {
        setError('Error de conexión');
        console.error('Error creating payment intent:', err);
      }
    };

    createPaymentIntent();
  }, [precio]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message || 'Error al procesar el pago');
        setIsProcessing(false);
        return;
      }

      const { error: confirmError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/dashboard`,
          payment_method_data: {
            billing_details: {
              name: user?.fullName || 'Usuario',
              email: user?.primaryEmailAddress?.emailAddress || 'user@example.com',
              phone: user?.primaryPhoneNumber?.phoneNumber || '+1234567890',
              address: {
                country: 'VE', // Venezuela por defecto
                line1: empresaData?.direccion || 'Dirección de la empresa',
                line2: '', // Campo requerido por Stripe
                city: 'Caracas',
                state: 'Distrito Capital',
                postal_code: '1010',
              },
            },
          },
        },
      });

      if (confirmError) {
        setError(confirmError.message || 'Error al confirmar el pago');
      }
    } catch (err) {
      setError('Error inesperado durante el pago');
      console.error('Payment error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const isFormValid = Boolean(clientSecret);

  useEffect(() => {
    onValidationChange?.(isFormValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  if (!clientSecret) {
    return (
      <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Inicializando sistema de pago...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl">
      <div className="text-center mb-6">
        <h1 className="text-lg sm:text-xl font-bold text-white mb-2">Datos de Pago</h1>
        <p className="text-white text-sm">Completa la información de tu método de pago para activar tu cuenta.</p>
      </div>

      {/* Información del plan */}
      <div className="bg-white/5 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold">Plan Seleccionado</h3>
          <span className="text-primary font-bold text-lg">${precio}/mes</span>
        </div>
        <div className="space-y-2 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Pago procesado por Stripe</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Facturación automática mensual</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Cancelación en cualquier momento</span>
          </div>
        </div>
      </div>

      {/* Formulario de pago de Stripe */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-white/5 rounded-lg p-4">
          <PaymentElement 
            options={{
              layout: 'tabs',
              fields: {
                billingDetails: {
                  name: 'auto',
                  email: 'auto',
                  phone: 'auto',
                  address: 'never',
                },
              },
            }}
          />
        </div>

        {/* Mensaje de error */}
        {error && (
          <div className="bg-error/10 border border-error/20 rounded-lg p-3">
            <p className="text-error text-sm">{error}</p>
          </div>
        )}

        {/* Botón de pago */}
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full btn btn-primary"
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Procesando pago...
            </div>
          ) : (
            `Pagar $${precio}`
          )}
        </button>
      </form>

      {/* Indicador de validación */}
      <div className="flex items-center justify-center mt-4">
        <div className={`w-3 h-3 rounded-full ${isFormValid ? "bg-success" : "bg-base-300"}`}></div>
        <span className={`text-xs ml-2 ${isFormValid ? "text-success" : "text-white"}`}>
          {isFormValid ? "Listo para procesar el pago" : "Inicializando..."}
        </span>
      </div>
    </div>
  );
}

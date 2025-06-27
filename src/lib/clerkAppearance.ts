export const clerkAppearance = {
  variables: {
    colorPrimary: "#6c63ff", // color principal de la marca
    colorBackground: "rgba(255,255,255,0.60)", // fondo mucho más claro
    colorText: "#22223b",
    colorInputBackground: "rgba(255,255,255,0.85)", // inputs casi blancos
    colorInputText: "#22223b",
    colorDanger: "#ff4d4f",
    borderRadius: "18px",
    fontFamily: "inherit",
  },
  elements: {
    card: "backdrop-blur-lg bg-white/60 border border-white/40 shadow-2xl",
    formButtonPrimary: "bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/80 transition hover-glow",
    formFieldInput: "bg-white/80 text-base-content border border-white/40 rounded-lg px-4 py-2 placeholder:text-base-content/60",
    headerTitle: "text-primary font-bold text-2xl",
    headerSubtitle: "text-base-content/80",
    socialButtonsBlockButton: "bg-white/70 text-primary border border-white/40 rounded-lg hover:bg-primary/10",
    footer: "hidden", // oculta el footer de Clerk (branding)
  },
}; 
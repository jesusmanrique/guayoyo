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
    formButtonPrimary: "bg-gradient-to-r from-[#5caaff] to-[#3ee6ff] text-white font-bold rounded-full shadow hover:scale-105 transition hover-glow glassmorph-btn",
    formFieldInput: "bg-white/80 text-base-content border border-white/40 rounded-lg px-4 py-2 placeholder:text-base-content/60",
    headerTitle: "text-primary font-bold text-2xl",
    headerSubtitle: "text-base-content/80",
    socialButtonsBlockButton: "bg-gradient-to-r from-[#5caaff] to-[#3ee6ff] text-white border border-white/40 rounded-full hover:scale-105 glassmorph-btn",
    footer: "hidden", // oculta el footer de Clerk (branding)
  },
}; 
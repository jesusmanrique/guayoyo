export const clerkAppearance = {
  variables: {
    colorPrimary: "#5caaff", // Color principal de la aplicación (azul-cian)
    colorBackground: "rgba(26, 42, 58, 0.7)", // Fondo glassmorfismo
    colorText: "#ffffff", // Texto principal
    colorInputBackground: "rgba(255, 255, 255, 0.1)", // Fondo de inputs
    colorInputText: "#ffffff", // Texto de inputs
    colorDanger: "#ff4d4f", // Color de error
    borderRadius: "18px",
    fontFamily: "inherit",
    fontSize: "16px",
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  },
  elements: {
    card: "backdrop-blur-lg bg-gradient-to-br from-white/15 via-[#1a2a3a]/30 to-[#3ee6ff]/10 border border-white/20 rounded-3xl shadow-2xl",
    formButtonPrimary: "glassmorph-btn bg-gradient-to-r from-[#5caaff] to-[#3ee6ff] text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-300",
    formButtonSecondary: "glassmorph-btn bg-gradient-to-r from-white/10 to-white/5 text-white border border-white/20 rounded-full hover:scale-105 transition-all duration-300",
    formFieldInput: "glassmorph-btn bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/60 backdrop-blur-sm",
    formFieldLabel: "text-white/90 font-semibold text-sm",
    headerTitle: "text-white font-extrabold text-3xl md:text-4xl drop-shadow-lg",
    headerSubtitle: "text-white/70 text-lg leading-relaxed",
    socialButtonsBlockButton: "glassmorph-btn bg-gradient-to-r from-[#5caaff] to-[#3ee6ff] text-white border border-white/20 rounded-full hover:scale-105 transition-all duration-300",
    dividerLine: "bg-white/20",
    dividerText: "text-white/60 font-medium",
    formFieldAction: "text-cyan-400 hover:text-cyan-300 font-medium transition-colors",
    formFieldHintText: "text-white/60 text-sm",
    formFieldErrorText: "text-red-400 font-medium",
    footer: "hidden", // Oculta el footer de Clerk (branding)
    footerAction: "text-white/70 hover:text-white transition-colors",
    footerActionLink: "text-cyan-400 hover:text-cyan-300 font-medium transition-colors",
    identityPreviewText: "text-white/90",
    identityPreviewEditButton: "text-cyan-400 hover:text-cyan-300 font-medium transition-colors",
    profileSection: "border-white/20",
    profileSectionTitle: "text-white font-bold text-lg",
    profileSectionContent: "text-white/80",
    userPreviewMainIdentifier: "text-white font-bold",
    userPreviewSecondaryIdentifier: "text-white/70",
    userButtonPopoverCard: "backdrop-blur-lg bg-gradient-to-br from-white/15 via-[#1a2a3a]/30 to-[#3ee6ff]/10 border border-white/20 rounded-3xl shadow-2xl",
    userButtonPopoverActionButton: "text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all",
    userButtonPopoverActionButtonText: "text-white/90 hover:text-white transition-colors",
    userButtonPopoverFooter: "border-white/20",
    userButtonPopoverFooterAction: "text-white/70 hover:text-white transition-colors",
  },
}; 
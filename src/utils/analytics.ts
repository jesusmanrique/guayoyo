import ReactGA from "react-ga4";

export const initGA = (): void => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize("G-WGSPX2PVPN"); // Reemplaza con tu Measurement ID
  }
};

export const logPageView = (): void => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }
};

export const logEvent = (
  category: string,
  action: string,
  label?: string
): void => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};

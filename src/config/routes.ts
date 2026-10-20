export const ROUTES = {
  home: "/",
  about: "/about",
  contact: "/contact",
} as const;

export const MAIN_NAV = [
  { label: "About us", href: ROUTES.about },
  { label: "What we do", href: `${ROUTES.home}#what-we-do` },
  { label: "Clients", href: `${ROUTES.home}#clients` },
  { label: "Contact", href: ROUTES.contact },
] as const;

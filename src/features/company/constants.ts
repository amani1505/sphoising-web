import type { ClientLogo, Project, Stage, Stat } from "./types/company.types";

/** The four stages of SPH Group's operating model, in the order a project moves through them. */
export const STAGES: readonly Stage[] = [
  {
    title: "Design",
    description: "We plan the layout, size and fit-out around how the building will be used.",
  },
  {
    title: "Supply",
    description: "Containers, panels and fittings are prepared and delivered to your site.",
  },
  {
    title: "Install",
    description: "Our team assembles and connects the building, then hands it over ready to use.",
  },
  {
    title: "Maintain",
    description: "We service and repair what we install so it stays in use for years.",
  },
];

export const STATS = [
  { value: 98, suffix: "+", label: "projects completed" },
  { value: 70, suffix: "+", label: "organisations served" },
  { value: 21, suffix: "+", label: "specialists on the team" },
] as const satisfies readonly Stat[];

/** What SPH builds, cycled in the hero headline. */
export const BUILDING_TYPES = ["site offices", "checkpoints", "housing", "container units"] as const;

export const CLIENTS: readonly ClientLogo[] = [
  { name: "Yara", src: "/images/clients/yara.png" },
  { name: "Tanzania Ports Authority", src: "/images/clients/tanzania-ports-authority.png" },
  { name: "UNICEF", src: "/images/clients/unicef.png" },
  { name: "AngloGold Ashanti", src: "/images/clients/anglogold-ashanti.png" },
  { name: "Songas", src: "/images/clients/songas.png" },
  { name: "Yapı Merkezi", src: "/images/clients/yapi-merkezi.png" },
  { name: "SSTL Group", src: "/images/clients/sstl-group.png" },
  { name: "Holtan Builders", src: "/images/clients/holtan-builders.png" },
  { name: "The Rizq Foundation", src: "/images/clients/rizq-foundation.png" },
  { name: "Ocean Business Partners", src: "/images/clients/ocean-business-partners.png" },
  { name: "Pivotech", src: "/images/clients/pivotech.png" },
];

export const PROJECTS: readonly Project[] = [
  {
    title: "Container checkpoint office",
    src: "/images/project-checkpoint-office.jpg",
    alt: "A white shipping container converted into an office, with blue frame, windows and an open door, on a paved yard.",
  },
  {
    title: "Custom-made multi-room unit",
    src: "/images/project-custom-unit.jpg",
    alt: "A long white container building with several window and door openings cut along its side, during fit-out.",
  },
];

export const DIVISIONS: readonly string[] = [
  "Design and installation of prefabricated housing",
  "Furniture manufacturing",
  "Personal protective equipment",
  "Industrial equipment and spare parts",
  "Agribusiness",
  "Tele agency",
];

export const MD_MESSAGE = {
  pullQuote:
    "A dream of many ideas coming together, with great passion and an opportunity seized, is how SPH Group came to be.",
  paragraphs: [
    "Thank you for your interest in SPH Group.",
    "A dream of many ideas coming together, with great passion and an opportunity seized, is how SPH Group came to be. Our aim in building SPH Group was to create an independent company that works across all sectors.",
    "We built our divisions to make full use of our own resources and remove the need to depend on others, which saves our clients a great deal of time.",
    "We have grown our divisions quickly while staying close to our customers, understanding their problems and needs. SPH Group was designed to be customer-focused from the beginning, and we are working to become a one-stop solution for every part of a project.",
    "Our infrastructure has grown, our divisions have expanded and our team keeps getting bigger. We take these as signs that we are on the right path, and we intend to keep going.",
    "Come, let us work together and serve your interests. Your interest in what we do and what we stand for means a lot to us.",
  ],
  signature: "Managing Director, SPH Group",
} as const;

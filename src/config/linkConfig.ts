export interface ProfileConfig {
  name: string;
  tagline: string;
  logo: string;
  instagram: string;
}

export type IconType =
  | "website"
  | "music"
  | "spotify"
  | "youtube"
  | "apple-music"
  | "shirt"
  | string;

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon: IconType;
  enabled: boolean;
  featured: boolean;
}

export interface LinkConfig {
  profile: ProfileConfig;
  links: LinkItem[];
}

export const publicUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const linkConfig: LinkConfig = {
  profile: {
    name: "Missão Sedentos",
    tagline: "Por Jesus nós somos?! Sedentos!",
    logo: publicUrl("assets/logo-missao-sedentos.png"),
    instagram: "https://www.instagram.com/missaosedentos_/",
  },

  links: [
    {
      id: "official-site",
      label: "Conheça nosso site oficial",
      url: "https://missaosedentos.vercel.app/",
      icon: "website",
      enabled: true,
      featured: false,
    },
    {
      id: "pre-save",
      label: "Faça o pré-save de Quebranta-me",
      url: "",
      icon: "music",
      enabled: false,
      featured: true,
    },
    {
      id: "spotify",
      label: "Ouça no Spotify",
      url: "https://open.spotify.com/intl-pt/artist/7rFSEkoNPMpgkBk8CTjwFu?si=nHDhHrI7QkimEfrLVTkx2g",
      icon: "spotify",
      enabled: true,
      featured: false,
    },
    {
      id: "youtube",
      label: "Inscreva-se no YouTube",
      url: "https://www.youtube.com/@MissaoSedentos",
      icon: "youtube",
      enabled: true,
      featured: false,
    },
    {
      id: "apple-music",
      label: "Ouça no Apple Music",
      url: "",
      icon: "apple-music",
      enabled: false,
      featured: false,
    },
    {
      id: "store",
      label: "Adquira já sua camiseta Quebranta-me",
      url: "",
      icon: "shirt",
      enabled: false,
      featured: true,
    },
  ],
};

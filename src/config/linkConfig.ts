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
  | "whatsapp"
  | string;

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon: IconType;
  enabled: boolean;
  featured: boolean;
  visibleFrom?: string;
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
      id: "pre-save",
      label: "Ouça quebranta-me na sua plataforma preferida",
      url: "https://offstep.link/726235452427",
      icon: "music",
      enabled: true,
      featured: true,
      visibleFrom: "2026-09-09T18:00:00-03:00",
    },
    {
      id: "official-site",
      label: "Conheça nosso site oficial",
      url: "https://missaosedentos.vercel.app/",
      icon: "website",
      enabled: true,
      featured: false,
    },
    {
      id: "whatsapp",
      label: "Grupo oficial no WhatsApp",
      url: "https://chat.whatsapp.com/GXYSHjogv4Z9w7wipP7WUg?s=hd&p=i&mlu=4&ilr=4",
      icon: "whatsapp",
      enabled: true,
      featured: false,
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

export type Stage = "preparatory" | "secondary";

export type LocationKey = "monshat_el_okhwa" | "borg_el_noor" | "mit_el_amel";

export interface LocationInfo {
  key: LocationKey;
  name: string; // short area name, e.g. "برج النور"
  centerName: string; // full center name shown to students
  facebook?: string;
}

// Preparatory grades: one shared group, fixed location.
export interface SingleGroupOffering {
  schedule: string;
  whatsappLink: string;
}

// Secondary grades: gender-split groups, offered per location.
export interface LocationOffering {
  locationKey: LocationKey;
  schedule: string; // may contain multiple "\n"-separated groups
  whatsappBoys: string;
  whatsappGirls: string;
}

export interface PrepGrade {
  id: string;
  name: string;
  subject: string;
  offering: SingleGroupOffering;
}

export interface SecondarySystem {
  key: string; // e.g. "general" | "baccalaureate"
  name: string;
  locations: LocationOffering[];
}

export interface SecondaryGrade {
  id: string;
  name: string;
  subject: string;
  // Grade 2 splits into systems (each with its own locations); grades 1 & 3
  // offer locations directly.
  systems?: SecondarySystem[];
  locations?: LocationOffering[];
}

export type WhatsAppDisplay =
  | { mode: "single"; link: string }
  | { mode: "split"; boys: string; girls: string };

export interface TeacherProfile {
  name: string;
  title: string;
  handle: string; // short latin handle for the profile card, e.g. "ahmed_wahid"
  status: string; // e.g. "متاح لحجز مواعيد جديدة"
  bio: string;
  phones: {
    primary: string;
    secondary: string;
  };
  photoUrl: string;
  facebookPage?: string;
}

export interface ExperienceStat {
  label: string;
  value: string;
}

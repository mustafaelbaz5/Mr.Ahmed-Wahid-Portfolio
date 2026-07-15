import type { LocationInfo, LocationKey } from "./types";

export const locations: Record<LocationKey, LocationInfo> = {
  monshat_el_okhwa: {
    key: "monshat_el_okhwa",
    name: "منشأة الأخوة",
    centerName: "سنتر الدكتور — منشأة الأخوة، بجوار الملعب الكبير",
  },
  borg_el_noor: {
    key: "borg_el_noor",
    name: "برج النور",
    centerName: "سنتر سمارت برج النور - Smart Center",
    facebook: "https://www.facebook.com/share/1CTU9TT1i1/",
  },
  mit_el_amel: {
    key: "mit_el_amel",
    name: "ميت العامل",
    centerName: "سنتر المهندس - ميت العامل",
    facebook: "https://www.facebook.com/share/1EdD2eSTJd/",
  },
};

// Preparatory grades are only ever taught at this location.
export const PREP_LOCATION_KEY: LocationKey = "monshat_el_okhwa";

// theme
import palette from "@/theme/palette";

// ----------------------------------------------------------------------

export const colorPresets = [
  // DEFAULT
  {
    name: "default",
    lighter: "#6d97a7",
    light: "#326172",
    main: "#18404F",
    dark: "#13333f",
    darker: "#0C2028",
    contrastText: "#fff",
  },

  // Jazz Blue
  {
    name: "blue",
    lighter: "#35baf5",
    light: "#1cb2f4",
    main: "#03A9F3",
    dark: "#0398db",
    darker: "#03A9F3",
    contrastText: "#fff",
  },

  // Turquoise
  {
    name: "turquoise",
    lighter: "#2bd6d7",
    light: "#2bd6d7",
    main: "#13D1D3",
    dark: "#11bcbe",
    darker: "#0fa7a9",
    contrastText: "#fff",
  },
  // Charcoal
  {
    name: "charcoal",
    lighter: "#2e3241",
    light: "#343949",
    main: "#3A3F51",
    dark: "#4e5262",
    darker: "#616574",
    contrastText: "#fff",
  },
  // green
  {
    name: "green",
    lighter: "#0E918C",
    light: "#11a25a",
    main: "#13B464",
    dark: "#11a25a",
    darker: "#2CB764",
    contrastText: "#fff",
  },
];

export const defaultPreset = colorPresets[0];
export const bluePreset = colorPresets[1];
export const turquoisePreset = colorPresets[2];
export const charcoalPreset = colorPresets[3];
export const greenPreset = colorPresets[4];

export default function getColorPresets(presetsKey: string) {
  return {
    blue: bluePreset,
    green: greenPreset,
    turquoise: turquoisePreset,
    charcoal: charcoalPreset,
    default: defaultPreset,
  }[presetsKey];
}

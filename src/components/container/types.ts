const absoluteLengthUnitSuffix = {
  Pixel: "px",
  Centimeter: "cm",
  Millimeter: "mm",
  Quarter: "Q",
  Inch: "in",
  Pica: "pc",
  Point: "pt",
} as const;

const relativeLengthUnitSuffix = {
  REM: "rem",
  EM: "em",
  ViewWidth: "vw",
  ViewHeight: "vh",
  ViewMin: "vmin",
  ViewMax: "vmax",
} as const;

const multiplicationUnitSuffix = {
  Percent: "%",
  Magnification: "",
} as const;

const lengthUnitSuffix = {
  ...absoluteLengthUnitSuffix,
  ...relativeLengthUnitSuffix,
};
export type LengthUnitSuffix =
  typeof lengthUnitSuffix[keyof typeof lengthUnitSuffix];

const unitSuffix = {
  ...lengthUnitSuffix,
  ...multiplicationUnitSuffix,
};
type UnitSuffix = typeof unitSuffix[keyof typeof unitSuffix];

export type Unit<Suffix extends UnitSuffix> = `${number}${Suffix}`;

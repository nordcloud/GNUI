const AbsoluteLengthUnitSuffix = {
  Pixel: "px",
  Centimeter: "cm",
  Millimeter: "mm",
  Quarter: "Q",
  Inch: "in",
  Pica: "pc",
  Point: "pt",
} as const;
export type AbsoluteLengthUnitSuffix =
  typeof AbsoluteLengthUnitSuffix[keyof typeof AbsoluteLengthUnitSuffix];

const RelativeLengthUnitSuffix = {
  REM: "rem",
  EM: "em",
  ViewWidth: "vw",
  ViewHeight: "vh",
  ViewMin: "vmin",
  ViewMax: "vmax",
} as const;
export type RelativeLengthUnitSuffix =
  typeof RelativeLengthUnitSuffix[keyof typeof RelativeLengthUnitSuffix];

const MultiplicationUnitSuffix = {
  Percent: "%",
  Magnification: "",
} as const;
export type MultiplicationUnitSuffix =
  typeof MultiplicationUnitSuffix[keyof typeof MultiplicationUnitSuffix];

const LengthUnitSuffix = {
  ...AbsoluteLengthUnitSuffix,
  ...RelativeLengthUnitSuffix,
};
export type LengthUnitSuffix =
  typeof LengthUnitSuffix[keyof typeof LengthUnitSuffix];

export const UnitSuffix = {
  ...LengthUnitSuffix,
  ...MultiplicationUnitSuffix,
};
export type UnitSuffix = typeof UnitSuffix[keyof typeof UnitSuffix];

export type Unit<Suffix extends UnitSuffix> = `${number}${Suffix}`;

export type ConvertLengthUnitArgsOptions = {
  rem?: Element | Unit<"px">;
  em?: Element | Unit<"px">;
  viewWidth?: Unit<"px">;
  viewHeight?: Unit<"px">;
};
